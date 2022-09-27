import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./CharacterGallery";
import axios from "axios";
import {HashRouter, Route, Routes} from 'react-router-dom';
import CharacterDetails from "./CharacterDetails";


export default function App() {

    const [characters, setCharacters] = useState([]);
    const[input, setInput] = useState("");

    useEffect(() => {


        console.log("Test API  call")
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setCharacters(data.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    useEffect(() => {
        console.log("success call")
    })


    return (
        <div className="App">
            <h1>Rick & Morty</h1>

            <header/>

            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<CharacterGallery characters={characters} />} />
                    <Route path={"/character/:id"} element={<CharacterDetails characters={characters} />} />
                </Routes>
            </HashRouter>

        </div>
    );
}
