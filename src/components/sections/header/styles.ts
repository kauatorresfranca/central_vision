import styled, { keyframes } from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`

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
    height: 60px;
    width: auto;
  }
`

export const Nav = styled.nav<{ isOpen: boolean }>`
  ul {
    display: flex;
    gap: 32px;
    list-style: none;

    li a {
      color: ${colors.text}; // Mantido conforme seu original
      font-weight: 400;     // Mantido conforme seu original
      font-size: 15px;
      position: relative;
      padding-bottom: 4px;
      transition: color 0.3s ease;
      text-decoration: none;

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
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 30px;
    border-top: 1px solid #f0f0f0;
    animation: ${slideIn} 0.3s ease-out;

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
  background-color: ${colors.accent};
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const MobileMenu = styled.button<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: ${colors.text};
    transition: all 0.3s ease;
    border-radius: 2px;

    /* Adicionei apenas a lógica para o X aqui */
    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'};
    }
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }
`