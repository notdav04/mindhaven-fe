import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import CustomNavbar from "./components/CustomNavbar";
import DiariPage from "./components/diaripage/DiariPage";
import ProfessionistiPage from "./components/professionistipage/ProfessionistiPage";
import ProfilePage from "./components/profilepage/ProfilePage";
import Footer from "./components/Footer";
import LoginPage from "./components/loginpage/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Profilo" element={<ProfilePage />} />
          <Route path="/Diari" element={<DiariPage />} />
          <Route path="/Professionisti" element={<ProfessionistiPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
