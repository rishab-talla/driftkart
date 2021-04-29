import './styles.css';
import { Routes, Route } from 'react-router-dom';
import { Toast } from './components/Toast/Toast';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { WishList } from './pages/WishList/WishList';
import { Cart } from './pages/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import { handleFetchProducts } from './utils/serverRequest';
import { useData } from './context/DataContext';
import { useEffect } from 'react';

const App = () => {
   const { dispatch } = useData();

   useEffect(() => {
      (async () => {
         try {
            const {
               data: { products },
            } = await handleFetchProducts(
               'https://driftkart-backend.duhbhavesh.repl.co/products',
            );
            dispatch({ type: 'SET_PRODUCTS', payload: products });
         } catch (error) {
            console.log(error);
         }
      })();
   }, [dispatch]);

   useEffect(() => {
      (async () => {
         try {
            const {
               data: { wishList },
            } = await handleFetchProducts(
               'https://driftkart-backend.duhbhavesh.repl.co/wishlist',
            );
            dispatch({ type: 'SET_WISHLIST', payload: wishList });
         } catch (error) {
            console.log(error);
         }
      })();
   }, [dispatch]);

   useEffect(() => {
      (async () => {
         try {
            const {
               data: { cart },
            } = await handleFetchProducts(
               'https://driftkart-backend.duhbhavesh.repl.co/cart',
            );
            dispatch({ type: 'SET_CART', payload: cart });
         } catch (error) {
            console.log(error);
         }
      })();
   }, [dispatch]);

   return (
      <div className='App'>
         <Header />
         <Toast />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
         <Footer />
      </div>
   );
};

export default App;
