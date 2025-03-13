import "bootstrap/dist/css/bootstrap.min.css";
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
          <Route path="/diari" element={<DiariPage />} />
          {/* <Route path="/professionisti" element={<Professionisti />} /> */}
          {/* <Route path="/professionisti" element={<HomePage />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
