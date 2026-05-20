import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import PokemonPage from "./pages/PokemonPage";
import RegionsPage from "./pages/RegionsPage";
import TypesPage from "./pages/Types";
import FavoritesPage from "./pages/FavoritesPage";
import AboutPage from "./pages/AboutPage";


const App = () => {
  return(
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/pokemons' element={<PokemonPage/>}/>
          <Route path='/regions' element={<RegionsPage/>}/>
          <Route path='/types' element={<TypesPage/>}/>
          <Route path='/favorites' element={<FavoritesPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Route>
      </Routes>
    </>
  );
}


export default App;