import * as S from './styles'
import {  Glasses, Users, ShieldCheck } from 'lucide-react'
import benefitsImg from '../../../assets/images/hero.jpeg' 

const Benefits = () => {
  return (
    <S.BenefitsSection id="beneficios">
      <div className="container content">
        <S.ImageSide>
          <img src={benefitsImg} alt="Atendimento Central Vision" />
          <div className="experience-badge">
            <strong>+2</strong>
            <span>Anos de Experiência</span>
          </div>
        </S.ImageSide>

        <S.TextSide>
          <span className="subtitle">Nossos Diferenciais</span>
          <h2>Por que a <span>Central Vision</span> é a escolha certa?</h2>
          <p>
            Não somos apenas uma ótica, somos especialistas em cuidar da sua saúde visual no São Jorge.
          </p>

          <S.BenefitsList>
            <div className="benefit-item">
              <div className="icon">
                <Glasses size={24} />
              </div>
              <div>
                <h3>Curadoria de Armações</h3>
                <p>Modelos selecionados que unem conforto e as últimas tendências.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="icon">
                <Users size={24} />
              </div>
              <div>
                <h3>Especialistas em Visão</h3>
                <p>Consultores treinados para indicar a melhor lente para o seu grau.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3>Garantia e Ajuste</h3>
                <p>Garantia de adaptação e ajustes gratuitos sempre que precisar.</p>
              </div>
            </div>
          </S.BenefitsList>
        </S.TextSide>
      </div>
    </S.BenefitsSection>
  )
}

export default Benefits