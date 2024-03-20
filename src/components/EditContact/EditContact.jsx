import React, {useState, useEffect} from 'react';
import {Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {getContact, updateContact} from "../../redux/actions";


const EditContact = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const contact = useSelector((state) => state.contact)
    let today = new Date().toLocaleDateString()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dateCreated, setDateCreated] = useState(today);
    const [dateModified, setDateModified] = useState(today);

    useEffect(() => {
        if (contact != null) {
            setName(contact.name)
            setEmail(contact.email)
            setDateCreated(contact.dateCreated)
            setDateModified(contact.dateModified)
        }
        dispatch(getContact(id))
    }, [contact])

    const updatedContact = () => {
        const update_data = Object.assign(contact, {name:  name, email: email, dateCreated: dateCreated, dateModified: dateModified})
        dispatch(updateContact(update_data))
        navigate("/")
    };


    return (
        <Card style={{margin: 'auto', width: 500, marginTop: 50}} variant="outlined">
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    EDIT CONTACT
                </Typography>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="name" label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="email" label="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="dateCreated" label="DateCreated"
                               value={dateCreated}/>
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="dateModified" label="DateModified"
                               value={dateModified}/>
                </div>
                <Button style={{margin: "auto", marginTop: 20}} size="medium" variant="contained" color="secondary" onClick={(e)=>updatedContact(e)}>
                    Update
                </Button>
            </CardContent>
        </Card>
    )
}
export default EditContact;