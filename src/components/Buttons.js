import React from "react";

function Buttons({
  upvotes,
  downvotes,
  upvoteFunc,
  downvoteFunc,
  commentVisibilityFunc,
  commentsVisibility
}) {
  const upVoteButton = (
    <>
      <btn className="btn btn-outline-secondary" onClick={upvoteFunc}>
        {upvotes} 👍
      </btn>
    </>
  );

  const downVoteButton = (
    <>
      <btn className="btn btn-outline-secondary" onClick={downvoteFunc}>
        {downvotes} 👎
      </btn>
    </>
  );

  const hideCommentsButton = (
    <>
      <btn className="btn btn-outline-secondary" onClick={commentVisibilityFunc}>
        {commentsVisibility ? "Show Comments" : "Hide Comments"}
      </btn>
    </>
  );

  return (
    <div>
      <div>
        {upVoteButton}
        {downVoteButton}
      </div>
      <div>
        <p value='blank-space'></p>
      {hideCommentsButton}
      <hr></hr>
      </div>
    </div>
  );
}

export default Buttons;
