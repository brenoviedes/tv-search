import axios from 'axios'
import { API_URL } from '../../config/ApiTVMaze'
import { getTvShow } from '../../models/TVShow'
import renderTVShowCard from '../TVShowCard'
import './style.css'

const $ = document.querySelector.bind(document)
const http = axios.create({
    baseURL: API_URL,
})

export const htmlLoading: any = `
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
            <span style="--i: 4"></span>
            <span style="--i: 5"></span>
            <span style="--i: 6"></span>
            <span style="--i: 7"></span>
            <span style="--i: 8"></span>
            <span style="--i: 9"></span>
            <span style="--i: 10"></span>
            <span style="--i: 11"></span>
            <span style="--i: 12"></span>
            <span style="--i: 13"></span>
            <span style="--i: 14"></span>
            <span style="--i: 15"></span>
            <span style="--i: 16"></span>
            <span style="--i: 17"></span>
            <span style="--i: 18"></span>
            <span style="--i: 19"></span>
            <span style="--i: 20"></span>
    `

const favorites = JSON.parse(<string>localStorage.getItem('favShow')) || []


export const attCountFav = () => {
    const containerCountFav = <HTMLDivElement>document.querySelector('#numFav')
    console.log(containerCountFav)

    const attLocalStorage = JSON.parse(<string>localStorage.getItem('favShow')) || []

    containerCountFav.innerText = attLocalStorage.length
}



export const renderFavCountAndClear = (container: HTMLDivElement) => {
    const qntFav = JSON.parse(<string>localStorage.getItem('favShow')) || []   

    const htmlContent = `
        <div id="container-favCountAndClear">
            <div id="favCount">
                <img src="/assets/img/estrela.png">
                <span id="numFav">${qntFav?.length}</span>
            </div>

            <div id="favClear">
                <span>Limpar Favoritos</span>
            </div>
        </div>
    `
    container.innerHTML = htmlContent

    const clearFavs = <HTMLDivElement>document.querySelector('#favClear')

    clearFavs.onclick = ClearFavsFunction

    function ClearFavsFunction() {

        const qntFav = JSON.parse(<string>localStorage.getItem('favShow')) || [] 

        qntFav.splice(0, qntFav.length)

        localStorage.setItem('favShow', JSON.stringify(qntFav))

        const allFavs = document.querySelectorAll('.fav')

        allFavs.forEach(item => {
            item.classList.remove('fav')
        })

        attCountFav()
    
    }
}



const renderFavorites = async () => {

    const resultArea = <HTMLDivElement>$('#result-area')
    resultArea.innerHTML = ''

    const loadingGif = <HTMLDivElement>document.createElement('div')
    loadingGif.classList.add('loader')
    loadingGif.innerHTML = htmlLoading
    resultArea.appendChild(loadingGif)
    // resultArea.style.justifyContent = 'center'

    let array: any[] = []


    for(const favorite of favorites) {

        const response = await http.get(`/shows/${favorite}`)
        
        if(response.status == 200) {
            const {data} = response
            array.push(data)
        }
    }

    resultArea.removeChild(loadingGif)
    // resultArea.style.justifyContent = 'flex-start'

    array.forEach((item: any) => {
        const tvShow = getTvShow(item)
        renderTVShowCard(tvShow, resultArea)
    })
    
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

        const favoritesLocal = JSON.parse(<string>localStorage.getItem('favShow')) || []

        const favContainer = event.target

        let id = event.target.getAttribute('data-item')

        const index = favoritesLocal.indexOf(id)

        const existsInLocalStorage = index != -1

        if (existsInLocalStorage) {
            favoritesLocal.splice(index, 1)
            favContainer.classList.remove('fav')
        } else {
            favoritesLocal.push(id)
            favContainer.classList.add('fav')
        }

        localStorage.setItem('favShow', JSON.stringify(favoritesLocal))

        attCountFav()
    }
    
}

export default renderFavorites