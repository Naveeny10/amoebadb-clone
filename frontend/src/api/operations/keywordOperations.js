import { apiConnector } from "../apiConnector"
import { Endpoints } from "../apis"

const {
  GET_10_GENES_BY_KEYWORD,
  GET_GENES_BY_KEYWORD
} = Endpoints

export function getFirst10GenesByKeyword(keyword) {
  return async () => {
    try {
      const response = await apiConnector("GET", `${GET_10_GENES_BY_KEYWORD}/${keyword}`)
      return response.data
    } catch (error) {
      console.error("GET_10_GENES_BY_KEYWORD ERROR:", error)
      return null
    }
  }
}

export function getGenesByKeyword(keyword) {
  return async () => {
    try {
      const response = await apiConnector("GET", `${GET_GENES_BY_KEYWORD}/${keyword}`)
      return response.data
    } catch (error) {
      console.error("GET_GENES_BY_KEYWORD ERROR:", error)
      return null
    }
  }
}
