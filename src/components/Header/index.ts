import searchTVShows from '../../utils/SearchShow'
import './style.css'

searchTVShows()

export const renderHeader = (container: HTMLElement) => {

    const photouser = localStorage.getItem('userPhotoUrl')
    const nameUser = localStorage.getItem('userName')

    let favOrHome
    if (location.pathname == '/favorites.html') {
        favOrHome = `
            <div id="home">
                <a href="index.html">
                    <span>Home</span>
                </a>
            </div>
        `
    } else if (location.pathname == '/show.html') {
        favOrHome = `
            <div id="home">
            <a href="index.html">
                <span>Home</span>
            </a>
            </div>
            <div id="favorites">
                <a href="favorites.html">
                    <span>Favoritos</span>
                </a>
            </div>
        `
    } else {
        favOrHome = `
            <div id="favorites">
                <a href="favorites.html">
                    <span>Favoritos</span>
                </a>
            </div>
        `
    }

    const htmlContent = `
    <div id="search-container">

        <div id="search-area">
            
            <div id="nav-left">
                <div id="logo">
                    <a href="/">
                        <strong>TV</strong><strong>Search</strong><small>Api</small>
                    </a>
                </div>

                <div id="user-photo">
                    <img src="${photouser || '/assets/img/noUserPhoto.png'}" alt="foto de ${nameUser}">
                </div>

            

                <span id="user-name">${nameUser}</span>
            </div>
                
                <div id="nav-right">
                <form id="search-form" action="index.html">
                    <input type="text" name="filter" id="filter" placeholder="Digite o títuilo da série">
                    <button id="search">Pesquisar</button>
                </form>

                <div id="navegation">
                    ${favOrHome}

                    <div id="logout">
                        <a href="logout.html">
                            <span>Sair</span>
                        </a>
                    </div> 
                </div> 
            </div>       
        </div>
    </div>
    `

    container.innerHTML = htmlContent
}