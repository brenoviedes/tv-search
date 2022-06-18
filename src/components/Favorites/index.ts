import axios from 'axios'
import { API_URL } from '../../config/ApiTVMaze'
import { getTvShow } from '../../models/TVShow'
import renderTVShowCard from '../TVShowCard'
import './style.css'

const $ = document.querySelector.bind(document)
const http = axios.create({
    baseURL: API_URL,
})

const favorites = JSON.parse(<string>localStorage.getItem('favShow')) || []

const renderFavorites = async () => {

    const resultArea = <HTMLDivElement>$('#result-area')
    resultArea.innerHTML = ''

    for(const favorite of favorites) {

        const response = await http.get(`/shows/${favorite}`)
        
        if(response.status == 200) {
            const {data} = response
            const tvShow = getTvShow(data)
            renderTVShowCard(tvShow, resultArea)
        }
    }
    
    const fav = document.querySelectorAll('.favshow')
    fav.forEach((item: any) => {
        item.addEventListener('click', getID)
        const favContainer = item
        const id = item.getAttribute('data-item')
        favorites.forEach((item: any) => {
            if (item == id) {
                favContainer.classList.add('fav')
            }
        })
    })

    function getID(event: any) {
        const favContainer = event.target

        let id = event.target.getAttribute('data-item')

        const index = favorites.indexOf(id)

        const existsInLocalStorage = index != -1

        if (existsInLocalStorage) {
            favorites.splice(index, 1)
            favContainer.classList.remove('fav')
        } else {
            favorites.push(id)
            favContainer.classList.add('fav')
        }

        localStorage.setItem('favShow', JSON.stringify(favorites))
    }
    
}

export default renderFavorites