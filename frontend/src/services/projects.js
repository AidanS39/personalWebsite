import axios from 'axios'

const baseURL = "http://localhost:3001/projects"

const getAllProjects = () => {
    const request = axios.get(`${baseURL}`)
    return request.then(response => response.data)
}

export default { getAllProjects }