import { Row, Container } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import DiariSlider from "../diaripage/DiariSlider";
import PostCard from "../homepage/PostCard";
import { useEffect, useState } from "react";

const ProfileSection = () => {
  const [ruolo, setRuolo] = useState();
  const [token, setToken] = useState();

  const [username, setUsername] = useState();
  const [nome, setNome] = useState();
  const [cognome, setCognome] = useState();
  const [email, setEmail] = useState();

  //variabili per utente o po=rofessionista
  const [diario, setDiario] = useState(null);
  const [posts, setPosts] = useState(null);

  //fetch per ricaricare profilo professionista cosi da averlo sempre aggiornato
  const fetchProfiloProfessionista = async () => {
    try {
      let response = await fetch("http://localhost:8080/professionista/me", {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        console.log("profilo recuperato correttamente!");
        const me = await response.json();
        setUsername(me.username);
        setPosts(me.listapost);
        setNome(me.nome);
        setCognome(me.cognome);
        setEmail(me.email);
      } else {
        console.log("errore nel recuper utente!");
        const errorText = await response.statusText;
        throw new Error(errorText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //fetch per ricaricare utente nella sezione profilo, cosi da averlo sempre aggiornato
  const fetchProfiloUtente = async () => {
    try {
      let response = await fetch("http://localhost:8080/utente/me", {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const me = await response.json();
        setUsername(me.username);
        setDiario(me.diario);
      } else {
        console.log("errore nel recupero dell utente");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const ruoloStorage = localStorage.getItem("ruolo");
    setRuolo(ruoloStorage);
    const tokenStorage = localStorage.getItem("token");
    setToken(tokenStorage);
    if (ruolo == "PROFESSIONISTA") {
      fetchProfiloProfessionista();
    } else if (ruolo == "USER") {
      fetchProfiloUtente();
    }
  }, []);

  useEffect(() => {
    if (ruolo == "PROFESSIONISTA") {
      fetchProfiloProfessionista();
    } else if (ruolo == "USER") {
      fetchProfiloUtente();
    }
  }, [ruolo]);

  return (
    <>
      {username && (
        <Container fluid className="ps-md-5 pe-md-5 lightbg">
          <p className="darktext pt-3 fs-3 fw-bold darkText">Profilo</p>
          <Row className="pb-3">
            <ProfileCard
              ruolo={ruolo}
              username={username}
              nome={nome}
              cognome={cognome}
              email={email}
            />
          </Row>
          {ruolo == "USER" && (
            <>
              <p className="fw-bold fs-3 mt-5 darkText">Diario utente</p>
              <Row className="pb-5">
                <DiariSlider pagine={diario.pagine} username={username} />
              </Row>
            </>
          )}
          {ruolo == "PROFESSIONISTA" && (
            <>
              <p className="fw-bold fs-3 mt-5 darkText">Post professionista</p>
              <Row>
                {[...posts].reverse().map((post, index) => (
                  <PostCard
                    key={index}
                    titolo={post.titolo}
                    descrizione={post.descrizione}
                    data={post.data}
                    username={post.usernameProfessionista}
                    commenti={post.commenti}
                    id={post.id}
                    avatar={"non disponibile"}
                  />
                ))}
              </Row>
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default ProfileSection;
