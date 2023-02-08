import React from 'react';
import "./FilterList.scss"
import axios from 'axios';
import { useState, useEffect } from 'react';

function FilterList() {


    const options = {
        method: 'GET',
        url: 'https://rawg-video-games-database.p.rapidapi.com/games',
        headers: {
            'X-RapidAPI-Key': 'ea0ebde8a3mshbc272f6dcb6a7eap1c3c48jsn1f8876f846df',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });




    return (


        <div className="container">

            <form className="form">
                <div className="form__group">
                    <label className="form__group-label" htmlFor="Genre">Genre</label>
                    <select className="form__group-genre" name="Genre">
                        <option value="">Please select a genre</option>
                        <option value="FPS">FPS</option>
                        <option value="RPG">CO-OP</option>
                        <option value="MMO">Deck Builder</option>
                        <option value="Area Control">Area Control</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Combat">Combat</option>
                    </select>
                    <label className="form__group-label" htmlFor="Players">Players</label>
                    <select className="form__group-players" name="Players">
                        <option value="">Please select number of players</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <label className="form__group-label" htmlFor="Difficulty">Difficulty</label>
                    <select className="form__group-difficulty" name="Diffulctiy">
                        <option value="">Please select the difficulty</option>
                        <option value="Light">Light</option>
                        <option value="Medium Light">Medium Light</option>
                        <option value="Medium">Medium</option>
                        <option value="Medium Heavy">Medium Heavy</option>
                        <option value="Heavy">Heavy</option>
                    </select>

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}

export default FilterList;