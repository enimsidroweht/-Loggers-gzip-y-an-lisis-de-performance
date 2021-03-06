const axios = require("axios")
const URL = "http://localhost:8080/api/productos"


async function axiosGet(){
    await axios.get(URL)
        .then(( res )=> {
        console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })    
}

async function axiosPost(){
    await axios.post(URL, {
        nombre: "Ford KA",
        precio: 10000,
        foto: "Ford KA Image"
    })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

async function axiosPut(){
    await axios.put("http://localhost:8080/api/productos/2",{
        nombre: "Peugeout 208",
        precio: 30000,   
        foto: "Peugeout foto"
    })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

function axiosDelete(){
    axios.delete("http://localhost:8080/api/productos/1")
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

//probando axios del lado del servidor
// axiosGet()
// axiosPost()
// axiosPut()
// axiosDelete()

module.exports = {axiosGet, axiosPost, axiosPut, axiosDelete}