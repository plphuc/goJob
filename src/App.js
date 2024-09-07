import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import { Toaster } from 'react-hot-toast'
import CreateCv from './pages/CreateCv/CreateCv'

function App() {
    return (
        <div className="container mx-auto h-full overflow-auto text-textColor">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/createCv" element={<CreateCv />} />
                <Route path="/profile/:userId" element={<ProfilePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Toaster />
        </div>
    )
}

export default App
