import * as S from './styles'
import logo from '../../../assets/images/logo.png'
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="WhatsApp"><MessageCircle size={20} /></a>
            </S.SocialLinks>
          </S.BrandColumn>

          <S.LinkColumn>
            <h3>Navegação</h3>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#armacoes">Armações</a></li>
              <li><a href="#contato">Localização</a></li>
              <li><a href="#exames">Agendar Exame</a></li>
            </ul>
          </S.LinkColumn>

          <S.LinkColumn>
            <h3>Contato</h3>
            <ul className="contact-info">
              <li><MapPin size={16} /> São Jorge, Maceió - AL</li>
              <li><Phone size={16} /> (82) 98836-9508</li>
              <li><Mail size={16} />Centralvisiion@gmail.com</li>
            </ul>
          </S.LinkColumn>

          <S.MapColumn>
            <h3>Onde Estamos</h3>
            <S.MapPlaceholder>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.35711681284!2d-35.73351985!3d-9.9056459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014600000000000%3A0x0!2zU8OjbyBKb3JnZSwgTWFjZWnDsyAtIEFM!5e0!3m2!1spt-BR!2sbr!4v1710710000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="150" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </S.MapPlaceholder>
          </S.MapColumn>
        </S.MainFooter>

        <S.Copyright>
          <div className="content">
            <p>© {currentYear} Ótica Central Vision - CNPJ: 57.619.628/0001-97</p>
            <p>Desenvolvido por <strong><a href="https://portfolio-kaua-torres.vercel.app/">Kauã Torres</a></strong></p>
          </div>
        </S.Copyright>
      </div>
    </S.FooterContainer>
  )
}

export default Footer