import * as S from './styles'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  return (
    <S.ContactSection id="contato">
      <div className="container">
        <S.SectionHeader>
          <span className="badge">
            <Send size={14} /> Entre em Contato
          </span>
          <h2>Fale com a <span>Central Vision</span></h2>
          <p>Agende sua consulta ou tire suas dúvidas sobre nossa ótica em Maceió</p>
        </S.SectionHeader>

        <S.ContactGrid>
          <S.ContactCard>
            <div className="icon-box blue">
              <Phone size={24} />
            </div>
            <h3>Telefone</h3>
            <p>(82) 98836-9508</p>
            <a href="tel:82988369508" className="link">Ligar agora</a>
          </S.ContactCard>

          <S.ContactCard>
            <div className="icon-box cyan">
              <Mail size={24} />
            </div>
            <h3>E-mail</h3>
            <p>Centralvisiion@gmail.com</p>
            <a href="mailto:Centralvisiion@gmail.com" className="link">Enviar e-mail</a>
          </S.ContactCard>

          <S.ContactCard>
            <div className="icon-box green-teal">
              <MapPin size={24} />
            </div>
            <h3>Endereço</h3>
            <p>Bairro São Jorge, Maceió - AL</p>
            <a 
              href="https://google.com/maps" 
              target="_blank" 
              rel="noreferrer" 
              className="link"
            >
              Ver no Mapa
            </a>
          </S.ContactCard>

          <S.ContactCard>
            <div className="icon-box green">
              <Clock size={24} />
            </div>
            <h3>Horário</h3>
            <p>Seg-Sex: 9h-18h | Sáb: 9h-13h</p>
            <span className="status">Aberto agora</span>
          </S.ContactCard>
        </S.ContactGrid>
      </div>
    </S.ContactSection>
  )
}

export default Contact