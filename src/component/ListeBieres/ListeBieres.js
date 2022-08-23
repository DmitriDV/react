import './ListeBieres.css';
import React from 'react';
import Biere from './Biere/Biere';


export default class ListeBieres extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bieres: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/webservice/_php/biere/")
            .then(reponse => reponse.json())
            .then(donnees => {
                this.setState({
                    bieres: donnees.data
                })
            })
    }
    
    /** Liste des produits */
    render() {
        const bieres = this.state.bieres;
        return (
            <div className="container px-4">
                <div className="text-center pt-30 mb-30">
                    <h2 className="text-center mb-5">Biero propose {bieres.length} types de bière</h2>
                </div>
                <div className="row gx-4 gx-lg-5 row-cols-2 justify-content-center">
                    {bieres.map((biere, index) => {
                        return (
                            <Biere key={index} {...biere} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

