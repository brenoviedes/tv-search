import renderLoginButton from './components/Login'
import './css/style.css'



const token = localStorage.getItem('token')

if (token) {
  location.href = 'index.html'
} else {
  const app = <HTMLDivElement>document.getElementById('app')
  renderLoginButton(app)
}