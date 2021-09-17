export function auntificatedReducer(state=false, action){
  switch (action.type) {
    case 'AUTHENTICATED_SUCCESSFULLY':
      return true
      // { 
      //     isAuthenticated: true
      // };
      case 'LOGOUT':
        return false
        // return { 
        //   isAuthenticated: false
        // };
    default:
      return state



  }
}
