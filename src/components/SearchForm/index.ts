// import axios from 'axios'
// import { API_URL } from '../../config/ApiTVMaze'
// import { getTvShow } from '../../models/TVShow'
// import renderTVShowCard from '../TVShowCard'
// import './style.css'

// const $ = document.querySelector.bind(document)
// const http = axios.create({
//     baseURL: API_URL,
// })

// export const searchTVShows = async () => {
    
//     const params = new URLSearchParams(document.location.search)
//     const filter = params.get('filter')
    

//     if (filter) {
//         const response = await http.get('/search/shows', {
//             params: { q: filter }
//         })
//         console.log(response)

//         if (response.status == 200) {
//             const { data } = response
//             const resultArea = <HTMLDivElement>$('#result-area')
//             resultArea.innerHTML = ''

//             data.forEach((jsonObj: any) => {
//                 const { show } = jsonObj
//                 const tvShow = getTvShow(show)
//                 renderTVShowCard(tvShow, resultArea)
//             })
//         }
//     }
// }