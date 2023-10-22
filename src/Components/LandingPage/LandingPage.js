import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {data} from "../../data"
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../action/index'
import Loader from "../Loader/Loader";
import "./LandingPage.css"

import { Link } from 'react-router-dom';



const LandingPage = () => {
    const [init, setInit] = useState(false)
    const dispatch = useDispatch();
console.log(data.info())
    useEffect(() => {
        dispatch(getCountries());
        setTimeout(() => {
            setInit(true)
        }, 2000);
    }, [])//  eslint-disable-line react-hooks/exhaustive-deps

    // async function traerCountries(){
    //     const json = await axios.get('https://demo-paises.herokuapp.com/countries')
    //     console.log("aaaaa", json.data, "aaaaa")
    //     console.log (json)
    // }



    return init === false ? (<Loader />) :
        (
            <div className='container_lang'>
                <div className='item_1'>
                    <h1 >Country App</h1>
                    <p>
                    Find countries and activities, let's go ...
                    </p>
                    <Link to="/home" className='wrap'>
                        <button className='btlp' >Enter</button>
                    </Link>
                </div>
                <div className='item_2'>
                    <p>Contact :</p>
                    <a href="https://www.linkedin.com/in/manuel-lucas-echegaray/" target="_blank" rel="noreferrer"><FontAwesomeIcon className='fa' icon={faLinkedin} /> Linkedin </a>
                    <a className='itemInstagram' href="https://www.instagram.com/l_echegaray/" target="_blank" rel="noreferrer" ><FontAwesomeIcon className='fa' icon={faInstagram} /> Instagram</a>

                </div>
            </div>
        )
}

export default LandingPage