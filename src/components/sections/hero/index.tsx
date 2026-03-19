import * as S from './styles'
import heroImage from '../../../assets/images/hero2.jpeg'
// Se preferir, pode trocar por ícones de uma lib como Lucide ou manter apenas o texto estilizado
import { Check } from 'lucide-react' 

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
            Sua visão merece o cuidado de especialistas. Combinamos atendimento humanizado com as melhores lentes para garantir sua saúde visual e estilo no São Jorge.
          </p>
          
          <S.ButtonGroup>
            <S.PrimaryBtn href="https://wa.me/seunumero" target="_blank">
              Agendar Atendimento
            </S.PrimaryBtn>
            <S.SecondaryBtn href="#produtos">
              Ver Coleção
            </S.SecondaryBtn>
          </S.ButtonGroup>
          
          <S.TrustList>
            <li>
              <div className="icon-circle"><Check size={14} /></div>
              <span>Lentes de Alta Precisão</span>
            </li>
            <li>
              <div className="icon-circle"><Check size={14} /></div>
              <span>Armações Selecionadas</span>
            </li>
            <li>
              <div className="icon-circle"><Check size={14} /></div>
              <span>Atendimento Personalizado</span>
            </li>
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