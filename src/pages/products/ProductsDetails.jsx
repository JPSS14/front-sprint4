import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LoadingContext from '../../contexts/LoadingContext';
import MessageContext from '../../contexts/MessageContext';
import ProductsService from '../../services/ProductsService';
import { OptionSize, Main, DetailProduct, ImgContainer, Content, DetailTitle, ChooseSize, BuyContainer, Price, LinkButton } from '../../UI/MainStyled';
import { Link } from 'react-router-dom';

export default function ProductsDetails() {
    let history = useHistory();
    const { id } = useParams();

    const [product, setProduct] = useState([]);
    const [size, setSize] = useState([]);
    const [activeSize, setActiveSize] = useState(0);

    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    // eslint-disable-next-line
    useEffect(() => loadProducts(), [id]);

    function loadProducts() {
        addRequest();
        ProductsService.get()
            .then(p => {
                setProduct(p.products);
            })
            .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
            .finally(() => removeRequest());
    }

    useEffect(() => {
        // eslint-disable-next-line
        if (product.length > 0) {
            const active = product.filter(item => item.sku == id);
            if (active.length < 1) {
                history.push('/404');
            } else {
                if (active[0].name.indexOf("4 a 10") !== -1) {
                    setSize([4, 6, 8, 10]);
                } else if (active[0].name.indexOf("10 a 16") !== -1) {
                    setSize([10, 12, 14, 16]);
                } else if (active[0].name.indexOf("10 a 18") !== -1) {
                    setSize([10, 12, 14, 16, 18]);
                } else {
                    setSize(["P", "M", "G", "GG"]);
                }
            }
        }
    // eslint-disable-next-line
    }, [product]);

    useEffect(() => setActiveSize(size[0]), [size]);

    return (

        <Main>
            {// eslint-disable-next-line 
                product.filter((item) => item.sku == id)
                    .map(item =>
                        <DetailProduct key={item.sku}>
                            <ImgContainer>
                                <img src={`/${item.image}`} alt={item.name} />
                            </ImgContainer>
                            <Content>
                                <DetailTitle>{item.name}</DetailTitle>
                                <ChooseSize>Selecionar tamanho: {activeSize}</ChooseSize>

                                <div>
                                    {size.map((item, key) => (
                                        activeSize === item ? (
                                            <OptionSize onClick={(e) => setActiveSize(item)} teste key={key}>{item}</OptionSize>
                                        ) :
                                            (
                                                <OptionSize onClick={(e) => setActiveSize(item)} key={key}>{item}</OptionSize>
                                            )
                                    ))}
                                </div>

                                <BuyContainer>
                                    <Price>R$ {item.price}</Price>

                                    <LinkButton ok onClick={(e) => setMessage("Produdo adicionado à sacola!")}>
                                        <Link to="/">Adicionar à sacola</Link>
                                    </LinkButton>

                                    <LinkButton>
                                        <Link to="/">Cancelar</Link>
                                    </LinkButton>
                                </BuyContainer>
                            </Content>
                        </DetailProduct>
                    )
            }
        </Main>
    );
}