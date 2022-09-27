import {Link, useParams} from "react-router-dom";
import {CharacterTS} from "./CharacterTS";
import "./CharacterDetails.css"

export type CharacterDetailsProps = {
    characters: CharacterTS[]
}

export default function CharacterDetails(props: CharacterDetailsProps) {

    const params = useParams()
    const id = params.id

    if (id === undefined) {
        return (<>Character not found!</>);
    }

    const character = props.characters.find(character => character.id === parseInt(id))

    if (character === undefined) {
        return (<>Character not found!</>)
    }

    return (
        <div className={"detail"}>
            <Link to={"/"}>❮ Back</Link>
            <h1>Character</h1>
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <img className={".App-logo"} src={character.image} alt={"Character avatar"} />

        </div>
    )
}