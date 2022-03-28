import styled from 'styled-components'

export const Container = styled.div`
  padding: 80px 60px;
  background: #272643;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;  
  color: white;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
`


export const Link = styled.div`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0d6efd;
  }
`

export const Title = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`

export const Info = styled.div`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
`