import * as S from './styles'
import { FaWhatsapp } from 'react-icons/fa' // Ícone oficial do WhatsApp

const WhatsAppButton = () => {
  const phone = "5582988369508"
  const message = encodeURIComponent("Olá! Vi o site da Central Vision e gostaria de agendar um horário.")

  return (
    <S.WhatsAppWrapper 
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <S.Tooltip>Agendar Exame</S.Tooltip>
      <FaWhatsapp size={35} />
    </S.WhatsAppWrapper>
  )
}

export default WhatsAppButton