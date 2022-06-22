import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from 'firebase/auth'
import { firebaseApp } from '../../config/firebase'

import './style.css'
import '/src/css/fonts.css'

const onClickGoogle = () => {
    const auth = getAuth(firebaseApp)
    auth.languageCode = 'pt-br'
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            const { user } = result
            const { displayName } = user
            const {photoURL} = user
            localStorage.setItem('token', token || '')
            localStorage.setItem('userName', displayName || '')
            localStorage.setItem('userPhotoUrl', photoURL || '')
            if (token) {
                location.href = 'index.html'
            }
        })
        .catch(error => {
            const { errorCode, errorMessage } = error

            console.log(errorCode, errorMessage)
        })
}

const onClickGithub = () => {
    const auth = getAuth(firebaseApp)
    auth.languageCode = 'pt-br'
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider)
        .then(result => {
            const credential = GithubAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            const { user } = result
            const { displayName, photoURL } = user
            localStorage.setItem('token', token || '')
            localStorage.setItem('userName', displayName || '')
            localStorage.setItem('userPhotoUrl', photoURL || '')
            if (token) {
                location.href = 'index.html'
            }
        })
        .catch(error => {
            const { errorCode, errorMessage } = error
            console.log(errorCode, errorMessage)
        })
}

const onClickMicrosoft = () => {
    const auth = getAuth(firebaseApp)
    auth.languageCode = 'pt-br'
    const provider = new OAuthProvider('microsoft.com')
    signInWithPopup(auth, provider)
    .then(result => {
        const credential = OAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken

        const { user } = result
        const { displayName, photoURL } = user
        localStorage.setItem('token', token || '')
        localStorage.setItem('userName', displayName || '')
        localStorage.setItem('userPhotoUrl', photoURL || '')
        if (token) {
            location.href = 'index.html'
        }
    })
    .catch(error => {
        const { errorCode, errorMessage } = error
        console.log(errorCode, errorMessage)
    })
}

const renderLoginButton = (container: HTMLElement) => {
    const htmlContent = `
        <div id="container-content">
            <div id="img-login">
                
            </div>
            <div id="container-login">
                <div id="logo">
                    TV<strong>Search</             strong><small>Api</small>
                </div>
                <button id="login-button-google" class="login-button">
                    <img src="/assets/img/google_icon.png" alt="Google">
                    <span>Entrar com Google</span>
                </button>
                <br>
                <button id="login-button-github" class="login-button">
                    <img src="/assets/img/github.png" alt="Github">
                    <span>Entrar com Github</span>
                </button>
                <br>
                <button id="login-button-microsoft" class="login-button">
                    <img src="/assets/img/microsoft.png" alt="Microsoft">
                    <span>Entrar com Microsoft</span>
                </button>
            </div>
        </div>
    `
    container.innerHTML = htmlContent

    const loginButtonGoogle = <HTMLButtonElement>document.getElementById('login-button-google')
    loginButtonGoogle.onclick = onClickGoogle

    const loginButtonGithub = <HTMLButtonElement>document.getElementById('login-button-github')
    loginButtonGithub.onclick = onClickGithub

    const loginButtonMicrosoft = <HTMLButtonElement>document.getElementById('login-button-microsoft')
    loginButtonMicrosoft.onclick = onClickMicrosoft
}

export default renderLoginButton