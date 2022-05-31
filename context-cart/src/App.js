import ProductList from "./components/product-list";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
       <CartProvider>
        <h1>Produtos</h1>
        <ProductList type="catalogue" />
        <h1>Carrinho</h1>
        <ProductList type="cart" />
      </CartProvider>
     </CatalogueProvider>
    </div>
  );
}

export default App;