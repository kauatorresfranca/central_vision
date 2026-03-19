import * as S from './styles'
import { Star, MessageSquare, CheckCircle2 } from 'lucide-react'
import logoGoogle from '../../../assets/images/google-color.png'

const Testimonials = () => {
  const reviews = [
    {
      name: "Cesar Gomes de Lima",
      avatar: "https://i.pravatar.cc/150?u=cesar",
      date: "20/05/2025",
      text: "Atendimento muito bom. As atendentes deixam a gente à vontade na escolha, explicam bem, tiram nossas dúvidas. Muito bom!!",
      stars: 5
    },
    {
      name: "Rosalba Maria Silva",
      avatar: "https://i.pravatar.cc/150?u=rosalba",
      date: "14/05/2025",
      text: "Gostei muito do atendimento da Thayná e da loja. Ano que vem voltarei para renovar.",
      stars: 5
    },
    {
      name: "Ana Batista",
      avatar: "https://i.pravatar.cc/150?u=ana",
      date: "08/05/2025",
      text: "Ambiente acolhedor com atendimento excelente por Marília e Thaynar, trazendo informações claras e precisas acerca das lentes e armações.",
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
          <a href="https://www.google.com/search?q=otica+central+vision+maceio" target="_blank" rel="noreferrer">
            Ver todas as avaliações no Google
          </a>
        </S.CtaArea>
      </div>
    </S.TestimonialsSection>
  )
}

export default Testimonials