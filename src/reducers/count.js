
const counterReducer= (state=0, action)=>{
  switch(action.type){

//state increments or decrements 
    case 'increment':
      return state+1;
    case 'decrement':
      return state-1;

//return deafult if none of the action is trigggered
    default:
      return state;
  }
};

export default counterReducer;