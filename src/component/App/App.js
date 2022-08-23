import './App.css';
import React from 'react';
import Entete from './../Entete/Entete';
import ListeBieres from '../ListeBieres/ListeBieres';
import Accueil from './../Accueil/Accueil';
import DetailsBiere from './../DetailsBiere/DetailsBiere';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            courriel: "",
            login: false
        };

        this.login = this.login.bind(this);
    }

    login(courrieldEntete) {
        //console.log(courrieldEntete);
        this.setState({courriel: courrieldEntete})
        //console.log(`courriel = ${this.state.courriel}`);
    }

    render() {
        return (
            <Router>
                <Entete titre="Biero" fctLogin={this.login} />
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/biere" element={<ListeBieres />} />
                    <Route path="/biere/:id_biere" element={<DetailsBiere courriel={this.state.courriel} />} />
                    <Route path="*" element={<h1>Erreur 404: Page non trouvée.</h1>} />
                </Routes>
            </Router>
        );
    }
}

