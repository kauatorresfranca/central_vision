import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
`

export const Tooltip = styled.span`
  position: absolute;
  right: 70px;
  background-color: #333;
  color: #fff;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #333;
  }
`

export const WhatsAppWrapper = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 65px;
  height: 65px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: ${pulse} 2s infinite;
  text-decoration: none;

  svg {
    /* Garante que o ícone fique centralizado independente de padding */
    display: block;
  }

  &:hover {
    animation: none; /* Para a animação ao passar o mouse para facilitar o clique */
    transform: scale(1.1);
    background-color: #20ba5a;
    
    ${Tooltip} {
      opacity: 1;
      visibility: visible;
      right: 80px;
    }
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;

    ${Tooltip} {
      display: none; /* Esconde tooltip no mobile para não atrapalhar */
    }
  }
`