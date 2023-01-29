import styled from '@emotion/styled'

export const Container = styled.div`
  border: 2px solid;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 240px;
  width: 500px;
  padding: 30px;
`
export const Title = styled.h5`
  margin-top: 20px;
  margin-bottom: -20px;
`

export const Button = styled.button`
  display: block;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  padding: 6px;
  background-color: #d4d5d8;
  &:hover {
    background-color: #538ce9;
  }
`
export const Input = styled.input`
font-size: 20px
`