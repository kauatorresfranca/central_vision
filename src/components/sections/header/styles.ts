import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles' // Ajuste o path se necessário

export const HeaderWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

export const TopBar = styled.div`
  background-color: ${colors.secondary};
  color: #fff;
  padding: 8px 0;
  font-size: 13px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .phone { display: none; }
    text-align: center;
    justify-content: center;
  }
`

export const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 15px 0;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const LogoContainer = styled.a`
  img {
    height: 60px; // Ajuste conforme a proporção da sua logo
    width: auto;
  }
`

export const Nav = styled.nav<{ isOpen: boolean }>`
  ul {
    display: flex;
    gap: 32px;

    li a {
      color: ${colors.text};
      font-weight: 400;
      font-size: 15px;
      position: relative;
      padding-bottom: 4px;
      transition: color 0.3s ease;

      /* Efeito de linha animada no hover */
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${colors.primary};
        transition: width 0.3s ease;
      }

      &:hover {
        color: ${colors.primary};
        
        &::after {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 30px;
    border-top: 1px solid #f0f0f0;
    animation: slideIn 0.3s ease-out;

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ul {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const WhatsappBtn = styled.a`
  background-color: ${colors.accent}; // O verde chama atenção para conversão
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none; // No mobile, costumamos usar o botão flutuante
  }
`

export const MobileMenu = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;

  span {
    width: 25px;
    height: 3px;
    background-color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }
`