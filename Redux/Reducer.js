export function reducer(state, action) {
    switch (action.type) {
      case 'add':
          return state + 1;
    
      default:
        return state;
    }


    return state;
}