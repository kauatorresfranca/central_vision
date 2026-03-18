import * as S from './styles'
import { ArrowRight, Tag } from 'lucide-react'
import oculos_grau from '../../../assets/images/oculos_grau1.jpeg'
import oculos_sol from '../../../assets/images/oculos_sol.jpeg'

const Products = () => {
  const phone = "5582988369508"

  const productsList = [
    {
      title: 'Óculos de Grau',
      description: 'Armações modernas e lentes digitais de alta precisão.',
      image: oculos_grau,
      features: [
        'Lentes Digitais',
        'Antirreflexo Premium',
        'Proteção contra Luz Azul',
        'Garantia de Adaptação'
      ],
      message: 'Olá! Vi o site da Central Vision e quero saber mais sobre Óculos de Grau.'
    },
    {
      title: 'Óculos de Sol',
      description: 'Estilo e proteção completa para os dias ensolarados de Maceió.',
      image: oculos_sol,
      features: [
        'Proteção UV400',
        'Lentes Polarizadas',
        'Design Sofisticado',
        'Marcas Selecionadas'
      ],
      message: 'Olá! Vi o site e gostaria de conhecer os Óculos de Sol.'
    },
    {
      title: 'Relógios de Pulso',
      description: 'Acessórios exclusivos para completar seu visual com elegância.',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop',
      features: [
        'Mecanismo de Precisão',
        'Aço Inoxidável',
        'Coleções Exclusivas',
        'Caixa de Presente'
      ],
      message: 'Olá! Vi o site e tenho interesse nos Relógios.'
    }
  ]

  return (
    <S.ProductsSection id="produtos">
      <div className="container">
        <S.SectionHeader>
          <span className="badge">
            <Tag size={14} /> Nossos Produtos
          </span>
          <h2>Saúde Visual e <span>Estilo Completo</span></h2>
          <p>Tudo o que você precisa no bairro São Jorge para cuidar da sua visão.</p>
        </S.SectionHeader>

        <S.CardsGrid>
          {productsList.map((product, index) => (
            <S.ProductCard key={index}>
              <div className="image-wrapper">
                <img src={product.image} alt={`Ótica Central Vision - ${product.title}`} />
              </div>
              <S.CardBody>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <S.FeaturesList>
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex}>• {feature}</li>
                  ))}
                </S.FeaturesList>
                <S.WhatsappCta 
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(product.message)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver Coleção <ArrowRight size={16} />
                </S.WhatsappCta>
              </S.CardBody>
            </S.ProductCard>
          ))}
        </S.CardsGrid>
      </div>
    </S.ProductsSection>
  )
}

export default Products