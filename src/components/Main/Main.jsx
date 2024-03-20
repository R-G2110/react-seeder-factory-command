import  { useState, useEffect } from 'react';
import Home from '../pages/Home';
import './Main.scss';

function Main() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  async function fetchFeatProducts() {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/feat-products');
      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }
      const data = await response.json();
      console.log(data); 
      setFeaturedProducts(data); 
    } catch (error) {
      console.error('Si è verificato un errore:', error);
    }
  }
  
  useEffect(() => {
    fetchFeatProducts();
  }, []); 

  return (
    <main>
      {/* Passa i prodotti in primo piano al componente Home */}
      {/* <Home featuredProducts={featuredProducts} /> */}
    </main>
  );
}

export default Main;
