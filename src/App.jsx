import styled from 'styled-components'
import Header from './components/Header'
import Body from './components/Body'
import { useCallback, useEffect, useState } from 'react'

const AppBox = styled.div`
  display: block;
  width: 100%;
  height: 100vh;

  margin: 0;
  padding: 0;
`

const App = () => {
  const [category, setCategory] = useState('all')
  // const onSelect = useCallback((category) => setCategory(category), [])
  const onSelect = (category) => setCategory(category)

  return (
    <>
      <AppBox>
        <Header onSelect={onSelect} category={category} />
        <Body category={category} />
      </AppBox>
    </>
  )
}

export default App
