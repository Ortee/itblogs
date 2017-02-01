function cards(state = [], action) {
  switch (action.type) {
  case 'ADD_CARD':
    return [...state, {
      title: action.post.title,
      link: action.post.link,
      author: action.post.author,
      date: action.post.date,
      description: action.post.description,
      tags: action.blog.tags,
    }];
  default:
    return state;
  }
}

export default cards;
