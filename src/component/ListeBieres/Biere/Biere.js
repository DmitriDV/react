import './Biere.css';
import React from 'react';
import { Link } from 'react-router-dom';


export default class Biere extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render(){
            return (    
                <div className="col mb-5">
                    <div className="card h-100">
                        {/* Image de la bière */}
                        <img className="card-img-top" src="https://dummyimage.com/400x300/dee2e6/6c7574.jpg" alt="..." />
                        {/* Détails de la bière */}
                        <div className="card-body p-4">
                            <div className="text-center">
                                {/* Nom de la bière */}
                                <h5 className="fw-bolder mb-1" >{this.props.nom}</h5>
                            </div>
                            <div className="text-center">
                                {/* Nom de la bière */}
                                <i className="text-center" >Brasserie : {this.props.brasserie}</i>
                            </div>
                        </div>
                        {/* Les action */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><Link  to={"/biere/" + this.props.id_biere} className="btn btn-outline-dark mt-auto">Voir les détails</Link></div>
                        </div>
                    </div >
                </div>
            );
    }
}

