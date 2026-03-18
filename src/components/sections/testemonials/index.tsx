import * as S from './styles'
import { Star } from 'lucide-react'
import googleIcon from '../../../assets/images/google-color.png' // Certifique-se de ter esse ícone

const Testimonials = () => {
  const reviews = [
    {
      name: "Ana Souza",
      text: "Atendimento impecável no São Jorge! Os exames são feitos com muita precisão e a armação que escolhi é linda e resistente.",
      stars: 5,
      date: "há 2 semanas"
    },
    {
      name: "Carlos Alberto",
      text: "Melhor ótica de Maceió. Fiz meus óculos multifocais e a adaptação foi imediata. Recomendo muito a Central Vision.",
      stars: 5,
      date: "há 1 mês"
    },
    {
      name: "Mariana Lins",
      text: "Preço justo e qualidade excepcional. O laboratório próprio deles faz toda a diferença na entrega rápida.",
      stars: 5,
      date: "há 3 meses"
    }
  ]

  return (
    <S.TestimonialsSection>
      <div className="container">
        <S.SectionHeader>
          <img src={googleIcon} alt="Google Reviews" className="google-logo" />
          <h2>O que nossos clientes dizem no <span>Google</span></h2>
          <div className="rating-summary">
            <strong>4.9</strong>
            <div className="stars">
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
            </div>
            <span>(150+ avaliações)</span>
          </div>
        </S.SectionHeader>

        <S.ReviewsGrid>
          {reviews.map((rev, index) => (
            <S.ReviewCard key={index}>
              <div className="card-header">
                <div className="user-info">
                  <strong>{rev.name}</strong>
                  <span>{rev.date}</span>
                </div>
                <img src={googleIcon} alt="G" className="mini-google" />
              </div>
              <div className="stars">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} size={14} fill="#FFC107" color="#FFC107" />
                ))}
              </div>
              <p>"{rev.text}"</p>
            </S.ReviewCard>
          ))}
        </S.ReviewsGrid>

        <S.CtaArea>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Ver todas as avaliações no Google
          </a>
        </S.CtaArea>
      </div>
    </S.TestimonialsSection>
  )
}

export default Testimonials