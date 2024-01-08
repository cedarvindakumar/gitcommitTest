const initialState = 10;
const increamentDec = (state= initialState, action:any)=> {
    switch(action.type){
        case 'INCREAMENT' : return  state +1;
        case 'DECREAMENT' : return state-1;
        default: return state;
    }
}
export default increamentDec;