import { useEffect, useState } from "react";
import { Container, Row, Button, Form } from "react-bootstrap";

const NewDiariPage = () => {
  const [token, setToken] = useState(null);
  //variabili per la visualizzazione della sezione
  const [showSection, setShowSection] = useState(false);

  //fetch per ottenere l utente e la data dell ultima pagina aggiunta
  const fetchUtente = async () => {
    try {
      let response = await fetch("http://localhost:8080/utente/me", {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const me = await response.json();
        console.log(me);
        const diario = me.diario;
        if (diario.pagine.length > 0) {
          const lastPage = diario.pagine[diario.pagine.length - 1];
          const data = lastPage.data;
          const today = new Date().toISOString().split("T")[0];
          if (data !== today) {
            setShowSection(true);
          }
        } else setShowSection(true);
      } else {
        console.log("errore nel recupero dell utente");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //variabili e funzioni per fetch aggiunta pagina
  const [newPage, setNewPage] = useState("");

  const contenutoPagina = {
    contenuto: newPage
  };

  const handleNewPageChange = (e) => {
    setNewPage(e.target.value);
  };
  //fetch per aggiunta pagina
  const postNewPagina = async () => {
    try {
      let response = await fetch("http://localhost:8080/utente/diario/pagina", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(contenutoPagina)
      });
      if (response.ok) {
        console.log(contenutoPagina);
        setNewPage("");
      } else {
        console.log("token nell else: " + token);
        console.log("erorre nell aggiunta della nuova pagina");
        const errorText = await response.text;
        throw new Error(errorText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const utente = localStorage.getItem("utente");
    if (utente) {
      const utenteJson = JSON.parse(utente);
      setToken(utenteJson.token);
    }
  }, []);
  useEffect(() => {
    if (token) {
      fetchUtente();
      console.log(token);
    }
  }, [token]);

  return (
    <>
      {showSection && (
        <Container className="p-3 border-1 border-black postbg">
          <Row>
            <h2>Aggiungi una nuova pagina al tuo diario</h2>
          </Row>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              postNewPagina();
            }}
          >
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Nuova pagina:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il contenuto della pagina"
                required
                value={newPage}
                onChange={handleNewPageChange}
              />
            </Form.Group>

            <Button type="submit" className="postButton w-100 border-0">
              Aggiungi Pagina
            </Button>
          </Form>
        </Container>
      )}
    </>
  );
};

export default NewDiariPage;
