const categories = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_ENTRY':
            return [...state, action.id];
        case 'BACK':
          return [...state.slice(0, -1)];
        default:
          return state;
    }
  }
  
  export default categories;
  