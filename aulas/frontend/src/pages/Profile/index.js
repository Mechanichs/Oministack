//Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';


function Profile(){
    return (
        <div className="profile-counteiner">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, AADV</span>

                <Link className="button" to='/incidents/new' >Cadastrar novo caso</Link>
                <button type="button" >
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
        </div>
    );
}

export default Profile;