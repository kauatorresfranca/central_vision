import styled, { keyframes } from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`

export const HeaderWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`

export const TopBar = styled.div`
  background-color: ${colors.secondary};
  color: #fff;
  padding: 10px 0;
  font-size: 13px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .phone {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.2s;

    &:hover { opacity: 0.8; }
  }

  @media (max-width: ${breakpoints.tablet}) {
    .phone { display: none; }
    .container { justify-content: center; }
  }
`

export const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 12px 0;
  border-bottom: 1px solid #f5f5f5;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const LogoContainer = styled.a`
  display: flex;
  img {
    height: 55px;
    width: auto;
    @media (max-width: ${breakpoints.mobile}) {
      height: 45px;
    }
  }
`

export const Nav = styled.nav<{ isOpen: boolean }>`
  ul {
    display: flex;
    gap: 28px;
    list-style: none;

    li a {
      color: ${colors.text};
      font-weight: 600;
      font-size: 15px;
      position: relative;
      padding-bottom: 4px;
      transition: all 0.3s ease;
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
        &::after { width: 100%; }
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 40px 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    animation: ${slideIn} 0.3s ease-out;

    ul {
      flex-direction: column;
      align-items: center;
      gap: 25px;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const WhatsappBtn = styled.a`
  background-color: ${colors.primary};
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${colors.primary}30;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${colors.primary}50;
    filter: brightness(1.1);
  }

  @media (max-width: ${breakpoints.laptop}) {
    display: none;
  }
`

export const MobileMenu = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
  padding: 5px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`