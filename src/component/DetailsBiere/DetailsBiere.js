import './DetailsBiere.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function DetailsBiere(props) {

    /** Récupèrer les paramètres de l'URL */
    const params = useParams();  
    
       
    /** Récupèrer les données de la bière */
    const [biere, setBiere] = useState({ nom: "test" });
    const [commentaires, setCommentaires] = useState([]);
    const [noteInserer, setNoteIns] = useState(""); 
    const [note, setNotes] = useState(""); 
    //console.log([noteInserer, setNotes]);
    //console.log([note, setNotes]);

    useEffect(() => {
        getBiere();       
    }, []);

    function getBiere() {
        fetch("http://127.0.0.1:8000/webservice/_php/biere/"+params.id_biere)
            .then(reponse => reponse.json())
            .then(donnees => {
                setBiere(donnees.data)
            })
        
        fetch("http://127.0.0.1:8000/webservice/_php/biere/" + params.id_biere + "/commentaire")
            .then(reponse => reponse.json())
            .then(donnees => {
                setCommentaires(donnees.data)
                //console.log(donnees);
            });
                
        fetch("http://127.0.0.1:8000/webservice/_php/biere/" + params.id_biere + "/note")
            .then(reponse => reponse.json())
            .then(donnees => {
                setNotes(donnees.data)
                //console.log(donnees);
            })
    }


    /** Commentaires */
    const [monCommentaire, setMonCommentaire] = useState("");

    function changeCommentaire(evt){
        setMonCommentaire(evt.target.value);
        //console.log(monCommentaire);
    }

    function soumettreCommentaire() {
        const commentaireEnvoyer = { courriel: props.courriel, commentaire: monCommentaire };
        //console.log(commentaireEnvoyer);
        // Fetch PUT
        const reqOptions = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Basic " + btoa("biero:biero")
            },
            body: JSON.stringify(commentaireEnvoyer)
        }
        fetch("http://127.0.0.1:8000/webservice/_php/biere/" + params.id_biere + "/commentaire", reqOptions)
            .then((reponse) => {
                reponse.json()
            })
    }
    
    let blocCommentaire;
    if (props.courriel !== "") { 
        blocCommentaire =   <div>
                                Votre commentaire :
                                <li className="input-group">
                                    <textarea onChange={changeCommentaire} className="form-control-nav" type="text" placeholder="Écrire un commentaire"  name=""></textarea>
                                </li>
                                <button onClick={soumettreCommentaire} className="btn btn-warning mt-3">Envoyer</button>                    
                            </div>
    }

    /** Notes */
    function soumettreNote() {
        const noteEnvoyer = { courriel: props.courriel, note: noteInserer };
        //console.log(noteEnvoyer);
        
        /** Fetch PUT */
        const reqOptions = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Basic " + btoa("biero:biero")
            },
            body: JSON.stringify(noteEnvoyer)
        }
        fetch("http://127.0.0.1:8000/webservice/_php/biere/" + params.id_biere + "/note", reqOptions)
            .then((reponse) => { reponse.json()
                .then((data) => {
                    console.log(data)
                    getBiere()
                })
            })
    }
    
    /** Récupérer des données du panel de note */
    let blocNotes;
    if (props.courriel !== "") { 
        blocNotes = <div className="group">
            <div>
                Votre note:
                <span className="rating mt-2 ml-0">
                    <label htmlFor="rating1">1</label>
                    <input id="rating1" type="radio" name="rating" value="1" defaultChecked={noteInserer.note} onChange={(evt) => { setNoteIns(evt.target.value) }} />
                    <label htmlFor="rating2">2</label>
                    <input id="rating2" type="radio" name="rating" value="2" defaultChecked={noteInserer.note} onChange={(evt) => { setNoteIns(evt.target.value) }} />
                    <label htmlFor="rating3">3</label>
                    <input id="rating3" type="radio" name="rating" value="3" defaultChecked={noteInserer.note} onChange={(evt) => { setNoteIns(evt.target.value) }} />
                    <label htmlFor="rating4">4</label>
                    <input id="rating4" type="radio" name="rating" value="4" defaultChecked={noteInserer.note} onChange={(evt) => { setNoteIns(evt.target.value) }} />
                    <label htmlFor="rating5">5</label>
                    <input id="rating5" type="radio" name="rating" value="5" defaultChecked={noteInserer.note} onChange={(evt) => { setNoteIns(evt.target.value) }} />
                </span>
            </div>
            <button onClick={soumettreNote} className="btn btn-warning mt-3 mb-5">Envoyer</button>
        </div>
    }
  
    //if (props.courriel !== "") {
    //    blocNotes = <div className="group">
    //        <div>
    //            Votre note:
    //            <span className="rating mt-2 ml-0">
    //                <label htmlFor="rating1">1</label>
    //                <input id="rating1" type="radio" name="rating" value="1" defaultChecked={noteInserer.note} onChange={changeNote} />
    //                <label htmlFor="rating2">2</label>
    //                <input id="rating2" type="radio" name="rating" value="2" defaultChecked={noteInserer.note} onChange={changeNote} />
    //                <label htmlFor="rating3">3</label>
    //                <input id="rating3" type="radio" name="rating" value="3" defaultChecked={noteInserer.note} onChange={changeNote} />
    //                <label htmlFor="rating4">4</label>
    //                <input id="rating4" type="radio" name="rating" value="4" defaultChecked={noteInserer.note} onChange={changeNote} />
    //                <label htmlFor="rating5">5</label>
    //                <input id="rating5" type="radio" name="rating" value="5" defaultChecked={noteInserer.note} onChange={changeNote} />
    //            </span>
    //        </div>
    //        <button onClick={soumettreNote} className="btn btn-warning mt-3 mb-5">Envoyer</button>
    //    </div>
    //}
  
    /** Template - Détails de la bière */
    return (
        <div className="container px-4 card h-100">
            <div className="row">
                <div className="col-12 pt-2 mt-3">  
                    <h2 className="display-one mb-3">Détails de la bière "{biere?.nom}"</h2>
                    <img className="card-img-top" src="https://dummyimage.com/600x200/dee2e6/6c7574.jpg" alt="..." />
                    <div className="rating-group mt-3">
                        <span className="total-rating mr-1">
                            <input id="total-rating5" type="radio" name="total-rating" value="5" checked={(Math.round(note.note) == '5') ? true : false} />
                            <label htmlFor="total-rating5">5</label>
                            <input id="total-rating4" type="radio" name="total-rating" value="4" checked={(Math.round(note.note) == '4') ? true : false}/>
                            <label htmlFor="total-rating4">4</label>
                            <input id="total-rating3" type="radio" name="total-rating" value="3" checked={(Math.round(note.note) == '3') ? true : false}/>
                            <label htmlFor="total-rating3">3</label>
                            <input id="total-rating2" type="radio" name="total-rating" value="2" checked={(Math.round(note.note) == '2') ? true : false}/>
                            <label htmlFor="total-rating2">2</label>
                            <input id="total-rating1" type="radio" name="total-rating" value="1" checked={(Math.round(note.note) == '1') ? true : false}/>
                            <label htmlFor="total-rating1">1</label>
                        </span>
                        <h2>{Math.round(note.note) / 1}/5 ({note.nombre})</h2>
                    </div>
                    <i>Brasserie : {biere?.brasserie}</i>
                    <p>Description : {biere?.description}</p>
                    <p>Date d'ajout : {biere?.date_ajout}</p>
                    <p>Date de modification : {biere?.date_modif}</p>
                    <p>Note moyenne : {Math.round(note?.note)} </p>
                    <p>Nombre de notes : {note?.nombre}</p>
                </div>
                <div className="col-12 pt-2 mt-3">
                    <div className="mt-3 mb-5">
                        {blocNotes}
                        {blocCommentaire}
                    </div>
                    <h3 className="display-one mb-3">Commentaires : </h3>
                    {commentaires.map((comment, index) => {
                        return (
                                <div key={index}>
                                    <hr></hr>
                                    <p>{comment.commentaire} -- <span className="fon fon-info">{comment.courriel}</span> {comment.date_ajout}</p> 
                                </div>
                                );
                    })}
                </div>
            </div>
        </div>
    );
}

