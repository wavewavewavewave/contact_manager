import './App.css';
import Contact from "./components/Contact/Contact";
import {Route, Routes} from "react-router";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";
import ViewComponent from "./components/ViewContact/ViewComponent";

function App() {
    return (
        <div className="App">
            <div style={{margin: 50}}>
                <Routes>
                    <Route path={'/'} element={<Contact/>}/>
                    <Route path="/addContact" element={<AddContact/>}/>
                    <Route  path="/editContact/:id" element={<EditContact />}/>
                    <Route  path="/viewContact/:id" element={<ViewComponent />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
