import './css/style.css'
import './css/response.css'
import './css/fonts.css'
import './css/keyframes.css'
import { renderHeader } from './components/Header'
import renderFavorites from './components/Favorites'

const token = localStorage.getItem('token')

if(token) {
    const $ = document.querySelector.bind(document)

    const app = <HTMLDivElement>$('#app')
    renderHeader(app)

    const resultArea = document.createElement('div')
    resultArea.id = 'result-area'
    app.insertAdjacentElement('beforeend', resultArea)

    renderFavorites()

} else {
    location.href = 'login.html'
}