import React, {useState, useEffect} from 'react';
import {Button, Card, CardContent, TextField, Typography} from "@mui/material";


const EditContact = () => {
    let today = new Date().toLocaleDateString()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dateCreated, setDateCreated] = useState(today);
    const [dateModified, setDateModified] = useState(today);


    return (
        <Card style={{margin: 'auto', width: 500, marginTop: 50}} variant="outlined">
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    EDIT CONTACT
                </Typography>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="name" label="Name" />
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="email" label="email" />
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="dateCreated" label="DateCreated" />
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="dateModified" label="DateModified"/>
                </div>
                <Button style={{margin: "auto", marginTop: 20}} size="medium" variant="contained" color="secondary">
                    Update
                </Button>
            </CardContent>
        </Card>
    )
}
export default EditContact;