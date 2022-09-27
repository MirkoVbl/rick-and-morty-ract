import CharacterCard from "./CharacterCard";
import {CharacterTS} from "./CharacterTS";
import './CharacterGaleryCSS.css';
import {useState} from "react";


export default function CharacterGallery(props: { characters: CharacterTS[] }) {


    const [filterText, setFilterText] = useState("")
    const filteredCharacters = props.characters.filter( (char) => char.name.toLowerCase().includes(filterText.toLowerCase()))

    return (
        <>
            <input className={"search-field"} onChange={(event) => setFilterText(event.target.value)} />

            <p>Typed in: {filterText}</p>
            <div className={"cards"}>
                {filteredCharacters.map((character) =>
                    <div className={"card"}>
                        <CharacterCard character={character} />
                    </div>)}
            </div>
        </>
    )
}