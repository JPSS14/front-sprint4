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