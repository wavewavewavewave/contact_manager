import React, {useEffect, useState} from 'react';
import {Card, CardContent, TextField, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getContact} from "../../redux/actions";



const ViewComponent = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contact)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dateCreated, setDateCreated] = useState('');
    const [dateModified, setDateModified] = useState('');

    useEffect(() => {
        if (contact != null) {
            setName(contact.name)
            setEmail(contact.email)
            setDateCreated(contact.dateCreated)
            setDateModified(contact.dateModified)
        }
        dispatch(getContact(id))
    }, [contact])

    return (
        <Card style={{margin: 'auto', width: 500, marginTop: 50}} variant="outlined">
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    CONTACT INFO
                </Typography>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="name" disabled={true} label="Name" value={name}/>
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="email" disabled={true} label="email" value={email}/>
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="dateCreated" disabled={true} label="DateCreated" value={dateCreated}/>
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="dateModified" disabled={true} label="DateModified" value={dateModified}/>
                </div>
                <Link to={"/"}>
                    <ArrowBackIcon style={{marginTop:20}} size="large"/>
                </Link>
            </CardContent>
        </Card>
    )
}
export default ViewComponent;