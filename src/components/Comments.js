import React from "react";

function Comments({ videoData }) {
  const comments = videoData.comments;
  const commentsHeader = <h2>{videoData.comments.length} Comments</h2>;
  const commentsBody = comments.map((comment) => (
    <>
      <h3 key={comment.id}>{comment.user}</h3>
      <p key={comment.comment}>{comment.comment}</p>
    </>
  ));

  return (
    <div>
      {commentsHeader}
      <p value="blank-space"></p>
      {commentsBody}
    </div>
  );
}

export default Comments;
