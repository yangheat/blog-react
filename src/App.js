import { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import Post from "./Post";

function App() {
  let [logo, setLogo] = useState("BLOG REACT");
  let [title, setTitle] = useState([
    "POST TITLE1",
    "POST TITLE2",
    "POST TITLE3",
  ]);

  // function postSort() {
  //   console.log(title.sort());
  // }

  // function titleChange() {
  //   let temp_title = [...title];
  //   temp_title[0] = "TITLE CHANGE COMPLATE";
  //   setTitle(temp_title);
  // }

  return (
    <div className="App">
      <div className="navigator">
        <h4>{logo}</h4>
      </div>
      <div className="post-list">
        {/*
        <button onClick={postSort}>sort</button>
        <button onClick={titleChange}>TITLE CAHNGE</button>
        */}

        <Post title={title[0]} />
        <Post title={title[1]} />
        <Post title={title[2]} />
        <Modal />
      </div>
    </div>
  );
}

export default App;
