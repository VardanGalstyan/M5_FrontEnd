import React from "react";
import { useState, useEffect } from 'react'
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import  Home from "./views/home";
import  Blog from "./views/blog";
import  NewBlogPost from "./views/new";
import { BrowserRouter, Route } from "react-router-dom";

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])


  const fetchdata = async () => {
    try {
      const response = await fetch('http://localhost:3001/posts')
      const data     = await response.json()
      setPosts(data)

    } catch (error) {
      console.log(error);
    }
  }

  return (

    <BrowserRouter>
      <NavBar />
      <Route path="/" exact render={() => <Home posts={posts} />} />
      <Route path="/blog/:id" exact render={() => <Blog posts={posts} />} />
      <Route path="/new" exact component={NewBlogPost} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
