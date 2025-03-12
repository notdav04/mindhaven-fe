import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import PostCard from "./PostCard";

const PostSection = () => {
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
    <Container className="ms-md-5 ps-md-5 lightbg">
      <p className="darkText fs-3 fw-bold">Post </p>
      <Row className="d-flex justify-content-start">
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
  );
};

export default PostSection;
