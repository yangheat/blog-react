import { useState } from "react";
import LikeButton from "./LikeButton";

function Post(props) {
  let [title, setTitle] = useState(props.title);
  return (
    <div className="post">
      <h4>
        {title}
        <LikeButton />
      </h4>
      <p>register date</p>
    </div>
  );
}

export default Post;
