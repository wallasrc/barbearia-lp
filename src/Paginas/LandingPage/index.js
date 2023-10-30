import React, { useState } from "react";
import logo from '../../assets/barbearia-logo.png'
import moonIcon from '../../assets/moon.png';
import sunIcon from '../../assets/sun.png';

import './styles.css'

export default function LandingPage() {


    const [temaDark, setTema] = useState(false);

    function mudarTema() {
        setTema(!temaDark);

    }

    return (

        <body>
            <header className={temaDark ? 'bg-dark' : 'bg-ligth'}>
                <div className='header limitador-largura'>
                    <img className={temaDark ? 'img-logo muda-contraste' : 'img-logo'} src={logo} />
                    <button className={temaDark ? 'bg-dark inverte-icon' : 'bg-ligth not-inverte-icon'} onClick={mudarTema}>
                        <img className='img-icon' src={temaDark ? sunIcon : moonIcon} />
                       <p> {temaDark ? 'Ligth' : 'Dark'}</p>
                    </button>
                </div>

            </header>

            <section>
                <div className='banner'>
                </div>
                <div className={temaDark ? 'bg-dark' : 'bg-ligth'}>
                    <div className="descricao limitador-largura">
                        <h1>Bem-vindo a Barber Shop</h1>
                        <p><strong>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</strong></p>
                        <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                        <p className="especial">Débora Castro</p>
                    </div>
                </div>

            </section>


        </body>
    );

}