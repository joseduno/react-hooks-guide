import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import NavBar from './NavBar'


const AppRouter = () => {
    return (
        <Router>
            <div className='container'>
                <h1>useContext y Router</h1>
                <p>
                    Ejemplo importantísimo de como se utiliza el useContext para pasar
                    información entre componentes y como implementar la navegación por 
                    el url evitando que la página se refresque, es decir el uso del 
                    Router de react (base para SPA). El contexto debe definirse como si 
                    fuese un componente padre para poder compartir la información 
                    (ver 'UseContext.Provider' en 'MainAppp')
                </p>
                <NavBar />
                <div className='container mt-3'>
                    <Switch>
                        {/* home screen debe ir de penultimo si no se usa el parametro exact */}
                        <Route exact path='/' component={HomeScreen} />
                        <Route exact path='/login' component={LoginScreen} />
                        <Route exact path='/about' component={AboutScreen} />

                        {/* Muestra el siguiente componente si no coincide con ningún path */}
                        {/* o utilizar el componete Redirect de react-router-dom */}
                        {/* Debe estar al final */}
                        {/* <Route component={HomeScreen} /> */}
                        <Redirect to='/' />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter
