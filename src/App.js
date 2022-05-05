import { useState } from "react";
import "./App.css";

function App() {
  let [logo, setLogo] = useState("BLOG REACT");
  let [title, setTitle] = useState([
    "POST TITLE1",
    "POST TITLE2",
    "POST TITLE3",
  ]);
  let [like, setLike] = useState(0);

  function likeClick() {
    setLike(like + 1);
  }

  function titleChange() {
    setTitle(["POST TITLE CHANGE", title[1], title[2]]);
  }

  return (
    <div className="App">
      <div className="navigator">
        <h4>{logo}</h4>
      </div>
      <div className="post-list">
        <div className="post">
          <h4>
            {title[0]}&nbsp;
            <span onClick={likeClick}>👍&nbsp;</span>
            {like}
          </h4>
          <button onClick={titleChange}>TITLE CAHNGE</button>
          <p>register date</p>
        </div>
        <div className="post">
          <h4>{title[1]}</h4>
          <p>register date</p>
        </div>
        <div className="post">
          <h4>{title[2]}</h4>
          <p>register date</p>
        </div>
      </div>
    </div>
  );
}

export default App;
