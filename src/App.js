// import styles from './Styles/App.module.css';
import './Styles/App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import PageNotFound from './Pages/PageNotFound'
import { UserContextProvider } from './Resources/UserContext.js'
import AppBanner from './Pages/AppBanner'
import SignIn from './Pages/SignIn'
import Contributors from './Pages/Contributors'

function App() {

    return (
        <>
            <UserContextProvider>
                <BrowserRouter>
                    <nav className="flex">
                        <div className="nav-brand">
                            <AppBanner />
                        </div>
                        <div className="nav-options">
                            <Link to="/">Home</Link>&nbsp;
                            <Link to="/Projects">Ongoing Projects</Link>&nbsp;
                            <Link to="/Contributors">Contributors</Link>&nbsp;
                        </div>
                        <div className="nav-options">
                            <Link to="/SignIn">Sign In</Link>
                        </div>
                    </nav>
                    <br />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Projects' element={<Projects />} />
                        <Route path='/*' element={<PageNotFound />} />
                        <Route path='/SignIn' element={<SignIn />} />
                        <Route path='/Contributors' element={<Contributors />} />
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
        </>
    );
}

export default App;
