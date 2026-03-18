import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const ProductsSection = styled.section`
  padding: 100px 0;
  background-color: #fff;
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .badge {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${colors.primary}15;
    color: ${colors.primary};
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 36px;
    color: ${colors.secondary};
    margin-bottom: 12px;
    font-weight: 700;

    span {
      color: ${colors.primary};
    }
  }

  p {
    font-size: 16px;
    color: #666;
    max-width: 500px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 { font-size: 28px; }
  }
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const ProductCard = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: ${colors.primary}30;
  }

  .image-wrapper {
    height: 260px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }

  &:hover .image-wrapper img {
    transform: scale(1.08);
  }
`

export const CardBody = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h3 {
    font-size: 22px;
    color: ${colors.secondary};
    margin-bottom: 10px;
    font-weight: 700;
  }

  p {
    font-size: 15px;
    color: #777;
    line-height: 1.6;
    margin-bottom: 20px;
    flex-grow: 1;
  }
`

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 32px;

  li {
    font-size: 14px;
    color: #555;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 0.8;
  }
`

export const WhatsappCta = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  background-color: transparent;
  color: ${colors.secondary};
  border: 1.5px solid ${colors.secondary}15;
  padding: 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.secondary};
    color: #fff;
    border-color: ${colors.secondary};
    gap: 15px;
  }
`