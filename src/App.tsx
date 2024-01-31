import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import Navbar from './components/navbar/NavBar';
import ListaCategorias from './components/categoria/listaCategoria/ListaCategoria';


function App() {
  return (
    <>
       <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categorias" element={<ListaCategorias/>} />
        <Route path="/cadastrarcategorias" element={<FormularioCategoria />} />
        <Route path="/editarcategoria/:id" element={<FormularioCategoria />} />
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>

      <Footer />
      </BrowserRouter>
    </>

  );
}
export default App;