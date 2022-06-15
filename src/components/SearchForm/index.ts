import axios from 'axios'
import { API_URL } from '../../config/ApiTVMaze'
import { getTvShow } from '../../models/TVShow'
import renderTVShowCard from '../TVShowCard'
import './style.css'


const $ = document.querySelector.bind(document)
const http = axios.create({
    baseURL: API_URL,
})



// const filter = async (event: Event) => {
export const searchTVShows = async () => {
    
    // event.preventDefault()

    // const filter = <HTMLInputElement>$('#filter')
    // const queryText = filter.value

    const params = new URLSearchParams(document.location.search)

    const filter = params.get('filter')
   
    // document.querySelector('#loading').style.display = "block"

    // if (queryText) {
    if (filter) {
        const response = await http.get('/search/shows', {
            // params: {q: queryText}
            params: { q: filter }
        })

        console.log(response)

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
}