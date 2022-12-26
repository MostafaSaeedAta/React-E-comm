
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index"
import  Header  from "./components/Header/Header";
import  SideBar from "./components/SideBar/SideBar";
import  Footer  from "./components/Footer/Footer";
import store from "./Store/store";
import { Provider } from 'react-redux';


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
            {/* <Route path='/' element={ <CategoryProduct /> } />
            <Route path='/' element={ <ProductSingle /> } />
            <Route path='/' element={ <Cart /> } />
            <Route path='/' element={ <Search /> } /> */}

          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
