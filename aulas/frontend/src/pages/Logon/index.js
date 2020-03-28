import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'

function Logon() {
    return (
        <div className="logon-countainer"> 
            <section className="form">
                <img src= {logoImg}  alt="Be The Hero"/>
                
                <form>
                    <h1>Faça seu Logon</h1>
                    
                    <input placeholder="Sua ID" />
                    
                    <button className="button" type= "submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não Tenho Cadastro.
                    </Link>
                </form>
            </section>

            <img src= {heroesImg}  alt="Heroes"/>
        </div>

    );
}

export default Logon;