

import React, { useState } from "react";
import { Link } from "react-router-dom";

const GeneCard = ({ gene }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    _id,
    gene_name,
    gene_type,
    species,
    strain
  } = gene;

  return (
    <div className="bg-white shadow rounded-md p-4 my-1 border-black border mx-1">
      {/* Top Line - Gene ID and Name */}
      <div className="text-lg font-semibold text-blue-600">
        <span>Gene - </span>
        <Link to={`/genes/${_id}`} className="hover:underline cursor-pointer">
          {_id}
        </Link>
        <span className="text-gray-800 ml-2">{decodeURIComponent(gene_name)}</span>
      </div>

      {/* Gene Type */}
      <div className="mt-1">
        <span className="font-semibold">Gene type:</span> {gene_type.replaceAll("_", " ")}
      </div>

      {/* Species */}
      <div className="mt-1">
        <span className="font-semibold">Organism:</span> {species}
      </div>

      {/* Strain */}
      <div className="mt-1">
        <span className="font-semibold">Strain:</span> {strain}
      </div>

      {/* Expand/Collapse Section */}
      <div
        className="mt-2 text-sm text-gray-700 cursor-pointer select-none flex items-center gap-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-lg">{isExpanded ? "▾" : "▸"}</span>
        <span className="font-medium">Fields matched:</span>
        {!isExpanded && <span className="italic">Gene ID; Names, IDs, and aliases</span>}
      </div>

      {isExpanded && (
        <div className="pl-6 pt-1 text-sm text-gray-700 space-y-1">
          <div>
            <span className="italic">Gene ID:</span>{" "}
            <span className="font-semibold">{_id}</span>
          </div>
          <div>
            <span className="italic">Names, IDs, and aliases:</span>{" "}
            <span className="font-semibold">{_id}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneCard;

