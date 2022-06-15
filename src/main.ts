import renderSearchForm from './components/SearchForm'
import './css/style.css'
import './css/response.css'
import './css/fonts.css'
import './css/keyframes.css'


const $ = document.querySelector.bind(document)

/**
 *  Casting: conversão explícita de tipos
 */

const app = <HTMLDivElement>$('#app')
renderSearchForm(app)

const resultArea = document.createElement('div')
resultArea.id = 'result-area'
app.insertAdjacentElement('beforeend', resultArea)
