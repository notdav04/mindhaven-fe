import { useEffect } from "react";
import LandingSection from "./LandingSection";

const LoginPage = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <LandingSection />
    </>
  );
};

export default LoginPage;
