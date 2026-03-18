import * as S from './styles'
import logo from '../../../assets/images/logo.png'
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const mapIframe = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.4567!2d-35.7196!3d-9.6123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014902787e830f%3A0xc3b5e406f0e340e3!2sRua%20Santa%20Am%C3%A1lia%2C%2097%20-%20S%C3%A3o%20Jorge%2C%20Macei%C3%B3%20-%20AL%2C%2057044-086!5e0!3m2!1spt-BR!2sbr!4v1710000000000"

  return (
    <S.FooterContainer>
      <div className="container">
        <S.MainFooter>
          <S.BrandColumn>
            <img src={logo} alt="Ótica Central Vision - Maceió" />
            <p>
              Sua ótica de confiança no bairro São Jorge. Excelência em saúde visual, 
              tecnologia de ponta e as melhores marcas de Maceió.
            </p>
            <S.SocialLinks>
              <a href="https://www.instagram.com/oticacentralvision_/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/5582988369508" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </S.SocialLinks>
          </S.BrandColumn>

          <S.LinkColumn>
            <h3>Navegação</h3>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#beneficios">Diferenciais</a></li>
              <li><a href="#categorias">Produtos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </S.LinkColumn>

          <S.LinkColumn>
            <h3>Contato</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} /> 
                <span>Rua Santa Amália, 97<br />São Jorge, Maceió - AL</span>
              </li>
              <li><Phone size={16} /> (82) 98836-9508</li>
              <li><Mail size={16} /> Centralvisiion@gmail.com</li>
            </ul>
          </S.LinkColumn>

          <S.MapColumn>
            <h3>Onde Estamos</h3>
            <S.MapPlaceholder>
              <iframe 
                src={mapIframe}
                width="100%" 
                height="150" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen 
                loading="lazy"
                title="Localização Ótica Central Vision"
              ></iframe>
            </S.MapPlaceholder>
          </S.MapColumn>
        </S.MainFooter>

        <S.Copyright>
          <div className="content">
            <p>© {currentYear} Ótica Central Vision - CNPJ: 57.619.628/0001-97</p>
            <p>Desenvolvido por <strong><a href="https://portfolio-kaua-torres.vercel.app/" target="_blank" rel="noreferrer">Kauã Torres</a></strong></p>
          </div>
        </S.Copyright>
      </div>
    </S.FooterContainer>
  )
}

export default Footer