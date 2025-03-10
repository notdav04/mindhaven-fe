import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  let render = false;

  const fetchpost = async () => {
    try {
      let response = await fetch("http://localhost:8080/public/post");
      if (response.ok) {
        let postArray = await response.json();
        if (postArray) {
          console.log(postArray);
          setPosts(postArray);
        } else {
          console.log("Errore: post non trovati");
        }
      } else {
        throw new Error("errore nel recupero dei post");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchpost();
  }, [render]);

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f8f1e4",
        paddingInline: "100px",
        paddingBlock: "50px"
      }}
    >
      <Row>
        <p className="customText fs-3 fw-bold">Post di tendenza</p>
      </Row>
      <Row>
        <Col md={3}>
          {(render = true)}
          {posts.map((post) => (
            <div key={post.id}>
              <p>{post.descrizione}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
