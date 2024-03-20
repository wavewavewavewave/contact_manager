import React, {useState} from 'react';
import {Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {addContact} from "../../redux/actions";
import shortid from "shortid";
import {useNavigate} from "react-router";


const AddContact = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let today = new Date().toLocaleDateString()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dateCreated, setDateCreated] = useState(today);
    const [dateModified, setDateModified] = useState(today);
    const createContact = (e) =>{
        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: name,
            email: email,
            dateCreated: dateCreated,
            dateModified: dateModified
        }
        dispatch(addContact(new_contact))
        navigate("/")
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleDateCreated = (e) => {
        setDateCreated(e.target.value)
    }
    const handleDateModified = (e) => {
        setDateModified(e.target.value)
    }

    return (
        <Card style={{margin: 'auto', width: 500, marginTop: 50}} variant="outlined">
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    ADD CONTACT HERE
                </Typography>
                <form>
                    <div>
                        <TextField style={{width: 400, marginTop: 10}} id="name" label="Name" onChange={(event) => handleName(event)}/>
                    </div>
                    <div>
                        <TextField style={{width: 400, marginTop: 10}} id="email" label="Email" onChange={(e) => handlEmail(e)}/>
                    </div>
                    <div>
                        <TextField style={{width: 400, marginTop: 10}} id="dateCreated" label="DateCreated" onChange={(e) => handleDateCreated(e)}/>
                    </div>
                    <div>
                        <TextField style={{width: 400, marginTop: 10}} id="dateModified" label="DateModified" onChange={(e) => handleDateModified(e)}/>
                    </div>
                    <Button style={{margin: "auto", marginTop: 20}} size="medium" variant="contained"
                            color="primary" onClick={(e) => createContact(e)}>Submit</Button>
                </form>
            </CardContent>
        </Card>
    )
}
export default AddContact;