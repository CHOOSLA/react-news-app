import styled from 'styled-components'
import BaseCard from './BaseCard'
import { useState } from 'react'
import useNewApi from '../api/news_api'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  max-width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    witdh: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`

const Body = ({ category }) => {
  const { getEveryByFilter } = useNewApi()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const [selCate, setSelcate] = useState('all')

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const res = await getEveryByFilter(category)
      console.log('카테고리는 : ', category)
      setData(res.data.articles)
      console.log(res.data.articles)
      try {
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    fetchData()
  }, [category])

  if (loading) {
    return (
      <>
        <Container>
          {/* 수정필요 */}
          <h2>로딩 중 ...</h2>
        </Container>
      </>
    )
  }

  return (
    <>
      <CardBlock>
        {data &&
          data.map((article) => {
            return <BaseCard key={article.url} data={article}></BaseCard>
          })}
      </CardBlock>
    </>
  )
}
export default Body
