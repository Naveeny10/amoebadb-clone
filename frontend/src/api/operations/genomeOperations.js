import { apiConnector } from "../apiConnector"
import { Endpoints } from "../apis"

const { GET_GENOME_BY_SEQUENCE_ID } = Endpoints

export function getGenomeBySequenceId(sequenceId) {
  return async () => {
    try {
      const response = await apiConnector("GET", `${GET_GENOME_BY_SEQUENCE_ID}/${sequenceId}`)

      return response.data
    } catch (error) {
      console.error("GET_GENOME_BY_SEQUENCE_ID ERROR:", error)
      return null
    }
  }
}
