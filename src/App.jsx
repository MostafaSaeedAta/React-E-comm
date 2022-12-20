
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index"
import  Header  from "./components/Header/Header";
import  SideBar from "./components/SideBar/SideBar";
import  Footer  from "./components/Footer/Footer";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SideBar />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
