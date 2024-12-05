import React from 'react'

export default function Card({title, content  , tag}) {
    

  return (
      <div className="posts_card">
          <span className={`tag ${tag.toLowerCase() === "react" ? "react" :  tag.toLowerCase() ==="css" ? "css" : "javascript"}`}>{tag}</span>
          <h2>{title}</h2>
          <p>{content}</p>
      </div>
  );
}
