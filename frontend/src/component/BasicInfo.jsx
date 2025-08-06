import React from "react";

  const BasicInfo = ({ gene }) => {
    if (!gene) return null;
    console.log(gene.gene_name)
    const {
      _id,
      gene_name,
      genomic_location,
      gene_type,
      biotype_classification,
      species,
      strain,
    } = gene;
  
    const locationText = genomic_location
      ? `${genomic_location.contig}:${genomic_location.start.toLocaleString()}..${genomic_location.end.toLocaleString()}(${genomic_location.strand})`
      : "N/A";
  
    return (
      <div className="border border-gray-300 rounded-t-md p-4 text-sm text-gray-800">
        <div className="flex items-end mb-2">
          <h1 className="text-3xl font-semibold mr-3">{_id}</h1>
          <h2 className="text-xl font-medium">{gene_name}</h2>
        </div>
  
        <div className="grid grid-cols-[170px_1fr] gap-y-2 mt-4">
          <div className="font-semibold">Gene Type</div>
          <div>{gene_type}</div>
  
          <div className="font-semibold">Biotype Classification</div>
          <div>{biotype_classification}</div>
  
          <div className="font-semibold">Chromosome</div>
          <div>Not Assigned</div>
  
          <div className="font-semibold">Location</div>
          <div>{locationText}</div>
  
          <div className="font-semibold">Species</div>
          <div><i>{species}</i></div>
  
          <div className="font-semibold">Strain</div>
          <div>
            {strain}
            <span className="text-xs text-blue-600 ml-2 cursor-pointer">📊 Data set</span>
          </div>
  
          <div className="font-semibold">Status</div>
          <div>Non-Reference Strain</div>
  
          <div className="font-semibold">User Comments</div>
          <div className="text-blue-600 cursor-pointer">💬 Add the first</div>
        </div>
      </div>
    );
  };
  
  export default BasicInfo;
  