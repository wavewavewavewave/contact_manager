import {
    Fab,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import {styled} from '@mui/system';
import shortid from "shortid";
import Avatar from "react-avatar";
import {Link} from "react-router-dom";

const StyledFab = styled(Fab)(({theme}) => ({
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
}));


export default function Contact() {
    const allContact = [
        {
            id: shortid.generate(),
            name: "asad",
            email: "asadalkhair1994@gmail.com",
            dateCreated: "10/02/2020",
            dateModified: "10/02/2020",
        },
        {
            id: shortid.generate(),
            name: "mohsin",
            email: "mohsin@gmail.com",
            dateCreated: "10/02/2020",
            dateModified: "10/02/2020",
        },
        {
            id: shortid.generate(),
            name: " aiqa",
            email: "aiqa@gmail.com",
            dateCreated: "10/02/2020",
            dateModified: "10/02/2020",
        },
        {
            id: shortid.generate(),
            name: " Nadeem arif",
            email: "arif@gmail.com",
            dateCreated: "10/02/2020",
            dateModified: "10/02/2020",
        },
    ]
    return (
        <>
            <div>
                <Typography variant="h4" color="textSecondary">
                    CONTACT MANAGEMENT
                </Typography>
            </div>
            <TableContainer component={Paper} style={{marginTop: '50px'}}>
                <Table aria-label="simple table" style={{minWidth: '700px'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Date Created</TableCell>
                            <TableCell>Date Modified</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allContact.map((contact) => (
                            <TableRow key={contact.id}>
                                <TableCell component="th" scope="row">
                                    <Avatar style={{marginRight: 10}} name={contact.name} size={40} round={true}/>
                                    {contact.name}
                                </TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell>{contact.dateCreated}</TableCell>
                                <TableCell>{contact.dateModified}</TableCell>
                                <TableCell align="center">
                                    <span style={{marginRight: "3px"}}>
                                         <Link to={`/editContact/${contact.id}`}>
                                            <EditIcon/>
                                         </Link>
                                    </span>
                                    <span style={{marginRight: "3px"}}>
                                            <Link to={`/viewContact/${contact.id}`}>
                                            <VisibilityIcon />
                                        </Link>
                                    </span>
                                    <span style={{marginRight: "3px"}}>
                                        <DeleteIcon color="secondary"/>
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to="/addContact">
                <StyledFab color="primary" aria-label="add">
                    <AddIcon/>
                </StyledFab>
            </Link>
        </>
    );
}



