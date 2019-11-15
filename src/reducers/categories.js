const categories = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_DATA_SUCCESS':
            console.log(action);
            return action.data.folders;
      default:
        return state
    }
  }
  
  export default categories
  