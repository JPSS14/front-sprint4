import { useContext, useEffect, useState } from "react";
import { Main, MainProducts, ProductsRow, ProductsList, ProductsCard, Card, CardImg, CardDescription, CardPrice } from "../../UI/MainStyled";
import { Link } from "react-router-dom";
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsService from "../../services/ProductsService";
import Breadcrumbs from "./components/Breadcrumbs";
import Filters from "./components/Filters";

export function Product({ image, name, price, id }) {
    return (
        
        <ProductsCard>
            
            <Card>
            <Link to={`/detalhes/${id}`}>
                <CardImg src={image} alt="" />
                <CardDescription>
                    {name}
                </CardDescription>
                <CardPrice>
                    R$ {price}
                </CardPrice>
                </Link>
            </Card>
            
        </ProductsCard>
    );
}

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState([]);

    const { filter } = useContext(FilterContext);
    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    // eslint-disable-next-line
    useEffect(() => loadProducts(), []);

    function loadProducts() {
        addRequest();
        ProductsService.get()
            .then(r => {
                setProducts(r.products);
                setFilters(r.filters);
            })
            .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
            .finally(() => removeRequest());
    }

    return (
        <Main>
            <Breadcrumbs></Breadcrumbs>
            <Filters filters={filters}></Filters>
            <MainProducts>
                <ProductsRow>
                    <ProductsList>
                        {products
                            .filter(p =>
                                filter ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1 : true)
                            .map(
                                p =>
                                    <Product key={p.sku} image={p.image} name={p.name} price={p.price} id={p.sku}/>
                            )
                        }
                    </ProductsList>
                </ProductsRow>
                <div className="products__row">
                    <ol className="products__list">
                    </ol>
                </div>
            </MainProducts>
        </Main>
    );
}

export default ProductsPage;