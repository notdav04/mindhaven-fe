import { Row, Container, Button } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import DiariSlider from "../diaripage/DiariSlider";
import PostCard from "../homepage/PostCard";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSection = () => {
  const [ruolo, setRuolo] = useState();
  const [token, setToken] = useState();
  const [update, setUpdate] = useState();

  const handleUpdate = () => {
    setUpdate(!update);
  };
  const [username, setUsername] = useState();
  const [nome, setNome] = useState();
  const [cognome, setCognome] = useState();
  const [email, setEmail] = useState();
  const [avatar, setAvatar] = useState();
  const navigate = useNavigate();

  //variabili per utente o professionista
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
        setAvatar(me.avatar);
      } else {
        console.log("errore nel recupero del professionista!");
        const errorText = await response.statusText;
        navigate("/");
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
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //fetch per eliminazione post professionisti
  const deletePost = async (idpost) => {
    try {
      let response = await fetch(
        `http://localhost:8080/professionista/post/${idpost}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      if (response.ok) {
        console.log(`post con id ${idpost} eliminato correttamente`);
        fetchProfiloProfessionista();
      } else {
        console.log("errore nell eliminazione del post");
        const errorText = await response.statusText;

        throw new Error(errorText);
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
  }, [update]);

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
          <p className="darktext pt-3 fs-3 fw-bold darkText customFont2">
            Profilo
          </p>
          <Row className="pb-3">
            <ProfileCard
              ruolo={ruolo}
              username={username}
              nome={nome}
              cognome={cognome}
              email={email}
              avatar={avatar}
              handleUpdate={handleUpdate}
            />
          </Row>
          <Row className="d-flex justify-content-center">
            <Button
              className="cursor-pointer postButton lightText border-0 fw-bold w-25 "
              onClick={() => {
                navigate("/");
              }}
            >
              Log out!
            </Button>
          </Row>
          {ruolo == "USER" && (
            <>
              <p className="fw-bold fs-3 mt-5 darkText customFont2">
                Diario utente
              </p>
              <Row className="pb-5">
                <DiariSlider pagine={diario.pagine} username={username} />
              </Row>
            </>
          )}
          {ruolo == "PROFESSIONISTA" && (
            <>
              <p className="fw-bold fs-3 mt-5 darkText customFont2">
                Post professionista
              </p>
              <Row>
                {[...posts].reverse().map((post, index) => (
                  <React.Fragment key={index}>
                    <div className="w-50 d-flex justify-content-start mb-1 ms-2">
                      <Button
                        className="closeModalButton darkText fw-bold p-1"
                        onClick={() => {
                          deletePost(post.id);
                        }}
                      >
                        Elimina Post
                      </Button>
                    </div>
                    <PostCard
                      titolo={post.titolo}
                      descrizione={post.descrizione}
                      data={post.data}
                      username={post.usernameProfessionista}
                      commenti={post.commenti}
                      id={post.id}
                      avatar={"non disponibile"}
                    />
                  </React.Fragment>
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
