import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PostCard from "./PostCard";
import Hero from "./Hero";

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
    <>
      <Hero />
      <Container
        fluid
        style={{
          backgroundColor: "#F5F5F0"
        }}
        className="p-xs-2 p-md-5"
      >
        <Row>
          <p className="customText fs-3 fw-bold">Post di tendenza</p>
        </Row>
        <Row className="d-flex justify-content-center">
          {(render = true)}
          {posts.map((post) => (
            <PostCard
              key={post.id}
              descrizione={post.descrizione}
              data={post.data}
              username={post.usernameProfessionista}
              avatar={"non disponibile"}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
