import shortid from "shortid";
import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT} from "./types";

const initialState ={
    allContacts:[
        {
            id:shortid.generate(),
            name:"asad",
            email:"asadalkhair1994@gmail.com",
            dateCreated:"10/02/2020",
            dateModified:"10/02/2020",
        },
        {
            id:shortid.generate(),
            name:"mohsin",
            email:"mohsin@gmail.com",
            dateCreated:"10/02/2020",
            dateModified:"10/02/2020",
        },
        {
            id:shortid.generate(),
            name:" aiqa",
            email:"aiqa@gmail.com",
            dateCreated:"10/02/2020",
            dateModified:"10/02/2020",
        },
        {
            id:shortid.generate(),
            name:" Nadeem arif",
            email:"arif@gmail.com",
            dateCreated:"10/02/2020",
            dateModified:"10/02/2020",
        },

    ],
    contact:null,
}

const contactReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_CONTACT:
            return {
                ...state,
                allContacts: [action.payload, ...state.allContacts]
            }
        default :
            return state
    }
}
export default contactReducer;