
import './Entete.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiBeerStein } from 'react-icons/gi';


export default class Entete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courriel: ""
        };

        this.login = this.login.bind(this);
        this.changeCourriel = this.changeCourriel.bind(this);
    }

    login() {
        //console.log(this.state.courriel);
        // faire validation de courriel avant fctLogin
        this.props.fctLogin(this.state.courriel);
    }

    changeCourriel(evt) {
        this.setState({courriel : evt.target.value})
    }

    render() {
        const titre = this.props.titre || "Titre 1";
        const compteurApp = this.props.nombre;
        const compteur = this.state.compteurEntete;
        
        return (
            <header className="header px-lg-4">
                <h1 className="logo"><a href="/"><GiBeerStein className="App-logo"/> {titre}</a></h1>
                <ul className="main-nav">
                    
                    <li><NavLink to="/" className="">Accueil</NavLink></li>
                    <li><NavLink to="/biere" className="">Les bieres</NavLink></li>
                    <li className="input-group">
                        <input onChange={this.changeCourriel} className="form-control-nav" type="email" placeholder="Entrez votre courriel"  name=""></input>
                        <button onClick={this.login} className="btn-nav btn-warning">Login</button>
                    </li>
                </ul>  
            </header> 
        );
    }
}

