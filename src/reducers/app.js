const app = (state = {isLoading: false}, action) => {
    switch (action.type) {
        case 'LOAD_DATA_SUCCESS':
            return {...state, isLoading: false};
        case 'LOAD_DATA_START':
            return {...state, isLoading: true};
      default:
        return state;
    }
  }
  
  export default app
  