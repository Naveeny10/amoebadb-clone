import { apiConnector } from "../apiConnector"
import { Endpoints } from "../apis"

const { GET_GENE_BY_ID } = Endpoints

export function getGeneById(id) {
  return async () => {
    try {
      const response = await apiConnector("GET", `${GET_GENE_BY_ID}/${id}`)
      return response.data
    } catch (error) {
      console.error("GET_GENE_BY_ID ERROR:", error)
      return null
    }
  }
}
