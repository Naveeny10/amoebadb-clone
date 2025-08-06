import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import GenomeSequence from "./sequence/GenomeSequence";

const GenomicLocation = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSequence, setShowSequence] = useState(false);

  

  if (!location) return null;

  const {
    sequence_id,
    start,
    end,
    strand,
    genome_length,
    sequence_level,
    organism_abbrev,
    genome_sequence,
  } = location;

  const locationText = `${start} - ${end} (${strand})`;

  const handleDownload = () => {
    const fastaContent = `>genomic_sequence_${sequence_id}\n${genome_sequence}`;
    const blob = new Blob([fastaContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${sequence_id}.fasta`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="border border-gray-300 rounded-md text-sm text-gray-800 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2 border-b">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          
          <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-gray-700 focus:outline-none"
  >
    <FaChevronRight
      size={16}
      className={`transition-transform duration-200 ${
        isOpen ? "rotate-90" : ""
      }`}
    />
  </button>
           

          <span>
            Genomic Location <sup>§</sup>
          </span>
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-600 hover:underline text-sm"
        >
        </button>
      </div>

      {isOpen && (
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <button
                className="text-blue-500 text-sm hover:underline mr-4"
                onClick={handleDownload}
              >
                📥 Download
              </button>
              <a className="text-blue-500 text-sm hover:underline" href="#">
                🧬 Data sets
              </a>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-center">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="border px-4 py-2">Sequence Level</th>
                  <th className="border px-4 py-2">Genome Sequence</th>
                  <th className="border px-4 py-2">Location</th>
                  <th className="border px-4 py-2">organism_name</th>
                  <th className="border px-4 py-2">Genome Browser</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border px-4 py-2">{sequence_level}</td>
                  <td className="border px-4 py-2 text-blue-600 hover:underline cursor-pointer">
                    {sequence_id}
                  </td>
                  <td className="border px-4 py-2">{locationText}</td>
                  <td className="border px-4 py-2">{organism_abbrev}</td>
                  <td className="border px-4 py-2">
                    <span
                      className="text-blue-600 underline cursor-pointer"
                      onClick={() => setShowSequence(!showSequence)}
                    >
                      View
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {showSequence && (
            <div className="mt-4">
              <GenomeSequence
                genome={{ sequence_id, genome_length, genome_sequence }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GenomicLocation;

