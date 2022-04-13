import TVShow from '../models/TVShow'

// const $ = document.querySelector.bind(document)

const $ = document.querySelector.bind(document)
const imageNotFound = '/img/no-img-portrait-text.png'

const renderTVShowDetails = (show: TVShow, container: HTMLElement) => {
    const htmlContent = `
        <div id="show-container">
            <div id="loading">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>

            <div id="image-container">
                <img src="${show.imageUrl || imageNotFound}" alt="${show.name}"> 
            </div>

            <div id="details-container">
                <p><span class="detail-title">Título:</span> ${show.name}</p>
                <p><span class="detail-title">Tipo:</span> ${show.type}</p>
                <p><span class="detail-title">Canal:</span> ${show.channel}</p>
                <p><span class="detail-title">Idioma:</span> ${show.language}</p>
                <p><span class="detail-title">Gênero:</span> ${show.genres.join(', ')}</p>
                <p><span class="detail-title">Em execução:</span> ${show.isRunning ? 'Sim' : 'Não'}</p>
                <p><span class="detail-title">Data de estreia:</span> ${show.premieredDate ? show.premieredDate.toLocaleDateString() : 'Não informado'}</p>

                <a id="backlink" href="javascript:history.back()">Voltar</a>
            </div>
        </div>
    `

    container.innerHTML = htmlContent

    const loading = <HTMLDivElement>$('#loading')
    window.addEventListener('load', () => {
        loading.style.display = "block"
    })
}

export default renderTVShowDetails