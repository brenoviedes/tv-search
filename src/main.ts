import './css/style.css'
import './css/response.css'
import './css/fonts.css'
import './css/keyframes.css'
import { renderHeader } from './components/Header'
import { searchTVShows } from './components/SearchForm'
// import { searchTVShows } from './components/SearchForm'


const $ = document.querySelector.bind(document)

/**
 *  Casting: conversão explícita de tipos
 */

const app = <HTMLDivElement>$('#app')
renderHeader(app)
// renderSearchForm(app)
searchTVShows()



const resultArea = document.createElement('div')
resultArea.id = 'result-area'
app.insertAdjacentElement('beforeend', resultArea)
