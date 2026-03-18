import * as S from './styles'
import { Truck, ShieldCheck, Sparkles, Star, Award, Users } from 'lucide-react'
import benefitsImg from '../../../assets/images/hero.jpeg' 

const Benefits = () => {
  return (
    <S.BenefitsSection id="beneficios">
      <div className="container content">
        <S.ImageSide>
          <img src={benefitsImg} alt="Atendimento Central Vision" />
          
          <S.StatsFlex>
            <S.StatBlock>
              <Award size={20} />
              <strong>+2</strong>
              <span>Anos</span>
            </S.StatBlock>

            <S.StatBlock>
              <Users size={20} />
              <strong>+1k</strong>
              <span>Clientes</span>
            </S.StatBlock>

            <S.StatBlock>
              <Star size={20} />
              <strong>4.9</strong>
              <span>Google</span>
            </S.StatBlock>
          </S.StatsFlex>
        </S.ImageSide>

        <S.TextSide>
          <span className="subtitle">Nossos Diferenciais</span>
          <h2>Por que a <span>Central Vision</span> é a escolha certa?</h2>
          <p>
            Unimos tecnologia de ponta e um atendimento humano para garantir que você enxergue o mundo com clareza e estilo.
          </p>

          <S.BenefitsList>
            <div className="benefit-item">
              <div className="icon">
                <Sparkles size={24} />
              </div>
              <div>
                <h3>Lentes de Alta Performance</h3>
                <p>Trabalhamos com as melhores marcas e tratamentos antirreflexo e proteção digital do mercado.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="icon">
                <Truck size={24} />
              </div>
              <div>
                <h3>Atendimento em Domicílio</h3>
                <p>Levamos nossa vitrine e consultoria técnica até você, com toda a comodidade e segurança.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3>Garantia e Ajuste</h3>
                <p>Garantia de adaptação em todas as lentes e ajustes gratuitos sempre que você precisar.</p>
              </div>
            </div>
          </S.BenefitsList>
        </S.TextSide>
      </div>
    </S.BenefitsSection>
  )
}

export default Benefits