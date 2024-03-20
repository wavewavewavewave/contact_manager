import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT} from "./types";


export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact,
    }
}
export const getContact = (id) => {
    return{
        type: GET_CONTACT,
        payload: id,
    }

}
export const updateContact = (contact) => {
    return{
        type:UPDATE_CONTACT,
        payload:contact,
    }

}
export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id,
    }
}