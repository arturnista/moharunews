import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img src='/images/moharu.jpg' className="App-logo" alt="logo" />
                <p className="App-title-text">Bem vindo ao</p>
                <h1 className="App-title">MOHARU NEWS</h1>
            </header>
            <div className='news-container'>
                <h2 className="news-title">Moharu para a divisão Brasileira de Overwatch do Brasil de Pelotas</h2>
                <p className='news-text'>
                    O MOHARU NEWS ficou sabendo com exclusividade, através de uma fonte confiável conhecida como 'LIBERACU', sobre a contratação de João "Moharu" Teló para a divisão brasileira de Overwatch do time gaúcho Brasil de Pelotas.
                </p>
                <p className='news-text'>
                    Além do time de Overwatch, a organização também possui grandes equipes de futebol, bocha, bolão e rouba monte.
                </p>
                <p className='news-text'>
                    Moharu deve começar sua atuação na equipe à partir de Janeiro de 2018, após finalizar os campeonatos com sua equipe atual, Zony Gaming.
                </p>
            </div>
            <div className='news-container'>
                <h2 className="news-title">Zony Gaming (time de Moharu) substitui time no campeonato brasileiro de Overwatch</h2>
                <p className='news-text'>
                    O MOHARU NEWS ficou sabendo com exclusividade através do próprio player que o seu time deverá substituir um time qualquer no campeonato brasileiro de Overwatch.
                </p>
                <p className='news-text'>
                    Nas palavras do jogador Moharu, "O campeonato vai ser ezi d+ irmãozinho"
                </p>
                <p className='news-text'>
                    10min pra acabar o expediente
                </p>
            </div>
        </div>
        );
    }
}

export default App;
