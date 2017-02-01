import request from 'superagent';

export function fetchRSS(blog) {
  const req = request
  .get('http://localhost:3000/api/posts?link=' + blog.link)
  .accept('application/json');
  return (dispatch) => {
    req.then((response) => {
      response.body.map( post => {
        dispatch({ type: 'ADD_CARD', post: post, blog: blog });
      });
    });
  };
}
