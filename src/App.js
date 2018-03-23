import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img src='/images/moharu.jpg' className="App-logo" alt="logo" />
                <p className="App-title-text">Bem vindo ao</p>
                <a href='https://www.facebook.com/moharuow' className='facebook-link'>
                    <h1 className="App-title">MOHARU NEWS</h1>
                </a>
                <p className="App-title-text">O portal de informação do seu jogador favorito</p>
            </header>



            <div className='news-container'>
                <h2 className="news-title">JOGADOR FAMOSO DE VIDEOGAMES JOGA TUDO FORA POR JOGO DE CARTA</h2>
                <h3 className="news-subtitle">Crise no cenario nacional de overwatch</h3>
                <p className='news-text'>
                    Na quinta feira, dia 22 de Março, recebemos uma informação especial dos nossos correspondentes de campo, Trik e Trika, sobre uma notícia que pode abalar o cenário nacional e internacional de Overwatch.
                </p>
                <audio controls className='news-audio'>
                    <source src="/audio/trik-trika-jogador-joga-vida-fora.ogg" type="audio/ogg"/>
                </audio>
                <p className='news-text'>
                    O jogador em questão não teve seu nome divulgado, porém, nossa fonte confiavél, 'LIBERACU', indica que este pode sim ser <span className='moharu-name'>João "Moharu" Teló</span>.
                </p>
                <p className='news-text'>
                    Questionado sobre o assunto, o jogador deu a seguinte resposta:
                </p>
                <p className='news-cit'><i>
                    you gotta do what you gotta do
                </i></p>

                <p className='news-text'>
                    'LIBERACU' ainda no enviou possíveis conversas que o Jogador <span className='moharu-name'>João "Moharu" Teló</span> teve com um de seus colegas de trabalho:
                </p>
                <p className='news-cit'><i>
                    <strong>ME FALA SE CHEGOU PELAMOR DE ZEUS</strong>
                </i></p>
                <p className='news-text'>
                    Agressivo, Moharu questiona o colega se o seu tapete de jogo de carta havia chegado.
                </p>
                <p className='news-text'>
                    Após isso, o funcionário questiona Moharu sobre ele ter havia realmente jogado a vida fora por um jogo de cartas com tapete:
                </p>
                <p className='news-cit'><i>
                    é mesmo <br />
                    mas se eu nao <br />
                    se eu ficar <br />
                    na abstinencia <br />
                    vai ser pior <br />
                    pra todo mundo <br />
                </i></p>
                <p className='news-text'>
                    Mesmo que bombasticas, essas afirmações não diminuem o que <span className='moharu-name'>João "Moharu" Teló</span> conseguiu por toda a sua carreira, conquistando diversos campeonatos de Overwatch, Pokemon, World of Warcraft, Dota2, Candy Crush, Corrida de Anão, Velozes e furiosos desafio em Tokyo e olimpiadas de matemática que ngm liga pq foda-se.
                </p>
                <p className='news-text'>
                    Assim que possível, o MoharuNEWS irá atualizar os leitores com novas informações.
                </p>
                <p className='news-moharup'>
                    MOHARU UP!
                </p>
            </div>
            <div className='news-container'>
                <h2 className="news-title">Moharu encontra amigos youtubers em almoço</h2>
                <p className='news-text'>
                    Na quarta feira, dia 21 de março, <span className='moharu-name'>João "Moharu" Teló</span> encontrou alguns amigos em um almoço no restaurante Mravillhoso, em Novo Hamburgo.
                </p>
                <p className='news-text'>
                    Os mesmos trocaram cumprimentos calorosos, seguidos de apertos de mãos e alguns abraços timidos.
                </p>
                <p className='news-text'>
                    <span className='moharu-name'>João "Moharu" Teló</span> costuma jogar Pokemon com eles, um dos muitos hobbies do nosso jogador preferido.
                </p>
                <p className='news-text'>
                    O youtuber Vínicius, conhecido como <span className='other-name'>Vinimoschen</span>, além do seu canal Sempre Nessas, que bateu semana passada a incrivel marca de 209 inscritos, descreve  <span className='moharu-name'>João "Moharu" Teló</span>  como uma pessoa esforçada.
                </p>
                <p className='news-cit'><i>
                    Desde que conheci Moharu, ele tem melhorado muito suas habilidades em pokemon
                    <br/>
                    Podemos dizer que ele está se tornando um verdadeiro, mestre pokemon.
                </i> Comenta Vinícius. </p>
                <p className='news-moharup'>
                    MOHARU HYPE!
                </p>
            </div>
            <div className='news-container'>
                <h2 className="news-title">BREAKING NEWS! Moharu irá se dedicar 100% aos <strong>GAMES</strong> a partir de abril</h2>
                <p className='news-text'>
                    A assessoria do site conseguiu uma noticia deveras importante no dia de hoje. <span className='moharu-name'>João "Moharu" Teló</span> está deixando o emprego atual (programador de seilaoq) para se dedicar 100% aos <strong>games eletrônicos</strong>.
                </p>
                <p className='news-text'>
                    A busca profissional vem depois de uma queda de desempenho do jogador, muito atribuída à utilização de drogas pesadas, problema que o jogador tem a anos, após começar a jogar League of Legends e World of Warcraft, com passagens por Starcraft II e, nos seus momentos mais sombrios, Tibia.
                </p>
                <p className='news-text'>
                    Porém, o jogador desmentiu estas acusações, dizendo que o trabalho limitava a capacidade de treino do mesmo.
                </p>
                <p className='news-text'>
                    Procurado pela assessoria do site, <span className='other-name'>Juliano</span>, dono da empresa, comentou o ocorrido:
                </p>
                <p className='news-cit'><i>
                    Moharu? *Nome do editor*, a gente tem até amanhã para entregar essa feature, tu já foi avisado diversas vezes deste seu comportamento.
                    <br/>
                    Além de perde um excelente funcionário, ainda tenho que aturar esse tipo de gente inútil na porra da minha empresa.
                </i></p>
                <p className='news-text'>
                    <span className='moharu-name'>João "Moharu" Teló</span> ainda não comentou se pretende se manter na Zony Gaming, porém, fontes falam de uma nova contratação, para um grande clube do mundo do automobilismo, que pretende entrar com tudo no mundo de <strong>eSports</strong>.
                </p>
                <p className='news-moharup'>
                    MOHARU VROW!
                </p>
            </div>
            <div className='news-container'>
                <h2 className="news-title">Moletom novo a caminho</h2>
                <p className='news-text'>
                    <span className='moharu-name'>João "Moharu" Teló</span> compartilhou em suas <a href="https://www.facebook.com/moharuow/">redes sociais</a> o novo modelo de moletom que será vendido em breve nas lojas virtuais de todo o brasil.
                </p>
                <div className='news-image-container'>
                    <img  className='news-image' src="/images/moletom.jpg"></img>
                </div>
                <p className='news-text'>
                    O modelo é bastante simples, contando somente com os escritos "Zony" e "Moharu", sendo, respectivamente, o nome da organização atual do jogador, e o nickname do mesmo.
                </p>
                <p className='news-text'>
                    Desenhado por <a href="https://twitter.com/hallousy"><span className='other-name'>Luciana</span></a>, a artista utiliza toda sua técnica de desenhos que ela fez pq ela é desenhista para fazer o estilo único da peça.
                </p>
                <p className='news-text'>
                    Procurada pela assessoria do site, Luciana comentou sobre a escolha do modelo, cores e escrita do moletom:
                </p>
                <p className='news-cit'><i>
                    Não faço ideia de quem você é, para de me ligar, caralho.
                </i></p>
                <p className='news-text'>
                    A peça deverá ser vendida tanto na loja de <span className='moharu-name'>João "Moharu" Teló</span>, quanto em quase todas as lojas de <strong>GAMERS</strong> do Brasil.
                </p>
                <p className='news-moharup'>
                    MOHARU UP!
                </p>
            </div>
            <div className='news-container'>
                <h2 className="news-title">Moharu comenta reportagem da UOL JOGOS</h2>
                <p className='news-text'>
                    Na quarta feira, dia 07 de fevereiro, <span className='moharu-name'>João "Moharu" Teló</span> comentou sobre a máteria <a href="https://jogos.uol.com.br/ultimas-noticias/2018/02/07/vida-de-modelo-brigas-sexo-e-drogas-no-dia-a-dia-dos-pro-players.htm"><b>Vida de modelo: brigas, sexo e drogas no dia a dia dos jovens pro players...</b> da UOL Jogos.</a>
                </p>
                <p className='news-text'>
                    A matéria escrita por Pablo Raphael, cita várias dificuldades na vida de um jogador profissional iniciante nos <strong>GAMES</strong> eletrônicos, como o afastamento da família e amigos.
                </p>
                <p className='news-text'>
                    <span className='moharu-name'>Moharu</span> negou estes fatos e questionou a veracidade das informações apresentadas pelo jornalista:
                </p>
                <p className='news-cit'><i>
                    ai guys
                    <br/>
                    essa vida ta mto dificil!!!!
                </i></p>
                <p className='news-text'>
                    Comenta <span className='moharu-name'>Moharu</span>, ironizando o fato de ser o melhor jogador em sua categoria, apoiado por seu companheiro mais iniciante, <span className='other-name'>Luís "Marsupilami" Rodrigues</span>, jogador de DOTA2, que fez o simples comentário "Ezy laife".
                </p>
                <p className='news-text'>
                    A assessoria do site ainda não se pronunciou sobre os comentários do jogador.
                </p>
                <p className='news-moharup'>
                    MOHARU CIMA!
                </p>
            </div>
            <div className='news-container'>
                <h2 className="news-title">Moharu para a divisão Brasileira de Overwatch do Brasil de Pelotas</h2>
                <p className='news-text'>
                    O MOHARU NEWS ficou sabendo com exclusividade, através de uma fonte confiável conhecida como 'LIBERACU', sobre a contratação de <span className='moharu-name'>João "Moharu" Teló</span> para a divisão brasileira de Overwatch do time gaúcho Brasil de Pelotas.
                </p>
                <p className='news-text'>
                    Além do time de Overwatch, a organização também possui grandes equipes de futebol, bocha, bolão e rouba monte.
                </p>
                <p className='news-text'>
                    <span className='moharu-name'>Moharu</span> deve começar sua atuação na equipe à partir de Janeiro de 2018, após finalizar os campeonatos com sua equipe atual, Zony Gaming.
                </p>
                <p className='news-moharup'>
                    MOHARU YOW!
                </p>
            </div>
            <div className='news-container'>
                <h2 className="news-title">Zony Gaming (time de Moharu) substitui time no campeonato brasileiro de Overwatch</h2>
                <p className='news-text'>
                    O MOHARU NEWS ficou sabendo com exclusividade através do próprio player que o seu time deverá substituir um time qualquer no campeonato brasileiro de Overwatch.
                </p>
                <p className='news-text'>
                    Nas palavras do jogador <span className='moharu-name'>Moharu</span>, "O campeonato vai ser ezi d+ irmãozinho"
                </p>
                <p className='news-text'>
                    10min pra acabar o expediente
                </p>
                <p className='news-moharup'>
                    MOHARU UP!
                </p>
            </div>
        </div>
        );
    }
}

export default App;
