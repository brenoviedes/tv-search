import renderLoginButton from './components/Login'

const token = localStorage.getItem('token')

if (token) {
  
  location.href = 'index.html'
} else {
  const app = <HTMLDivElement>document.getElementById('app')
  renderLoginButton(app)
}