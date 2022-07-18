import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Credentials } from "./credentials/Credentials";
import { Home } from "./home/Home";
import { Notes } from "./secureNotes/SecureNotes";
import { SignIn } from "./signInUp/SignIn";
import { SignUp } from "./signInUp/SignUp";
import { Wifi } from "./wifi/Wifi";

import "../styles/reset.css"
import { Cards } from "./cards/Cards";
import { Insert } from "./insert/Insert";
import { InsertCard } from "./cards/InsertCard";
import { InsertWifi } from "./wifi/InsertWifi";
import { InsertNote } from "./secureNotes/InsertNote";
import { InsertCredential } from "./credentials/InsertCredential";
import { useState } from "react";
import DataPass from "./context/dataPass";
import { ViewCredential } from "./credentials/ViewCredential";
import { ViewCard } from "./cards/ViewCard";
import { ViewWifi } from "./wifi/ViewWifi";
import { ViewNote } from "./secureNotes/ViewNote";


export default function App() {

    const [data, setData] = useState({})

    return (
            <DataPass.Provider value={{data, setData}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SignIn/>}> </Route>
                        <Route path="/sign-up" element={<SignUp/>}> </Route>
                        <Route path="/home" element={<Home/>}> </Route>
                        <Route path="/insert" element={<Insert/>}> </Route>
                        <Route path="/credentials" element={<Credentials/>}> </Route>
                        <Route path="/credentials/view" element={<ViewCredential/>}> </Route>
                        <Route path="/insert/credentials" element={<InsertCredential/>}> </Route>
                        <Route path="/cards" element={<Cards/>}> </Route>
                        <Route path="/cards/view" element={<ViewCard/>}> </Route>
                        <Route path="/insert/cards" element={<InsertCard/>}> </Route>
                        <Route path="/wifi" element={<Wifi/>}> </Route>
                        <Route path="/wifi/view" element={<ViewWifi/>}> </Route>
                        <Route path="/insert/wifi" element={<InsertWifi/>}> </Route>
                        <Route path="/notes" element={<Notes/>}> </Route>
                        <Route path="/notes/view" element={<ViewNote/>}> </Route>
                        <Route path="/insert/notes" element={<InsertNote/>}> </Route>
                    </Routes>
                </BrowserRouter>
            </DataPass.Provider>
    )
}