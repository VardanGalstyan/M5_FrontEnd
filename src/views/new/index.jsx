import React from "react";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
// import ReactQuill from "react-quill"; what is ReactQuill
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";


export default function NewBlogPost() {


  const [posts, setPosts] = useState({
    category: "",
    title: "",
  })


  const fetchData = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3001/posts/', {
        method: 'POST',
        body: JSON.stringify(posts),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        alert('reservation is updated')
      }

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <Container className="new-blog-container">
      <Form
        className="mt-5"
        onSubmit={fetchData}
      >
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Title"
            value={posts.title}
            onChange={(e) => setPosts({
              ...posts,
              title: e.target.value
            })}
          />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            size="lg"
            as="select"
            value={posts.category}
            onChange={(e) => setPosts({
              ...posts,
              category: e.target.value
            })}

          >
            <option>Getting Started</option>
            <option>Student Stories</option>
            <option>The W Pledge</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Blog Content</Form.Label>
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{ marginLeft: "1em" }}
            onClick={fetchData}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );

}
