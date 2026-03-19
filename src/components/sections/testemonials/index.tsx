import * as S from './styles'
import { Star, MessageSquare, CheckCircle2 } from 'lucide-react'
import logoGoogle from '../../../assets/images/google-color.png'

import ticiana from '../../../assets/images/ticiana.png'
import WictorChristopher from '../../../assets/images/Wictor.png'
import carlosRoberto from '../../../assets/images/carlos.png'



const Testimonials = () => {
  const reviews = [
    {
      name: "Ticiana Moura",
      avatar: ticiana,
      date: "20/05/2025",
      text: "qualidade excepcional !",
      stars: 5
    },
    {
      name: "Wictor Christopher",
      avatar: WictorChristopher,
      date: "14/04/2025",
      text: "Comprei um óculos excelente e fui muito bem atendido!",
      stars: 5
    },
    {
      name: "Carlos Roberto",
      avatar: carlosRoberto,
      date: "08/04/2025",
      text: "Uma loja acolhedora, com um trabalho impecável! Gostei demais do meu óculos e do atendimento prestado. RECOMENDO!!!!",
      stars: 5
    }
  ]

  return (
    <S.TestimonialsSection id="depoimentos">
      <div className="container">
        <S.SectionHeader>
          <span className="badge">
            <MessageSquare size={14} /> Depoimentos
          </span>
          <h2>O que nossos <span>clientes dizem</span></h2>
          <p>Confira a experiência de quem já cuida da visão com a gente</p>
        </S.SectionHeader>

        <S.ReviewsGrid>
          {reviews.map((rev, index) => (
            <S.ReviewCard key={index}>
              <S.CardHeader>
                <div className="user-meta">
                  <img src={rev.avatar} alt={`Foto de ${rev.name}`} className="user-avatar" />
                  <div className="user-info">
                    <div className="name-wrapper">
                      <strong>{rev.name}</strong>
                      <CheckCircle2 size={14} fill="#2078f4" color="#fff" />
                    </div>
                    <span>{rev.date}</span>
                  </div>
                </div>
                <img src={logoGoogle} alt="Google Review" className="google-logo" />
              </S.CardHeader>

              <S.StarsRow>
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} size={14} fill="#FFC107" color="#FFC107" />
                ))}
              </S.StarsRow>

              <p>"{rev.text}"</p>
            </S.ReviewCard>
          ))}
        </S.ReviewsGrid>

        <S.CtaArea>
          <a href="https://www.google.com/search?q=otica+central+vision" target="_blank" rel="noreferrer">
            Ver todas as avaliações no Google
          </a>
        </S.CtaArea>
      </div>
    </S.TestimonialsSection>
  )
}

export default Testimonials