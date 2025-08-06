import { apiConnector } from "../apiConnector"
import { Endpoints } from "../apis"

const {
  GET_TRANSCRIPT_BY_ID,
  GET_TRANSCRIPT_BY_GENE_ID,
} = Endpoints

export function getTranscriptById(id) {
  return async () => {
    try {
      const response = await apiConnector("GET", `${GET_TRANSCRIPT_BY_ID}/${id}`)
      return response.data
    } catch (error) {
      console.error("GET_TRANSCRIPT_BY_ID ERROR:", error)
      return null
    }
  }
}

export function getTranscriptByGeneId(geneId) {
  return async () => {
    try {
      const response = await apiConnector("GET", `${GET_TRANSCRIPT_BY_GENE_ID}/${geneId}`)
      return response.data
    } catch (error) {
      console.error("GET_TRANSCRIPT_BY_GENE_ID ERROR:", error)
      return null
    }
  }
}
