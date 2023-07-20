import React from 'react'

function Post(props) {
  return (
    <>
      <div className="post">
        <div className="img">
          Img
        </div>
        <div className="content">
          <h1 className='title'>{props.title}</h1>
          <p className='authInfo'>{props.auth}</p>
          <p className='info'>{props.content}</p>
        </div>
      </div>
    </>
  )
}

export default Post
