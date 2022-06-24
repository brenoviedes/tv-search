import TVShow from '../../models/TVShow'
import './style.css'

const imageNotFound = '/img/no-img-portrait-text.png'

const renderTVShowDetails = (show: TVShow, container: HTMLElement) => {
    const htmlContent = `
    
    <div id="show-container">

        <div id="top-side">

            <div id="image-container">
                <img src="${show.imageUrl || imageNotFound}" alt="${show.name}">

                <div id="rating-fav">
                    <a href="https://www.imdb.com/title/${show.imdbID}" target="_blank">
                    <div class="rating"><span><strong>IMDb</strong> <small>${show.rating}</small></div>
                    </a>
                    <div class="favshow" data-item="${show.id}"></div>
                </div> 
            </div>

            <div id="details-container">
                <p><span class="detail-title">Título:</span> ${show.name}</p>
                <p><span class="detail-title">Tipo:</span> ${show.type}</p>
                <p><span class="detail-title">Canal:</span> ${show.channel}</p>
                <p><span class="detail-title">Idioma:</span> ${show.language}</p>
                <p><span class="detail-title">Gênero:</span> ${show.genres.join(', ')}</p>
                <p><span class="detail-title">Data de estreia:</span> ${show.premieredDate ? show.premieredDate.toLocaleDateString() : 'Não informado'}</p>
                <p><span class="detail-title">Em execução:</span> ${show.isRunning ? 'Sim' : 'Não'}</p>      
                <p><span class="detail-title">Site oficial: </span>${show.officialSite}</p>
                <p ><span class="detail-title">Site IMDb: </span><a href="https://www.imdb.com/title/${show.imdbID}" target="_blank">Ir para site do IMDb</a></p>
            </div>  
        </div>
            <div id="bottom-side">
                <p><span class="detail-title">Sinopse:</span> ${show.summary}</p>
        
                <a id="backlink" href="javascript:history.back()">Voltar</a>
            </div>
    </div>
    `

    container.innerHTML = htmlContent

}

export default renderTVShowDetails