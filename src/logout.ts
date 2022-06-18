import { getAuth } from 'firebase/auth'
import { firebaseApp } from './config/firebase'

const loadingGif = <HTMLImageElement>document.createElement('img')
loadingGif.src = '/assets/img/load.gif'

const app = <HTMLDivElement>document.getElementById('app')
app.appendChild(loadingGif)
app.style.width = '100vw'
app.style.height = '100vh'
app.style.display = 'flex'
app.style.alignItems = 'center'
app.style.justifyContent = 'center'

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