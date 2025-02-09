import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Message from './components/Message';
import Spinner from './components/Spinner';
import CategoriesContext from './contexts/CategoriesContext';
import FilterContext from './contexts/FilterContext';
import LoadingContext from './contexts/LoadingContext';
import MessageContext from './contexts/MessageContext';
import useLoading from './hooks/useLoading';
import ProductsPage from './pages/products/ProductsPage';
import CategoriesService from './services/CategoriesService';
import ProductsDetails from './pages/products/ProductsDetails';
import Page404 from './pages/Page404';

function App() {
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState({});
  const [addRequest, removeRequest, isLoading] = useLoading();

  // eslint-disable-next-line
  useEffect(() => loadCategories(), []);

  function loadCategories() {
    addRequest();
    CategoriesService.get()
      .then(c => setCategories(c))
      .catch(() => setMessage("Ocorreu um erro ao carregar as categorias..."))
      .finally(() => removeRequest());
  }

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>

      <LoadingContext.Provider value={{ addRequest, removeRequest, isLoading }}>
        <MessageContext.Provider value={{ message, setMessage }}>
          <CategoriesContext.Provider value={{ categories }}>
            <Spinner></Spinner>
            <div className="page-container">
              <Message></Message>
              <Header></Header>
              <Router>
                <Switch>
                  <Route exact path='/'>
                    <ProductsPage></ProductsPage>
                  </Route>
                  <Route path="/detalhes/:id">
                    <ProductsDetails/>
                  </Route>
                  <Route>
                    <Page404/>
                  </Route>
                </Switch>
              </Router>
            </div>
            <Footer></Footer>
          </CategoriesContext.Provider>
        </MessageContext.Provider>
      </LoadingContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;
