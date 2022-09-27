import {CharacterTS} from "./CharacterTS";
import './CharacterCardCSS.css'
import {Link} from "react-router-dom";


type CharacterCardProps = {
    character: CharacterTS;
}


export default function CharacterCard( props: CharacterCardProps){
    return<div className="character-card">
        <Link to={"/character/" + props.character.id}>

        <h2> {props.character.name}</h2>
        <img src={props.character.image} alt={props.character.name}/>
        <p> Status: {props.character.status}</p>
        <p> Gender: {props.character.gender}</p>
        <p> Species: {props.character.species}</p>
        </Link>

    </div>
}