import axios from "axios"
import renderTVShowCard from "../components/TVShowCard"
import { API_URL } from "../config/ApiTVMaze"
import { getTvShow } from "../models/TVShow"

const $ = document.querySelector.bind(document)
const http = axios.create({
    baseURL: API_URL,
})

const searchTVShows = async () => {

    const params = new URLSearchParams(document.location.search)
    const filter = params.get('filter')


    if (filter) {
        const response = await http.get('/search/shows', {
            params: { q: filter }
        })

        if (response.status == 200) {
            const { data } = response
            const resultArea = <HTMLDivElement>$('#result-area')
            resultArea.innerHTML = ''
            data.forEach((jsonObj: any) => {
                const { show } = jsonObj
                const tvShow = getTvShow(show)
                renderTVShowCard(tvShow, resultArea)
            })

        }
    }

    let favorites = JSON.parse(<string>localStorage.getItem('favShow')) || []

    const fav = document.querySelectorAll('.favshow')
    fav.forEach((item) => {
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

export default searchTVShows