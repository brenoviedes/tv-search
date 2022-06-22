import axios from 'axios'
import renderTVShowDetails from './components/TVShowDetails'
import { API_URL } from './config/ApiTVMaze'
import { getTvShow } from './models/TVShow'
import './css/style.css'
import './css/response.css'
import './css/fonts.css'
import './css/keyframes.css'
import { renderHeader } from './components/Header'

const token = localStorage.getItem('token')

if(token) {
    const app = <HTMLDivElement>document.querySelector('#app')

    const searchTVShow = async (id: string) => {
     
    const http = axios.create({
        baseURL: API_URL
    })

    const response = await http.get(`/shows/${id}`)

    if(response.status === 200) {
        
        const {data} = response 
        const show = getTvShow(data)

        renderTVShowDetails(show, app)

        const header = <HTMLDivElement>document.createElement('div')
        header.id = 'header'
        app.insertAdjacentElement('afterbegin',header)
        renderHeader(header)
        
    }
}

const params = new URLSearchParams(document.location.search)
const id = params.get('id')
    if(id) {
        searchTVShow(id)
    }

} else {
    location.href = 'login.html'
}