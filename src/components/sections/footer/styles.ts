import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.secondary};
  color: #fff;
  padding: 80px 0 30px;
`

export const MainFooter = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr 1.5fr;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const BrandColumn = styled.div`
  img {
    height: 50px;
    margin-bottom: 24px;
    filter: brightness(0) invert(1); // Deixa a logo branca para o fundo escuro
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: #cbd5e1;
    margin-bottom: 24px;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${colors.primary};
      transform: translateY(-3px);
    }
  }
`

export const LinkColumn = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 24px;
    font-weight: 700;
  }

  ul {
    li {
      margin-bottom: 12px;
      
      a {
        font-size: 14px;
        color: #cbd5e1;
        transition: color 0.3s;
        &:hover { color: #fff; }
      }
    }

    &.contact-info li {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #cbd5e1;
      font-size: 14px;
      
      @media (max-width: ${breakpoints.tablet}) {
        justify-content: center;
      }
    }
  }
`

export const MapColumn = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 24px;
  }
`

export const MapPlaceholder = styled.div`
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
`

export const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #94a3b8;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      gap: 10px;
    }
  }
`