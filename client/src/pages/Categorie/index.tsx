import { useNavigate, useParams } from 'react-router'
import { ProductListItem } from './ProductListItem'
import { ArrowIcon, Container, Content, Heading, WrapperCategoriesCards } from './styles'
import { useCategorie } from './useCategorie';

export function Categorie() {
  const navigate = useNavigate();
  const { name } = useParams();
  const pageCategorie = name;
  const { categorieData } = useCategorie();           

  return (
    <Container>
      <Content>
        <Heading>
          <ArrowIcon onClick={() => navigate('/categories')}/>
          <h1>{pageCategorie}</h1>
        </Heading>
        <WrapperCategoriesCards>
          {categorieData.map((product) => (
            <ProductListItem
              _id={product._id}
              key={product._id} 
              image_url={product.image_url} 
              price={product.price} 
              title={product.name}
              isFavorite={product.status}              
            />
          ))}
                    
        </WrapperCategoriesCards>        
      </Content>
    </Container>
  )
}