import React, {useState} from 'react';
import {Card, CardContent, TextField, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";



const ViewComponent = () => {

    return (
        <Card style={{margin: 'auto', width: 500, marginTop: 50}} variant="outlined">
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    CONTACT INFO
                </Typography>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="name" disabled={true} label="Name"/>
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="email" disabled={true} label="email"/>
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="dateCreated" disabled={true} label="DateCreated"/>
                </div>
                <div>
                    <TextField style={{width: 400, marginTop: 10}} id="dateModified" disabled={true} label="DateModified"/>
                </div>
                <Link to={"/"}>
                    <ArrowBackIcon style={{marginTop:20}} size="large"/>
                </Link>
            </CardContent>
        </Card>
    )
}
export default ViewComponent;