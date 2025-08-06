import React, { useEffect } from "react";
import {getGenomeBySequenceId}  from "../api/operations/genomeOperations"
import { getTranscriptByGeneId } from "../api/operations/transcriptOperations"
import { getProteinByGeneId } from "../api/operations/proteinOperations"

const ApiTestPage = () => {
  useEffect(() => {
    const testApis = async () => {
      const proteinData_through_gene_id = await getProteinByGeneId("EHI7A_000150")();
      console.log("protein seequence by gene id:", proteinData_through_gene_id);

      const transcript_Data_through_gene_id = await getTranscriptByGeneId("EHI7A_000150")();
      console.log("Rna/mrna:", transcript_Data_through_gene_id);
      
      const genome_Data_through_gene_id = await getGenomeBySequenceId("DS571145")();
      console.log("genome data for corresdonding gene id:", genome_Data_through_gene_id);

    };

    testApis();
  }, []);

  return <div>Check console for API operation test results</div>;
};

export default ApiTestPage;
