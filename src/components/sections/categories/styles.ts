import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const CategoriesSection = styled.section`
  padding: 80px 0;
  background-color: #fff;
`

export const TitleArea = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 32px;
    color: ${colors.secondary};
    margin-bottom: 12px;

    span {
      color: ${colors.primary};
    }
  }

  p {
    font-size: 16px;
    color: #666;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`
    
export const CategoryCard = styled.a`
  position: relative;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-5px);
    
    img {
      transform: scale(1.1);
    }

    .overlay {
      background: linear-gradient(to top, ${colors.secondary}e6 0%, transparent 100%);
      
      p, .btn-fake {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`

export const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px 24px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
  transition: background 0.4s ease;

  h3 {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    color: #eee;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 20px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease;
  }

  .btn-fake {
    color: #fff;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 2px solid ${colors.primary};
    width: fit-content;
    padding-bottom: 4px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease 0.1s;
  }
`