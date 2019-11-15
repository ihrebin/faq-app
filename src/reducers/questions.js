const questions = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_DATA_SUCCESS':
            return action.data.assets;
      default:
        return state;
    }
  }
  
  export default questions