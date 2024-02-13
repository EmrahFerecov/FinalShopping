
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import AddPage from './Pages/AddPage';
import Detail from './Pages/Detail';
import Basket from './Pages/Basket';
import Wishlist from './Pages/Wishlist';
import Layout from './Layout/Layout';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/addpage" element={<AddPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App
