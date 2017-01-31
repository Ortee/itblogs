import request from 'superagent';

export function fetchRSS(link) {
  const req = request
  .get('http://localhost:3000/api/posts?link=' + link)
  .accept('application/json');
  return (dispatch) => {
    req.then((response) => {
      response.body.map( post => {
        dispatch({ type: 'ADD_CARD', post: post });
      });
    });
  };
}
