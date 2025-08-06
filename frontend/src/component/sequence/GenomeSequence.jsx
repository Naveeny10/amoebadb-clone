import React from "react";

const GenomeSequence = ({ genome }) => {
  const { sequence_id, genome_length, genome_sequence } = genome;

  const handleCopy = () => {
    navigator.clipboard.writeText(genome_sequence);
  };

  const handleDownload = () => {
    const fastaHeader = `> ${sequence_id}`;
    const fastaContent = `${fastaHeader}\n${genome_sequence}`;
    const blob = new Blob([fastaContent], { type: "text/plain;charset=utf-8" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${sequence_id}_genome.fasta`;
    downloadLink.click();
  };

  return (
    <div className="mb-6 border border-gray-300 w-[1210px] rounded-md bg-white shadow-sm">
      <div className="px-4 pt-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          Genomic DNA Sequence
        </h3>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm underline">
            {genome_length} nt
          </span>
          <div className="flex gap-2">
            <button
              className="bg-gray-100 px-2 py-1 text-xs rounded border border-gray-300 hover:bg-gray-200"
              onClick={handleCopy}
            >
              Copy to clipboard
            </button>
            <button
              className="bg-blue-100 px-2 py-1 text-xs rounded border border-blue-300 hover:bg-blue-200"
              onClick={handleDownload}
            >
              Download FASTA
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable genome sequence viewer */}
      <div className="p-4 bg-gray-50 text-sm font-mono whitespace-pre-wrap break-words overflow-x-auto overflow-y-auto rounded-b-md h-48">
        {genome_sequence}
      </div>
    </div>
  );
};

export default GenomeSequence;



