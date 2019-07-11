import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../logo.png'
import jwt_decode from 'jwt-decode'

class Navbar extends Component {
    constructor() { 
        super() 
            this.state = { 
                username: '' 
            } 
    }
    
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    componentDidMount () {
        if(localStorage.usertoken) {
            this.setState({
                username: jwt_decode(localStorage.usertoken).username
            })
        }
        console.log(this.state.username)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Iniciar Sesión
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Crear Cuenta
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Perfil
                    </Link>
                </li>         
                <li className="nav-item">
                    <Link to="/newpost" className="nav-link">
                        Crear Publicación
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Cerrar Sesión
                    </a>
                </li>
            </ul>
        )

        const adminLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profileadmin" className="nav-link">
                        Perfil de Administrador
                    </Link>
                </li>         
                <li className="nav-item">
                    <Link to="/newpost" className="nav-link">
                        Crear Publicación
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Cerrar Sesión
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse"
                    id="navbar1">
                    <Link to="/" className="nav-link">
                        <img src={logo} alt="site logo" className="navbarLogo"/>
                    </Link>
                    
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Inicio
                            </Link>
                            {/*<Link to="/ProfileAdmin" className="nav-link">
                                Admin
                            </Link>*/}
                        </li>
                    </ul>
                    {(localStorage.usertoken) 
                        ? ((jwt_decode(localStorage.usertoken).username === "admin") ? (adminLink) : (userLink)) 
                        : (loginRegLink)}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)