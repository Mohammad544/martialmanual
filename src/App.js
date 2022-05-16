import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Content from './pages/Content';
import Blog from './pages/Blog';
import ViewPost from './pages/ViewPost';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ResetPassword';
import { AuthProvider} from './contexts/Auth';
import ProtectedBlogRoute from './routes/ProtectedBlogRoute';
import ProtectedViewPostRoute from './routes/ProtectedViewPostRoute';
import ProtectedLoginRoute from './routes/ProtectedLoginRoute';
import ProtectedResetPasswordRoute from './routes/ProtectedResetPasswordRoute';
import { useState } from 'react';

function App() {
  const [currentUser] = useState()
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/faq' element={<Faq/>} />
            <Route path='/content' element={<Content />} />
            <Route path='/blog' element={<ProtectedBlogRoute><Blog /></ProtectedBlogRoute>} />
            <Route path='/viewpost' element={<ProtectedViewPostRoute><ViewPost currentUser={currentUser} /></ProtectedViewPostRoute>} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<ProtectedLoginRoute><Login /></ProtectedLoginRoute>} />
            <Route path='/reset-password' element={<ProtectedResetPasswordRoute><ForgotPassword/></ProtectedResetPasswordRoute>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;
