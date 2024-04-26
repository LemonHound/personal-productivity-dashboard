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
                        </div>
                        <div className="nav-options">
                            <Link to="/SignIn">Sign In</Link>
                        </div>
                    </nav>
                    <nav className="flex-header">
                        <div className="user-info">
                            <h1>Kevin Zookski</h1>
                            <p>Hey Visitor!  I'm Kevin and I helped design the UI of this website using modern React practices.
                                I hope you have fun browsing around and checking out everything we worked so hard to make!
                            </p>
                        </div>
                        <div className="profile-pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc--udEPuMNsbmKGKY7GGdQUu3nQWmkka5H_XtCx3zGA&s" alt="" />
                        </div>
                    </nav>
                    <br />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Projects' element={<Projects />} />
                        <Route path='/*' element={<PageNotFound />} />
                        <Route path='/SignIn' element={<SignIn />} />
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
        </>
    );
}

export default App;
