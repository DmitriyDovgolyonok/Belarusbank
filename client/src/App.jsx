import React from "react"
import AddProduct from "./components/AddProduct"
import NavBar from "./components/NavBar"
import AllProducts from "./components/AllProducts"
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom"
import EditProduct from "./components/EditProduct"
import Login from "./pages/Login";
import Registration from "./pages/Registration"
import UserOnly from "./pages/UserOnly"
import AdminOnly from "./pages/AdminOnly";
import EditCategory from "./components/EditСategory"


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/all' element={<AllProducts/>}/>
                <Route path='/add' element={<AddProduct/>}/>
                <Route path='/edit/:id' element={<EditProduct/>}/>
                <Route path='/edit_category/:id' element={<EditCategory/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/user_only" element={<UserOnly/>}/>
                <Route path="/admin_only" element={<AdminOnly/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
