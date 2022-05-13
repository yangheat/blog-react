import { useState } from "react";

function LikeButton() {
  let [like, setLike] = useState(0);

  function likeClick() {
    setLike(like + 1);
  }

  return <span onClick={likeClick}>&nbsp;👍&nbsp;{like}</span>;
}

export default LikeButton;
