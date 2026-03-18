import * as S from './styles'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phone = "5582999999999" // Coloque o número da Rosi aqui (DDI + DDD + Número)
  const message = encodeURIComponent("Olá! Vi o site da Central Vision e gostaria de agendar uma consulta.")

  return (
    <S.WhatsAppWrapper 
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <S.Tooltip>Agendar Exame</S.Tooltip>
      <MessageCircle size={32} />
    </S.WhatsAppWrapper>
  )
}

export default WhatsAppButton