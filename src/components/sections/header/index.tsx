import { useState } from 'react'
import * as S from './styles'
import logo from '../../../assets/images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <S.HeaderWrapper>
      <S.TopBar>
        <div className="container">
          <p>📍 Ótica no São Jorge, Maceió - Atendimento Personalizado</p>
          <a href="tel:82988369508" className="phone">(82) 98836-9508</a>
        </div>
      </S.TopBar>

      <S.HeaderContainer>
        <div className="container content">
          <S.LogoContainer href="/">
            <img src={logo} alt="Ótica Central Vision - Óculos de Grau e Sol em Maceió" />
          </S.LogoContainer>

          <S.Nav isOpen={isMenuOpen}>
            <ul>
              <li><a href="#inicio" onClick={handleLinkClick}>Início</a></li>
              <li><a href="#produtos" onClick={handleLinkClick}>Produtos</a></li>
              <li><a href="#depoimentos" onClick={handleLinkClick}>Depoimentos</a></li>
              <li><a href="#faq" onClick={handleLinkClick}>Faq</a></li>
              <li><a href="#contato" onClick={handleLinkClick}>Contato</a></li>
            </ul>
          </S.Nav>

          <S.Actions>
            <S.WhatsappBtn href="https://wa.me/5582988369508" target="_blank">
              Agendar Horário
            </S.WhatsappBtn>
            
            <S.MobileMenu isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </S.MobileMenu>
          </S.Actions>
        </div>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header