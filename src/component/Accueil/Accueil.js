import './Accueil.css';
import React from 'react';


export default class Accueil extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section>
                <div class="masthead">
                    <div class="container pt-30 h-200">
                        <div class="h-100 align-items-center">
                        <div class="col-12 text-left">
                            <h1 class="fw-light pt-5">Biero. Toujours frais!</h1>
                        </div>
                        </div>
                    </div>
                    </div>

                    <section class="py-5">
                        <div class="about">
                            <h2 class="fw-light">À propos</h2>
                            <p>On propose une effervescence brassicole inusitée et en constant renouvellement. Vous trouverez chez nous 4 catégories de bières distinctes : les régulières, les saisonnières d'hiver, les saisonnières d'été ainsi que la série des éphémères. S'abreuver à même Biero, c'est emprunter les sentiers d'un écosystème étonnant…</p>
                        </div>
                    </section>
            </section>
        );
    }
}

