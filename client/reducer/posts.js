// reducer file for posts
// input: the action, copy of the current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log(action.index);
      const ind = action.index;
      return [
        ...state.slice(0, ind),
        {...state[ind], likes: state[ind].likes + 1},
        ...state.slice(ind + 1)
      ];
    default:
      return state;
  }    
}

export default posts;