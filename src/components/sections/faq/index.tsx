import { useState } from 'react'
import * as S from './styles'
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react'

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

  const questions = [
    {
      question: "Quanto tempo leva para ficar pronto o meu óculos?",
      answer: "Depende da complexidade da lente, mas como possuímos laboratório próprio, conseguimos entregar muitos modelos em até 24 horas. Lentes especiais podem levar de 3 a 7 dias úteis."
    },
    {
      question: "Vocês realizam o exame de vista na loja?",
      answer: "Sim! Temos parceria com profissionais qualificados para realizar sua avaliação visual com equipamentos de última geração. Entre em contato para consultar os dias e horários disponíveis."
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos todos os cartões de crédito (parcelamos em até 10x sem juros), Pix e dinheiro. Também trabalhamos com condições especiais para aposentados e pensionistas."
    },
    {
      question: "Os óculos possuem garantia?",
      answer: "Sim, todas as nossas armações e lentes possuem garantia contra defeitos de fabricação. Além disso, oferecemos ajuste gratuito vitalício para nossos clientes."
    }
  ]

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  return (
    <S.FaqSection id="faq">
      <div className="container">
        <S.SectionHeader>
          <span className="badge">
            <HelpCircle size={14} /> Dúvidas Frequentes
          </span>
          <h2>Perguntas <span>Comuns</span></h2>
          <p>Tire suas dúvidas rápidas sobre nossos serviços e produtos</p>
        </S.SectionHeader>

        <S.FaqList>
          {questions.map((item, index) => (
            <S.FaqItem key={index} $isOpen={activeQuestion === index}>
              <button onClick={() => toggleQuestion(index)}>
                {item.question}
                <ChevronDown size={20} className="chevron" />
              </button>
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            </S.FaqItem>
          ))}
        </S.FaqList>

        <S.ContactCta>
          <p>Ainda tem alguma dúvida?</p>
          <a href="https://wa.me/5582988369508" target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Chamar no WhatsApp
          </a>
        </S.ContactCta>
      </div>
    </S.FaqSection>
  )
}

export default FAQ