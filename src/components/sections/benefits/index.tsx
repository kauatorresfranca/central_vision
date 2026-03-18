import * as S from './styles'
// Você pode substituir os ícones por SVGs ou componentes de bibliotecas como Lucide/Phosphor
import { Award, Eye, Clock, ShieldCheck } from 'lucide-react' 

const Benefits = () => {
  return (
    <S.BenefitsSection>
      <div className="container">
        <S.SectionHeader>
          <h2>Por Que Escolher a <span>Central Vision</span>?</h2>
          <p>A melhor ótica em Maceió com tudo que você precisa para cuidar da sua visão</p>
        </S.SectionHeader>

        <S.CardsGrid>
          <S.Card>
            <div className="icon-box blue">
              <Award size={24} />
            </div>
            <h3>Marcas Premium</h3>
            <p>Trabalhamos com as melhores marcas nacionais e importadas do mercado.</p>
          </S.Card>

          <S.Card>
            <div className="icon-box cyan">
              <Eye size={24} />
            </div>
            <h3>Especialistas</h3>
            <p>Equipe altamente qualificada para cuidar da sua saúde visual.</p>
          </S.Card>

          <S.Card>
            <div className="icon-box green-teal">
              <Clock size={24} />
            </div>
            <h3>Atendimento Ágil</h3>
            <p>Consultas agendadas sem longas esperas, respeitando seu tempo.</p>
          </S.Card>

          <S.Card>
            <div className="icon-box green">
              <ShieldCheck size={24} />
            </div>
            <h3>Garantia Total</h3>
            <p>Todos os produtos com garantia estendida e assistência completa.</p>
          </S.Card>
        </S.CardsGrid>
      </div>
    </S.BenefitsSection>
  )
}

export default Benefits