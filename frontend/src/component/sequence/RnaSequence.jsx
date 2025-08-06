import React from "react";

const RnaSequence = ({ rna }) => {
  const { transcript_id, rna_length, rna_sequence } = rna;

  const handleCopy = () => {
    navigator.clipboard.writeText(rna_sequence);
  };

  const handleDownload = () => {
    const fastaHeader = `> ${transcript_id}`;
    const fastaContent = `${fastaHeader}\n${rna_sequence}`;
    const blob = new Blob([fastaContent], { type: "text/plain;charset=utf-8" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${transcript_id}_rna.fasta`;
    downloadLink.click();
  };

  return (
    <div className="mb-6 border border-gray-300 w-[1210px] rounded-md bg-white shadow-sm">
      <div className="px-4 pt-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          Predicted RNA/mRNA Sequence (Introns Sliced Out)
        </h3>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm underline">
            {rna_length} nt
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

      <div className="p-4 bg-gray-50 text-sm font-mono whitespace-pre-wrap break-words max-h-96 overflow-auto rounded-b-md">
        {rna_sequence}
      </div>
    </div>
  );
};

export default RnaSequence;


