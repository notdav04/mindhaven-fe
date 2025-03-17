import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CustomNavbar from "./components/CustomNavbar";
import DiariPage from "./components/DiariPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          {/* <Route path="/profilo" element={<ProfilePage />} /> */}
          <Route path="/Diari" element={<DiariPage />} />
          <Route path="/Professionisti" element={<ProfessionistiPage />} />
          {/* <Route path="/professionisti" element={<HomePage />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
