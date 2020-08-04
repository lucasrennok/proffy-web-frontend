import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/42686436?s=460&v=4" alt="Lucas Rennó"/>
                <div>
                    <strong>Lucas Rennó</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Entusiasta em Física aplicada.
                <br/><br/>
                Grande inventor do pão de queijo com presunto e queijo conhecido pelas suas técnicas de ir bem em provas quase impossíveis.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 10,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;