import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 30px;
  background: #272643;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin-right: auto;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  
  grid-gap: 20px;
`

export const Link = styled.div`
  color: #fff;
  margin-bottom: 15px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0d6efd;
  }
`

export const Title = styled.div`
  font-size: 22px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`

export const Info = styled.div`
  color: #fff;
  margin-bottom: 15px;
  font-size: 16px;
  text-decoration: none;
`