
import './style.css'

const $ = document.querySelector.bind(document)

export const renderHeader = (container: HTMLElement) => {

    const htmlContent = `
    <div id="search-container">
            <div id="search-area">
                <div id="logo">
                    <a href="/">
                        <strong>TV</strong><strong>Search</strong><small>Api</small>
                    </a>
                </div>
                <form id="search-form">
                <input type="text" name="filter" id="filter" placeholder="Digite o títuilo da série">
                <button id="search">Pesquisar</button>
            </form>
            </div>
        </div>
            <div id="loading">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    `

    container.innerHTML = htmlContent

    const button = <HTMLButtonElement>$('#search')

    const loading = <HTMLDivElement>$('#loading')
    button.addEventListener('click', () => {
        loading.style.display = "block"
        
    })

}


