import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Layout/Navbar/Navbar";
import { HomeContainer } from "./components/Page/Home/Home.container";
import { DentistContainer } from "./components/Page/Denstist/Dentist.container";
import { ContactContainer } from "./components/Page/Contact/Contact.container";
import { FavoritesContainer } from "./components/Page/Favorites/Favorites.container";
import { Welcome } from "./components/Page/Welcome/Welcome";
import { Footer } from "./components/Layout/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import { GlobalContextProvider } from "./Context/GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {/* profesionales */}
            <Route path="/" element={<Welcome />} />
            {/* profesional */}
            <Route path="/home" element={<HomeContainer />} />

            {/* <Route path="/dentist/:id" element={<DentistContainer />} /> */}
            <Route path="/contacto" element={<ContactContainer />} />
            <Route path="/favs" element={<FavoritesContainer />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;