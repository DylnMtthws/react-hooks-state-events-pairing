import React, { useState } from "react";
import Buttons from "./Buttons";
import video from "../data/video";
import Comments from "./Comments";

function TitleContainer({ videoData }) {
  const renderedTitleContainer = (
    <>
      <h1>{videoData.title}</h1>
      <h5>
        {videoData.views} Views | Uploaded {videoData.createdAt}
      </h5>
    </>
  );

  const [upvotes, setUpVotes] = useState(videoData.upvotes);
  const [downvotes, setDownVotes] = useState(videoData.downvotes);
  const upvoteFunc = () => setUpVotes((prev) => prev + 1);
  const downvoteFunc = () => setDownVotes((prev) => prev + 1);

const [commentsVisibility, setCommentsVisibility] = useState(false)
  function commentVisibilityFunc() {
    setCommentsVisibility((prev) => prev = !prev)
  }



  return (
    <div>
      {renderedTitleContainer}
      <Buttons
        upvoteFunc={upvoteFunc}
        downvoteFunc={downvoteFunc}
        upvotes={upvotes}
        downvotes={downvotes}
        commentVisibilityFunc={commentVisibilityFunc}
        commentsVisibility={commentsVisibility}
      />
      <p value="blank-space"></p>
      {commentsVisibility ? null : <Comments videoData={videoData}/>}
    </div>
  );
}

export default TitleContainer;
