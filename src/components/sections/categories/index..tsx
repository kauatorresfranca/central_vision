import * as S from './styles'

const Categories = () => {
  const categories = [
    {
      title: 'Óculos de Grau',
      description: 'Armações de alta tecnologia e precisão visual.',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop',
      link: '#grau'
    },
    {
      title: 'Óculos de Sol',
      description: 'Proteção UV com o máximo de estilo e conforto.',
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop',
      link: '#sol'
    },
    {
      title: 'Lentes de Contato',
      description: 'Liberdade e tecnologia para o seu dia a dia.',
      image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1935&auto=format&fit=crop',
      link: '#lentes'
    }
  ]

  return (
    <S.CategoriesSection id="armacoes">
      <div className="container">
        <S.TitleArea>
          <h2>Soluções em <span>Saúde Visual</span></h2>
          <p>Explore nossas coleções exclusivas e encontre o modelo perfeito para você.</p>
        </S.TitleArea>

        <S.Grid>
          {categories.map((cat, index) => (
            <S.CategoryCard key={index} href={cat.link}>
              <img src={cat.image} alt={cat.title} />
              <S.Overlay className="overlay">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <span className="btn-fake">Ver Modelos</span>
              </S.Overlay>
            </S.CategoryCard>
          ))}
        </S.Grid>
      </div>
    </S.CategoriesSection>
  )
}

export default Categories