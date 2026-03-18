import * as S from './styles'
import heroImage from '../../../assets/images/hero2.jpeg'

const Hero = () => {
  return (
    <S.HeroContainer id="inicio">
      <div className="container content">
        <S.TextBlock>
          <span className="badge">Tecnologia e Estilo em Maceió</span>
          <h1>
            Excelência Visual e Armações Exclusivas na <strong>Central Vision</strong>
          </h1>
          <p>
            Sua visão merece o cuidado de especialistas. Combinamos precisão técnica de ponta com as melhores marcas para garantir sua saúde visual e estilo no São Jorge.
          </p>
          
          <S.ButtonGroup>
            <S.PrimaryBtn href="https://wa.me/seunumero" target="_blank">
              Agendar Atendimento
            </S.PrimaryBtn>
            <S.SecondaryBtn href="#armacoes">
              Ver Coleção
            </S.SecondaryBtn>
          </S.ButtonGroup>
          
          <S.TrustList>
            <li><span>Laboratório Próprio de Precisão</span></li>
            <li><span>Curadoria de Marcas Internacionais</span></li>
            <li><span>Atendimento Especializado</span></li>
          </S.TrustList>
        </S.TextBlock>

        <S.ImageBlock>
          <div className="image-frame">
            <img 
              src={heroImage}
              alt="Ótica Central Vision Maceió - Especialista em Saúde Visual" 
            />
          </div>
        </S.ImageBlock>
      </div>
    </S.HeroContainer>
  )
}

export default Hero