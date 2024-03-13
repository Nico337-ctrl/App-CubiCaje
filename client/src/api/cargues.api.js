import axios from 'axios'

const cargueApi =  axios.create({
    baseURL : 'http://localhost:8000/cargues/api/v1/cargues/'
})



//ruta para obtener todos los datos de la tabla cargue 
export const getAllCargues = () => cargueApi.get('/')
//ruta para crear un dato en la tabla cargue
export const createCargues = (cargue) => cargueApi.post('/', cargue)

export const deleteCargue = (id) => cargueApi.delete(`/${id}`)

export const updateCargue = (cargue, id) => cargueApi.put(`/${id}`, cargue)

export const getCargue = (id) => cargueApi.get(`/${id}`)
