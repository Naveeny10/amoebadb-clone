
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const taxonomyData = [
  {
    organism: "cellular organisms",
    otherNames: "biota",
    rank: "no rank",
  },
  {
    organism: "Eukaryota",
    otherNames:
      "eukaryotes, eucaryotes, Eukaryotae, Eukarya, Eucaryotae, Eucarya",
    rank: "superkingdom",
  },
  {
    organism: "Amoebozoa",
    otherNames: "Amoebozoa Luehe 1913, emend. Cavalier-Smith 1998, 2004",
    rank: "clade",
  },
  {
    organism: "Evosea",
    otherNames: "Evosea Kang et al., 2017",
    rank: "phylum",
  },
  {
    organism: "Archamoebae",
    otherNames: "N/A",
    rank: "clade",
  },
  {
    organism: "Mastigamoebida",
    otherNames: "Mastigamoebida Frenzel, 1897",
    rank: "order",
  },
  {
    organism: "Entamoebidae",
    otherNames: "Entamoebidae Chatton 1925, Entamoebida",
    rank: "family",
  },
  {
    organism: "Entamoeba",
    otherNames: "Entamoeba Casagrandi & Barbagallo 1897",
    rank: "genus",
  },
  {
    organism: "Entamoeba histolytica",
    otherNames: "N/A",
    rank: "species",
  },
  {
    organism: "Entamoeba histolytica HM-1:IMSS",
    otherNames: "N/A",
    rank: "strain",
  },
  {
    organism: "Entamoeba histolytica HM-1:IMSS-A",
    otherNames: "N/A",
    rank: "isolate",
  },
];

const Taxonomy = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md shadow-sm bg-white">
      <div
        className="cursor-pointer rounded-t-md bg-gray-200 px-4 py-2 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaChevronRight
            size={16}
            className={`transform transition-transform duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
          Taxonomy
        </h2>
      </div>

      {isOpen && (
        <div className="overflow-x-auto px-4 pb-4">
          <table className="min-w-full border border-gray-200 mt-2">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-2 border-b">Organism</th>
                <th className="text-left p-2 border-b">Other Names</th>
                <th className="text-left p-2 border-b">Rank</th>
              </tr>
            </thead>
            <tbody>
              {taxonomyData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`border-b ${
                    item.otherNames === "N/A"
                      ? "bg-gray-50 text-gray-600 italic"
                      : ""
                  }`}
                >
                  <td className="p-2">{item.organism}</td>
                  <td className="p-2">{item.otherNames}</td>
                  <td className="p-2">{item.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Taxonomy;

