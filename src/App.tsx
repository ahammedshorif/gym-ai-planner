import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Onboarding from './pages/Onboarding'
import Account from './pages/Account'
import Auth from './pages/Auth'
import Navbar from './components/layout/Navbar'
import { NeonAuthUIProvider } from '@neondatabase/neon-js/auth/react';
import {authClient} from './lib/auth'

function App() {


  return (
    <div className="App">
      <NeonAuthUIProvider authClient={authClient}>
      <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/account/:pathname" element={<Account />} />
          <Route path="/auth/:pathname" element={<Auth />} />
        </Routes>
        </main>
      </div>
      </BrowserRouter>
      </NeonAuthUIProvider>
    </div>
  )
}

export default App
