import { apiConnector } from "../apiConnector"
import { Endpoints } from "../apis"

const { GET_CDS_BY_ID } = Endpoints

export function getCdsById(id) {
  return async () => {
    try {
      const response = await apiConnector("GET", `${GET_CDS_BY_ID}/${id}`)
      return response.data
    } catch (error) {
      console.error("GET_CDS_BY_ID ERROR:", error)
      return null
    }
  }
}
