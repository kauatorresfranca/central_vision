import { useState } from 'react'
import * as S from './styles'
import logo from '../../../assets/images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.HeaderWrapper>
      {/* TopBar para SEO Local: Google lê o texto e associa a localização */}
      <S.TopBar>
        <div className="container">
          <p>📍 Ótica no São Jorge, Maceió - Atendimento Personalizado</p>
          <a href="tel:828836-9508" className="phone">(82) 98836-9508</a>
        </div>
      </S.TopBar>

      <S.HeaderContainer>
        <div className="container content">
          <S.LogoContainer href="/">
            {/* Alt text otimizado para SEO de imagem */}
            <img src={logo} alt="Ótica Central Vision - Óculos de Grau e Sol em Maceió" />
          </S.LogoContainer>

          <S.Nav isOpen={isMenuOpen}>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#armacoes">Sobre Nós</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#armacoes">Armações</a></li>
              <li><a href="#contato">Localização</a></li>
            </ul>
          </S.Nav>

          <S.Actions>
            <S.WhatsappBtn href="https://wa.me/82988369508" target="_blank">
              Agendar Horário
            </S.WhatsappBtn>
            
            <S.MobileMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
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