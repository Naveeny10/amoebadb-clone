import { apiConnector } from "../apiConnector"
import { Endpoints } from "../apis"

const {
  GET_PROTEIN_BY_ID,
  GET_PROTEIN_BY_GENE_ID,
  GET_PROTEIN_BY_TRANSCRIPT_ID
} = Endpoints

export function getProteinById(id) {
  return async () => {
    try {
      const response = await apiConnector("GET", `${GET_PROTEIN_BY_ID}/${id}`)
      return response.data
    } catch (error) {
      console.error("GET_PROTEIN_BY_ID ERROR:", error)
      return null
    }
  }
}

export function getProteinByGeneId(geneId) {
  return async () => {
    try {
      const response = await apiConnector("GET", `${GET_PROTEIN_BY_GENE_ID}/${geneId}`)
      return response.data
    } catch (error) {
      console.error("GET_PROTEIN_BY_GENE_ID ERROR:", error)
      return null
    }
  }
}

export function getProteinByTranscriptId(transcriptId) {
  return async () => {
    try {
      const response = await apiConnector("GET", `${GET_PROTEIN_BY_TRANSCRIPT_ID}/${transcriptId}`)
      return response.data
    } catch (error) {
      console.error("GET_PROTEIN_BY_TRANSCRIPT_ID ERROR:", error)
      return null
    }
  }
}
