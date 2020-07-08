import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './Pages/Home/Home'
import Livros from './Pages/Livros/Livros'
import Autores from './Pages/Autores/Autores'
import NotFound from './Pages/NotFound/NotFound'
import Login from './Pages/Login/login'
import Sales from './Pages/Sales/sales'
import Register from './Pages/Register/register'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/livros' component={Livros} />
            <Route path='/autores' component={Autores} />
            <Route path='/login' component={Login} />
            <Route path='/sales' component={Sales} />
            <Route path='/register' component={Register} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)
