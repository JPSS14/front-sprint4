import styled from 'styled-components';

export const Main = styled.main`
    margin: 0 auto;
    width: 80%;
    max-width: 1100px;
    padding: 16px;
`;

export const DetailProduct = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ImgContainer = styled.div`
    flex-basis: 48%;
`;

export const Content = styled.div`
    flex-basis: 48%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
`;

export const DetailTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
`;

export const DetailImg = styled.img`
    flex-basis: 100%;
`;

export const ChooseSize = styled.p`
    font-size: 1.2rem;
`;

export const OptionSize = styled.button`
    padding: 12px;
    border: solid 1px #000;
    border-radius: 5px;
    margin: 3px;
    cursor: pointer;
    background: ${(props) => (props.teste ? "#000" : "#fff")};
    color: ${(props) => (props.teste ? "#fff" : "#000")};
`;

export const BuyContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.3);
    justify-content: center;
`;

export const Price = styled.p`
    font-size: 1.5rem;
    color: red;
    margin: 25px auto;
    font-weight: bold;
`;

export const LinkButton = styled.button`
    font-size: 1rem;
    margin: 5px auto;
    width: 70%;
    color: #fff;
    text-transform: uppercase;
    background: ${(props) => (props.ok ? "#00800D" : "#FF080D")};
    border: none;
    padding: 7px 0;
    border-radius: 5px;
`;

export const NotFound = styled.h1`
    margin: 100px auto;
    color: red;
    font-weight: bold;
`;

export const MainBread = styled.section`
    margin-bottom: 16px;
`;

export const BreadList = styled.ol`
    display: flex;

    @media (max-width: 1200px) {

          justify-content: center;
      }
`;

export const BreadItem = styled.ol`
    font-size: 0.8125rem;
    font-weight: 600;
    color: #585858;
    
    :not(:last-child):hover {
        text-decoration: underline;
    }
`;

export const BreadSeparator = styled.span`
    margin-left: 8px;
    margin-right: 8px;
    user-select: none;
`;

export const MainFilter = styled.section`
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;

    @media (max-width: 1200px) {

          display: none;
        
      }
`;

export const FilterList = styled.ul`
    display: flex;
`;

export const FilterItems = styled.li`
    display: flex;
    align-items: center;
    padding: 12px 14px;

    :hover {
        cursor: pointer;
        background-color: rgba(38, 30, 30, 0.04);
      }
`;

export const FilterLabel = styled.span`
    text-transform: uppercase;
    font-size: 0.6875rem;
    font-weight: 400;
    color: #261e1e;
`;

export const FilterImg = styled.img`
    height: 20px;
    margin-left: 8px;
`;

export const MainProducts = styled.section`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ProductsRow = styled.div`
    margin: 8px;
`;

export const ProductsList = styled.ol`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ProductsCard = styled.li`
    flex-basis: 23%;

    @media (max-width: 1200px) {
        flex-basis: 30%;
    }

    @media (max-width: 720px) {
        flex-basis: 47%;
    }
`;

export const Card = styled.div`
    cursor: pointer;
    border: 1px solid white;
    padding: 8px;

    :hover {
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    }
`;

export const CardImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const CardDescription = styled.p`
    font-size: 0.6875rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 10px;
`;

export const CardPrice = styled.p`
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
`;