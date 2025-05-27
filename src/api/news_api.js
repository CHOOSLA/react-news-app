import axios from 'axios'

const apiKey = import.meta.env.VITE_NEWS_API_KEY

const useNewApi = () => {
  const getHeadline = async () => {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
  }

  const getHeadlineByCate = async () => {
    return await axios.get(
      `https://newsapi.org/v2/everything?q=Apple&from=2025-05-26&sortBy=popularity&apiKey=${apiKey}`,
    )
  }

  const getEveryByFilter = async (category = 'everything') => {
    return await axios.get(
      `https://newsapi.org/v2/everything?q=${category}&sortBy=popularity&apiKey=${apiKey}`,
    )
  }

  return { getHeadline, getHeadlineByCate, getEveryByFilter }
}
export default useNewApi
