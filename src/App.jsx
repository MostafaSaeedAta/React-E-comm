
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index"
import  Header  from "./components/Header/Header";
import  SideBar from "./components/SideBar/SideBar";
import  Footer  from "./components/Footer/Footer";
import store from "./Store/store";
import { Provider } from 'react-redux';
import Login from './pages/Auth/Login';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <SideBar />

          <Routes>
            {/* for home page route */}
            <Route path='/' element={ <Home /> } />
            {/* for single product route */}
            <Route path='/product/:id' element={ <ProductSingle  /> } />
            {/* for category route */}
            <Route path='/category/:category' element={ <CategoryProduct /> } />
            {/* for Cart */}
            <Route path='/cart' element={ <Cart /> } />
            {/* for Search */}
            <Route path='/search/:searchTerm' element={ <Search /> } />
            {/* for login */}
            <Route path='/Login' element={  <Login/> } />

          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
