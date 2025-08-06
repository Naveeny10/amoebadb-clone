import React, { useState } from "react";

const sections = [
  "Gene models",
  "Link outs",
  "Genomic Location",
  "Taxonomy",
  "Orthology and synteny",
  "Transcriptomics",
  "Sequence analysis",
  "Sequences",
];

const LeftSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = sections.filter((section) =>
    section.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToSection = (id) => {
    const sectionEl = document.getElementById(id);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-64 p-4 border-r border-gray-300 h-screen sticky top-0 overflow-y-auto bg-white">
      <div className="text-sm text-blue-600 mb-4 flex gap-4">
        <button className="hover:underline">expand all</button>
        <button className="hover:underline">collapse all</button>
      </div>
      <input
        type="text"
        placeholder="Search section names..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border px-3 py-2 mb-4 rounded text-sm"
      />
      <ul className="space-y-2 text-sm">
        {filteredSections.map((section) => (
          <li
            key={section}
            onClick={() => scrollToSection(section.replace(/\s+/g, "-"))}
            className="cursor-pointer text-blue-700 hover:underline"
          >
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
