import { getAuth } from 'firebase/auth'
import { firebaseApp } from './config/firebase'
import { renderLoadingDiv } from './utils/loadingUtil'

import './css/style.css'
import './css/fonts.css'

const app = <HTMLDivElement>document.getElementById('app')

const loadingGif = renderLoadingDiv('Desconectando')

app.appendChild(loadingGif)
app.style.backgroundColor = '#f5f5f5'
app.style.width = '100vw'
app.style.height = '100vh'
app.style.display = 'flex'
app.style.alignItems = 'center'
app.style.justifyContent = 'center'
app.style.fontFamily = 'title'

const auth = getAuth(firebaseApp)
auth.signOut()
    .then(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        localStorage.removeItem('userPhotoUrl')
        location.href = 'login.html'
    })
    .catch((error) => {
        console.log(error)
    })