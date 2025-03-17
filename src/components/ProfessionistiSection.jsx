import { useEffect } from "react";

const ProfessionistiSection = () => {
  const [professionisti, setProfessionisti] = [];

  let render = false;
  const fetchProfessionisti = async () => {
    try {
      let response = await fetch("http://localhost:8080/public/professionisti");
      if (response.ok) {
        let professionistiArray = await response.json();
        if (professionistiArray) {
          console.log(professionistiArray);
          setProfessionisti(professionistiArray);
        } else {
          console.log("errore: professionisti non trovati");
        }
      } else {
        throw new Error("errore nel recupero dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfessionisti();
  }, [render]);

  return <></>;
};

export default ProfessionistiSection;
