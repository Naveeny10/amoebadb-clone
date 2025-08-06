const BASE_URL = "http://localhost:4000/api/v1";

// GENE ENDPOINTS
export const Endpoints = {
  GET_GENE_BY_ID: BASE_URL + "/gene", // usage: /gene/:id
  GET_GENOME_BY_SEQUENCE_ID: BASE_URL + "/genome", // usage: /genome/:sequence_id
  GET_PROTEIN_BY_ID: BASE_URL + "/protein", // usage: /protein/:id
  GET_PROTEIN_BY_GENE_ID: BASE_URL + "/protein/gene", //usage: /protein/gene/:id
  GET_PROTEIN_BY_TRANSCRIPT_ID: BASE_URL + "/protein/transcript", //usage: /protein/transcript/:transcript_id
  GET_10_GENES_BY_KEYWORD: BASE_URL + "/keyword/first10", // usage: /keyword/first10/:keyword
  GET_GENES_BY_KEYWORD: BASE_URL + "/keyword", // usage: /keywords/:keyword
  GET_CDS_BY_ID: BASE_URL + "/cds", // usage: /cds/:id
  GET_TRANSCRIPT_BY_ID: BASE_URL + "/transcript", // usage: /transcript/:id
  GET_TRANSCRIPT_BY_GENE_ID: BASE_URL + "/transcript/gene", // usage: /transcript/gene/:gene_id
};

