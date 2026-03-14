import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Onboarding from './pages/Onboarding'
import Account from './pages/Account'
import Auth from './pages/Auth'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/account/:pathname" element={<Account />} />
          <Route path="/auth/:pathname" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
