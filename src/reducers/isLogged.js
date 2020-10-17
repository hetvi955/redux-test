
const LoggedReducer= (state = false, action)=>{

//default state for islogged is false

  switch(action.type){
    case 'sign_in':
      return !state;
    default:
        return state;
  }
};

export default LoggedReducer;

