import axios from "axios"

const URL = 'http://localhost:8000'

export const addProduct = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data)
    }catch (e) {
        console.log("Error while calling add user Api", e)
    }
}

export const getProducts = async () => {
    try{
        return await axios.get(`${URL}/all`)
    }catch (e){
        console.log("Error while calling getProducts API", e)
    }
}

export const getProduct = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    }catch (e){
        console.log("Error while calling getProduct API", e)
    }
}

export const editProduct = async (product, id) => {
    try {
        return await axios.put(`${URL}/${id}`, product)
    }catch (e){
        console.log("Error while calling editUser API", e)
    }
}

export const editCategory = async (product, id) => {
    try {
        return await axios.put(`${URL}/edit_category/${id}`, product)
    }catch (e){
        console.log("Error while calling editCategory API", e)
    }

}

export const deleteProduct = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    }catch (e){
        console.log("Error while calling delete User API", e)
    }
}

export const login = async (data) => {
    //console.log(data)
    try {
        return await axios.post(`${URL}/login`, data)
    }catch (e){
        console.log("Error while calling login", e)
        alert(e.response.data.message)
    }
}

export const registration = async (data) => {
    try {
        return await axios.post(`${URL}/register`, data)
    }catch (e){
        console.log("Error while calling registration",e)

    }
}
