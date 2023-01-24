import { AddBug } from "./actions";
import store from "./store";

// UI subscribe like this
const unsubscribe = store.subscribe(()=>{
    console.log("store Changed", store.getState());
});

// unsubscribe eg when navigate to another page/Component
// new Event
store.dispatch({
    type: 'ADD_BUG',
    payload:{
        description:'new bug'
    }
})
// we are not getting the second dispatch action notification
unsubscribe();
store.dispatch(AddBug('Second Bug'))
console.log(store.getState());

// convention practice
// actions in one file as func => separate state
// actionTypes as constants in separate file