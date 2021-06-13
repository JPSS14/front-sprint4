const BreadcrumsService = {
    listar() {
        // const url = '/data/breadcrumbs.json';
        const url = 'https://5c056c28-5883-405c-9f30-3cd52ce03567.mock.pstmn.io/breadcrumbs';
        return fetch(url)
            .then(b => b.json());
    },
};

export default BreadcrumsService;