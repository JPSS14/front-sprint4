const ProdutosService = {
    listar() {
        // const url = '/data/produtos.json';
        const url = "https://5c056c28-5883-405c-9f30-3cd52ce03567.mock.pstmn.io/produtos";
        return fetch(url)
            .then(p => p.json());
    },
};

export default ProdutosService;