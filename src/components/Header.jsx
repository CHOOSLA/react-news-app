import { useEffect } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  display: block;
  width: 100%;
  height: 4rem;
  background-color: black;
  color: white;
  padding: 0 30px;
`

const HeaderCon = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const HeaderTextCon = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: x-large;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22bbcf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + div {
    margin-left: 1rem;
  }
`

const Header = ({ category, onSelect }) => {
  const cates = ['Business', 'Entertainment', 'General', 'Health']

  return (
    <>
      <Container>
        <HeaderCon>
          {cates.map((cate) => {
            return (
              <HeaderTextCon
                key={cate}
                onClick={() => {
                  console.log('눌림')
                  onSelect(cate)
                }}
                active={category === cate}
              >
                {cate}
              </HeaderTextCon>
            )
          })}
        </HeaderCon>
      </Container>
    </>
  )
}
export default Header
