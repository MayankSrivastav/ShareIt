// reducer file for comments
// input: the action, copy of the current state

function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the new state with new comments
      return [...state, {
        user: action.author,
        text: action.comment
      }];
  }
  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId] : postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;