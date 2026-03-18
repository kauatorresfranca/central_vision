import { useEffect, useState } from 'react'
import * as S from './styles'
import { Phone, Mail, MapPin, Clock, Send, ExternalLink } from 'lucide-react'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date()
      const day = now.getDay() // 0 = Domingo, 6 = Sábado
      const hour = now.getHours()
      const minutes = now.getMinutes()
      const currentTime = hour + minutes / 60

      if (day === 0) {
        setIsOpen(false) // Domingo fechado
      } else if (day === 6) {
        setIsOpen(currentTime >= 9 && currentTime < 12) // Sábado 9h-12h
      } else {
        const morning = currentTime >= 9 && currentTime < 12
        const afternoon = currentTime >= 14 && currentTime < 18
        setIsOpen(morning || afternoon)
      }
    }

    checkStatus()
    const interval = setInterval(checkStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Santa+Amália+97+Sao+Jorge+Maceió+AL"

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
            <div className="icon-box">
              <Phone size={24} />
            </div>
            <h3>Telefone</h3>
            <p>(82) 98836-9508</p>
            <S.CardLink href="tel:82988369508">
              Ligar agora
            </S.CardLink>
          </S.ContactCard>

          <S.ContactCard>
            <div className="icon-box">
              <Mail size={24} />
            </div>
            <h3>E-mail</h3>
            <p>Centralvisiion@gmail.com</p>
            <S.CardLink href="mailto:Centralvisiion@gmail.com">
              Enviar e-mail
            </S.CardLink>
          </S.ContactCard>

          <S.ContactCard>
            <div className="icon-box">
              <MapPin size={24} />
            </div>
            <h3>Endereço</h3>
            <p>Rua Santa Amália, 97<br />São Jorge, Maceió - AL</p>
            <S.CardLink href={mapUrl} target="_blank" rel="noreferrer">
              Ver no Mapa <ExternalLink size={14} />
            </S.CardLink>
          </S.ContactCard>

          <S.ContactCard>
            <div className="icon-box">
              <Clock size={24} />
            </div>
            <h3>Horário</h3>
            <p>Seg-Sex: 9h-12h / 14h-18h<br />Sáb: 9h-12h</p>
            <span className={`status ${isOpen ? 'open' : 'closed'}`}>
              {isOpen ? 'Aberto agora' : 'Fechado no momento'}
            </span>
          </S.ContactCard>
        </S.ContactGrid>
      </div>
    </S.ContactSection>
  )
}

export default Contact