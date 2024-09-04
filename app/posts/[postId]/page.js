import React from 'react';


/*
  This page will render dynamic pages
/posts/blog-post-3
/posts/blog-post-4

*/
function page() {
  return (
    //We will have acces to our dynamic "postId" variable
    <div>{postId}</div>
  )
}

export default page