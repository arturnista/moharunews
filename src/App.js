import React, { Component } from 'react'
import './App.css'

class App extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            regionalMessage: '',
            regionalSel: -1,
            appClass: 'App',
            wrapperClass: 'wrapper'
        }

        this.stickHeader = this.stickHeader.bind(this)
        this.sendRegionalSelectAnswer = this.sendRegionalSelectAnswer.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.stickHeader)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.stickHeader)
    }

    sendRegionalSelectAnswer() {
        let regionalMessage = ''
        if(this.state.regionalSel === 0) {
            regionalMessage = 'Moharu agradece pelo apoio!'
        } else if(this.state.regionalSel === 1) {
            regionalMessage = 'Tecnicamente o Moharu é um babaca então iremos contabilizar o voto para ele. Moharu agradece pelo apoio!'
        } else if(this.state.regionalSel === 2) {
            regionalMessage = 'Você selecionou a opção errada mas já arrumamos. Moharu agradece pelo apoio!'
        }

        this.setState({ regionalMessage, regionalSel: 0 })
    }

    stickHeader() {
        if(window.scrollY < 80 ) {
            this.setState({ appClass: 'App', wrapperClass: 'wrapper' }) 
        } else {
            this.setState({ appClass: 'App sticky-header', wrapperClass: 'wrapper wrapper-sticky' })
        }
    }

    render() {
        return (
        <div className={this.state.appClass}>
            <header className="App-header">
                <div className="moharu-game">
                    <img src='/images/moharu.jpg' className="App-logo" alt="logo" title="MOHARU GAME: TENTE PARAR A FOTO NO MOMENTO CERTO" />
                </div>
                <p className="App-title-text">Bem vindo ao</p>
                <a href='https://www.facebook.com/moharuow' className='facebook-link'>
                    <h1 className="App-title">MOHARU NEWS</h1>
                </a>
                <p className="App-title-text">O portal de informação do seu jogador favorito</p>
                <p className="App-email">moharunews@gmail.com</p>
            </header>
            <div className={this.state.wrapperClass}>

                <div className='news-container'>
                    <h2 className="news-title">Moharu empata terceiro jogo</h2>
                    <p className='news-text'>
                        Em um terceiro jogo emocionante, porém triste, <span className='moharu-name'>João "Moharu" Teló</span> empata.
                    </p>
                    <p className='news-text'>
                        A primeira zebra do campeonato aconteceu! E foi contra nosso jogador!
                    </p>
                    <p className='news-text'>
                        O jogo começou apertado, <span className='moharu-name'>João "Moharu" Teló</span> cometeu um deslize logo na primeira carta jogando, seila, um Squirtle?
                    </p>
                    <p className='news-text'>
                        Isso atrapalhou completamente o jogo dele, já que o baralho dele não tinha nada de água!
                    </p>
                    <p className='news-text'>
                        Seu oponente aproveitou isso para levar o jogo a empate, o melhor resultado obtido contra o nosso jogador em anos.
                    </p>
                    <p className='news-text'>
                        Isso não deve atrapalhar a vida de <span className='moharu-name'>João "Moharu" Teló</span>, porém, Jorginho da 12 subiu muito no Ranking Mundial de pokemon, alcançando o primeiro lugar na categoria <strong>MELHORES PIORES QUE MOHARU</strong>.
                    </p>
                    <p className='news-text'>
                        Além de pokemon, especialistas indicam que isso pode causar uma crise nas casas de apostas, que possivelmente não terão dinheiro para pagar suas perdas.
                    </p>
                    <p className='news-cit'><i>
                        Ninguém esperava isso! É um desastre para a economia mundial!
                    </i> - Afirmou Paulo Guedes, que entrou de férias ontem e passa a acompanhar os torneios de pokemon.</p>
                    <p className='news-text'>
                        Ainda assim, <span className='moharu-name'>João "Moharu" Teló</span> segue forte no torneio, sem derrotas até o momento de sua vida.
                    </p>
                    <p className='news-moharup'>
                        A WILD MOHARU APPEARS!
                    </p>
                </div>

                <div className='news-container'>
                    <h2 className="news-title">Moharu abre primeiro dia com duas vitórias</h2>
                    <p className='news-text'>
                        O campeonato de jogo de carta começa bem para <span className='moharu-name'>João "Moharu" Teló</span>, conseguindo duas vitórias de cara.
                    </p>
                    <p className='news-text'>
                        O primeiro jogo foi ganho por WO, já que o seu oponente Paulo <i>"Eu desco essa carta em modo de defesa, pera, não tem isso no pokemon?"</i> Matias trouxe um baralho de Magic the Gathering, um puta jogo bosta.
                    </p>
                    <p className='news-cit'><i>
                        Nem sabia que era pokemon essa porra
                    </i> - Chorou Paulo.</p>
                    <p className='news-text'>
                        O segundo jogo foi igualmente fácil, o oponente não teve chance contra o jogador da galera. 
                    </p>
                    <p className='news-text'>
                        <span className='moharu-name'>João "Moharu" Teló</span> lançou carta após carta com perfeição, como quem joga cartas em um torneio regional de pokemon.
                    </p>
                    <p className='news-text'>
                        Seu adversário, Rafa dos Baralhos, teve um jogo muito complicado. Após a primeira rodada, o jogo já se decidiu, com <span className='moharu-name'>João "Moharu" Teló</span> fazendo praticamente tudo que está nas regras que fazem o outro perder.
                    </p>
                    <p className='news-text'>
                        Na segunda rodada o jogo foi decidido com nosso <strong>GAMER PLAYER</strong> favorito finalizando o oponente como é possível no pokemon.
                    </p>
                    <p className='news-text'>
                        Rafa dos Baralhos lamentou a derrota.
                    </p>
                    <p className='news-cit'><i>
                        É ele jogou bem lançando cartas e bixos e magias e seila não sei bem como é pokemon é estranho pq tem que sacar carta pra ganhar e só mata 6 ou 8 não lembro seila só sei que perdi.
                    </i></p>
                    <p className='news-text'>
                        <span className='moharu-name'>João "Moharu" Teló</span> segue forte na disputa. Os especialistas já o definem como principal jogador do Ano, talvez do século.
                    </p>
                    <p className='news-moharup'>
                        A WILD MOHARU APPEARS!
                    </p>
                </div>

                <div className='news-container'>
                    <h2 className="news-title">Moharu em campeonato de jogo de carta: "Estou preparado"</h2>
                    <p className='news-text'>
                        No sabado desta semana, <span className='moharu-name'>João "Moharu" Teló</span> participa do campeonato regional de "Jogo de carta".
                    </p>
                    <p className='news-text'>
                        Nosso jogador preferido irá se encontrar com grandes lendas deste meio, como Rogério Pikachu, Jorginho da 12, o australiano Jair Daumaqdootra e Lebron James.
                    </p>
                    <div className='news-image-container'>
                        <img className='news-image-inv' src="/images/moharu_em_campeonato_jogo_de_carta_ganha_deles_porra.jpeg"></img>
                    </div>
                    <p className='news-text'>
                        A direção do evento informa que 30% dos competidores desistiram do campeonato ao ver <span className='moharu-name'>João "Moharu" Teló</span> entrar no estadio.
                    </p>
                    <p className='news-text'>
                        Paulo <i>"Eu desco essa carta em modo de defesa, pera, não tem isso no pokemon?"</i> Matias não foi um deles. Em suas redes sociais ele afirmou:
                    </p>
                    <p className='news-cit'><i>
                        Estou preparado!
                    </i> - Afirmou <i>Eu desco essa carta em modo de defesa, pera, não tem isso no pokemon?</i>.</p>
                    <p className='news-text'>
                        Paulo deve ser a primeira vitima de <span className='moharu-name'>João "Moharu" Teló</span> no campeonato.
                    </p>
                    <p className='news-text'>
                        Iremos atualizar o site com as novidades.
                    </p>
                    <p className='news-text'>
                        Enquanto isso, a equipe criativa MoharuNews criou uma enquete:
                    </p>
                    <div className='news-form'>
                        <p>Quem você acha que irá ganhar o regional?</p>
                        <div className={`news-options ${this.state.regionalMessage !== '' ? 'blocked' : 'available'}`}>
                            <p className={`${this.state.regionalSel === 0 ? 'selected': ''}`} onClick={() => this.state.regionalMessage === '' && this.setState({ regionalSel: 0 })}>Moharu {this.state.regionalMessage !== '' && '(100%)'}</p>
                            <p className={`${this.state.regionalSel === 1 ? 'selected': ''}`} onClick={() => this.state.regionalMessage === '' && this.setState({ regionalSel: 1 })}>Seila caralho qualquer babaca ai {this.state.regionalMessage !== '' && '(0%)'}</p>
                            <p className={`${this.state.regionalSel === 2 ? 'selected': ''}`} onClick={() => this.state.regionalMessage === '' && this.setState({ regionalSel: 2 })}>Lebron James {this.state.regionalMessage !== '' && '(0%)'}</p>
                        </div>
                        {
                            this.state.regionalMessage !== '' ? 
                            <p className='news-options-answer'>{this.state.regionalMessage}</p>
                            :
                            <button onClick={this.sendRegionalSelectAnswer}>Enviar resposta!</button>
                        }
                    </div>
                    <p className='news-moharup'>
                        MOHARU EU ESCOLHO VOCÊ!
                    </p>
                </div>

                <div className='news-container'>
                    <h2 className="news-title">Moharu confirmado na Virtus Pro</h2>
                    <p className='news-text'>
                        Ultimamente <span className='moharu-name'>João "Moharu" Teló</span> sem sido bastante ativo em conversas pelo WhatsApp e, felizmente, isso tem gerado muitos vazamentos de dados.
                    </p>
                    <p className='news-text'>
                        Durante o dia, nós da Equipe MoharuNews recebemos esta foto. Nela é possível ver o atleta usando a camisa do seu novo time, enquanto assina o contrato:
                    </p>
                    <div className='news-image-container'>
                        <img className='news-image-inv' src="/images/moharu_assina_com_virtus_pro_time_super_top_de_alguns_jogos_mas_sera_que_nao_vai_ser_argentina.jpg"></img>
                    </div>
                    <p className='news-text'>
                        Isto contradiz a informação publicada no dia de ontem, que <span className='moharu-name'>João "Moharu" Teló</span> teria sido contratado pela NIP. Após verificarmos que o e-mail da equipe de <strong>GAMES ELETRÔNICOS</strong> não é nip@bol.com.br, a Equipe MoharuNews dispensou os trabalhos da foto, nosso querido informante. Revoltado, a mesma declarou:
                    </p>
                    <p className='news-cit'><i>
                        VOCÊS VÃO PAGAR POR ISSO!
                    </i> - Afirma a foto, o que é estranho já que ninguém comprou nada.</p>
                    <p className='news-text'>
                        <span className='moharu-name'>João "Moharu" Teló</span> declarou que este será seu time definitivo. Também confirmou que jogará na primeira divisão da JAJAJA.
                    </p>
                    <p className='news-text'>
                        A equipe da Virtus Pro publicou em suas redes sociais o audio que oficializa a contratação do jogador:
                    </p>
                    <audio controls className='news-audio'>
                        <source src="/audio/ceo_da_virtus_pro_dando_declaracao_da_contratacao_do_moharu.ogg" type="audio/ogg" />
                    </audio>
                    <p className='news-text'>
                        A repercusão não foi positiva, pelo tom informal da declaração. Arrependido, o CEO enviou uma nova mensagem, desta vez, segundo a empresa, em um tom que melhor representa os valores da equipe de <strong>GAMES ELETRÔNICOS</strong>.
                    </p>
                    <audio controls className='news-audio'>
                        <source src="/audio/ceo_da_virtus_pro_se_arrepende_por_tom_informal_e_manda_a_real.ogg" type="audio/ogg" />
                    </audio>
                    <p className='news-text'>
                        A Equipe MoharuNews deseja felicidades e muitas conquistas no seu novo time.
                    </p>
                    <p className='news-moharup'>
                        MOHARU MUCHACHO!
                    </p>
                </div>


                <div className='news-container'>
                    <h2 className="news-title">Moharu pode ter sido contratado por NIP, afirma foto.</h2>
                    <p className='news-text'>
                        Hoje, em sua volta para a casa, <span className='moharu-name'>João "Moharu" Teló</span> trocava algumas mensagens com seus colegas, amigos e o Bob. Em uma dessas mensagens, nosso atleta enviou uma foto que pode revelar o seu futuro no eSports mundial:
                    </p>
                    <div className='news-image-container'>
                        <img className='news-image-inv' src="/images/moharu_para_a_nip_agora_meu_deus_oq_ta_acontecendo.jpg"></img>
                    </div>
                    <p className='news-cit'><i>
                        Moharu pode ter sido contratado por NIP
                    </i> - Afirma a foto, após ter sido enviada.</p>
                    <p className='news-text'>
                        <span className='moharu-name'>João "Moharu" Teló</span> não deu mais declarações sobre o acontecimento, ignorando todos os pedidos de explicação de seus colegas e amigos, inclusive do Bob.
                    </p>
                    <p className='news-cit'><i>
                        Mas ele não iria para um time da JAJAJA?
                    </i> - Questiona você, após ler esta notícia.</p>
                    <p className='news-text'>
                        Como todos sabem, a NIP <a href="https://globoplay.globo.com/v/6818470/programa/">liberou o seu time de Overwatch</a> e atualmente se encontra sem equipe. Teria ela intenções de contratar um time Argentino + <span className='moharu-name'>João "Moharu" Teló</span>?
                    </p>
                    <p className='news-text'>
                        Será que MARADONA ES MUY BUENO defenderá a primeira divisão de JAJAJA sobre o escudo do time suéco?
                    </p>
                    <p className='news-text'>
                        Teria Roão tramado um plano malígno para acabar com o futuro do nosso jogador?
                    </p>
                    <p className='news-text'>
                        Só o futuro dirá. Enquanto o mesmo não chega, que tal mandar um e-mail com aquela receita gostosa de Pudim de Leite condensado para o moharunews@gmail.com?
                    </p>
                    <p className='news-text'>
                        E o último questionamento que fica é:
                    </p>
                    <p className='news-moharup'>
                        MOHARU NO VASCO?!
                    </p>
                </div>


                <div className='news-container'>
                    <h2 className="news-title">Moharu assume amor por Argentina e avisa, "Em 2018 meu time é branco e azul-celeste"</h2>
                    <p className='news-text'>
                        <span className='moharu-name'>João "Moharu" Teló</span> deu uma declaração um tanto quanto polêmica no dia de hoje.
                    </p>
                    <p className='news-text'>
                        Enquanto se alcoolizava com amigos, após curtir os embalos da noite Belo Horizontenha, <span className='moharu-name'>João "Moharu" Teló</span> acabou fazendo uma declaração surpreendente, que irá deixar todos os seus fãs apreensivos pelas próximas semanas.
                    </p>
                    <p className='news-text'>
                        <span className='moharu-name'>João "Moharu" Teló</span> pode se ser contratado e, muito pior, pode acabar jogando por um time argentino de Overwatch.
                    </p>
                    <p className='news-text'>
                        A equipe MoharuNEWS, após um árduo jornalismo investigativo, conseguiu descobrir o time que o nosso jogador até então favorito irá entrar.
                    </p>
                    <p className='news-text'>
                        Após questionar todos os times da JAJAJA, acronimo para Liga Nacional Argentina, um time respondeu positivamente para o nosso questionamento.
                    </p>
                    <p className='news-cit'><i>
                        JAJA MOHARU ÉS UN GRANDE JOGADOR E IRÁS JOGAR POR LÁ EQUIPE ARGENTINA QUE ES MUY BUENA E NO ES MEJOR QUE BRASIL PEROSUPOSTO NO SE OQ ISTO SIGNIFICA PERO ES UNA PALAVRAITA MT TOP MAS MOHARU VA JOGAR SIM E DESTROIR LOS BRASILENHOS PUTOS ARRIBA MUCHACHOS QUIÉN NO SALTA, QUIERE AUMENTO!
                    </i> - Se pronunciou Marcelito, atual CEO do time MARADONA ES MUY BUENO.</p>
                    <p className='news-text'>
                        Fica nosso questionamento, teria <span className='moharu-name'>João "Moharu" Teló</span> ficado triste com a falta de oportunidades do governo brasileiro? Teria <span className='moharu-name'>João "Moharu" Teló</span> se decepcionado com os seus conterraneos após a derrota HUMILHANTE no último jogo pela nossa querida e amada Zony Gaming? Teria nosso querido jogador ter sido trocado por seu gemeo malígno, oq explicaria o motivo dele ter curtido a própria página a alguns dias atrás já que não era ele e sim o seu gemeo Roão, que agora que parei para pensar em um nome muito argetino?
                    </p>
                    <p className='news-text'>
                        É dificil saber, mas, enquanto não temos uma resposta, resta somente doarmos muito Bitcoin para o redator do site.
                    </p>
                    <div className='news-image-container'>
                        <img className='news-image-inv' src="/images/qrcode_da_carteira_bitcoin_do_dono_do_site_manda_varios_btc_ae.png"></img>
                    </div>
                    <p className='news-text'>
                        1EL9Wnw4D3P411x9BCixMuXBZD3TpT1E4M
                    </p>
                    <p className='news-moharup'>
                        MOHARU ARRIBA!
                    </p>
                </div>


                <div className='news-container'>
                    <h2 className="news-title">BREAKING NEWS! Moharu faz meme</h2>
                    <p className='news-text'>
                        Hoje, durante a COPA DO MUNDO! nosso querido <span className='moharu-name'>João "Moharu" Teló</span>, está acompanhando a ESL BELO HORIZONTE, em Belo Horizonte.
                    </p>
                    <p className='news-text'>
                        Porém, algo inesperado aconteceu. Em uma de suas viagens para um mercado, <span className='moharu-name'>João "Moharu" Teló</span> confeccionou um novo meme:
                    </p>
                    <div className='news-image-container'>
                        <img className='news-image-inv' src="/images/moharu_faz_o_melhor_meme_que_ja_existiu.png"></img>
                    </div>
                    <p className='news-text'>
                        Especialistas já dizem que o meme parece ter um futuro promissor. Entrevistado pela equipe, SID do AsVeiz Salvo, comentou a imagem:
                    </p>
                    <p className='news-cit'><i>
                        Tem futuro isso ai, vou botar no blog kkk
                    </i></p>
                    <p className='news-text'>
                        Será que <span className='moharu-name'>João "Moharu" Teló</span> irá começar uma nova vida como criador de memes? Só o futuro dirá!
                    </p>
                    <p className='news-moharup'>
                        MOHARU MEMES!
                    </p>
                    <p className='news-moharup'>
                        VAI NEYMAR CARALHO!
                    </p>
                </div>

                <div className='news-container'>
                    <h2 className="news-title">Moharu pode deixar Zony e entrar para a maior equipe de eSports do mundo!</h2>
                    <p className='news-text'>
                        Nosso correspondente "CAGANOBANHO PAI" trouxe uma informação bombástica.
                    </p>
                    <p className='news-text'>
                        Nossa fonte contou que <span className='moharu-name'>João "Moharu" Teló</span> está em contato com <strong>Robson Jorge</strong>, forte time que surgiu como uma Guilda de Tibia, se tornando uma das, quiçá a maior, equipe de <strong>GAMES ELETRÔNICOS</strong> que existe.
                    </p>
                    <p className='news-text'>
                        O salário do atleta não foi divulgado, mas deve variar entre o valor do bitcoin agora e o valor do bitcoin agora.
                    </p>
                    <p className='news-text'>
                        A equipe que abraçou Moharu no seu momento mais dificil, que cuidou de nosso querido jogador e o ajudou a chegar onde está hoje, Zony Gaming, pretende continuar ai ganhando jogos as vezes e perdendo as vezes, conforme conta Roberto Zony Gaming, atual CEO da companhia:
                    </p>
                    <p className='news-cit'><i>
                        Pretendemos continuar ai ganhando jogos as vezes e perdendo as vezes.
                    </i> - Conta Roberto Zony Gaming.</p>
                    <p className='news-text'>
                        Nós da equipe MoharuNews gostariamos de saber o que você acha!
                    </p>
                    <p className='news-text'>
                        Envie um email para moharunews@gmail.com e nos conte! A gente perdeu tempo criando essa merda então seria legal se vocês usassem!
                    </p>
                    <p className='news-moharup'>
                        MOHARU VAI!
                    </p>
                </div>

                <div className='news-container'>
                    <h2 className="news-title">Moharu em crise existencial?</h2>
                    <p className='news-text'>
                        No dia de Ontem, às 09:34, nós da equipe se deparamos com a seguinte imagem na Rede Social Facebook:
                    </p>
                    <div className='news-image-container'>
                        <img className='news-image-inv' src="/images/jao_telo_curte_propria_pagina_ta_meio_ruim_de_fa_em_tio.png"></img>
                    </div>
                    <p className='news-text'>
                        O que nos causou bastante espanto é que, ambas as pessoas, João Teló e <span className='moharu-name'>João "Moharu" Teló</span>, teoricamente, são a mesma pessoa!
                    </p>
                    <p className='news-text'>
                        Teria isso sido uma crise mental do nosso querido jogador?
                    </p>
                    <p className='news-text'>
                        Teria Moharu caindo em uma crise de dependencia de entorcepentes?
                    </p>
                    <p className='news-text'>
                        Teria ele criado um alter ego, tal qual Pelé e Edison Arantes do Nascimento?
                    </p>
                    <p className='news-text'>
                        Estas duvidas ficam no ar enquanto esperamos um pronunciamento oficial do nosso querido e amado jogador.
                    </p>
                    <p className='news-text'>
                        Ficamos no aguardo de novas notícias.
                    </p>
                    <p className='news-moharup'>
                        MOHARU VAI!
                    </p>
                </div>



                <div className='news-container'>
                    <h2 className="news-title">Time em crise após derrota na classificatória</h2>
                    <p className='news-text'>
                        Nesta semana, o Time da Zony Gaming, encabeçado por <span className='moharu-name'>João "Moharu" Teló</span>, perdeu o jogo que classificaria o time para o campeonato mais importante do planeta.
                    </p>
                    <p className='news-text'>
                        A derrota abalou mentalmente os integrantes do time. Fontes inclusive relataram diversas brigas internas.
                    </p>
                    <p className='news-text'>
                        A Equipe criativa MoharuNews foi atrás de fãs para sabermos como anda a imagem da Zony Gaming pelos olhos daqueles que, segundo <span className='moharu-name'>João "Moharu" Teló</span>, são os que dão alegria na hora da vitória, seus fãs.
                    </p>
                    <p className='news-text'>
                        Perguntamos "Você acha que a Zony Gaming está em crise?" para vários internautas e estas foram as respostas:
                    </p>
                    <p className='news-help'>
                        os comentários são feitos por fãs sem ligação profissional OU legal com a Equipe criativa MoharuNews.
                    </p>
                    <p className='news-cit'><i>
                        <br/> <strong>Lorek</strong>:
                        <br/> AHAHAHAHAHAHHAHAA
                        <br/> Não, eu acho que apesar de estar enfrentando dificuldades a Zony Gaming ainda não está desempenhando o seu máximo potencial
                        <br/> devido à mudanças recentes no cenário
                        <br/> mas a base é forte mano
                        <br/> e a zony triunfará
                    </i></p>
                    <p className='news-cit'><i>
                        <br/> <strong>André</strong>:
                        <br/> what
                        <br/> o jao fez um video de melhores momentos
                        <br/> ou ele ta querendo uma carreira solo
                        <br/> ou a zony
                        <br/> precisa de views
                        <br/> sei la
                    </i></p>
                    <p className='news-cit'><i>
                        <br/> <strong>Olivera</strong>:
                        <br/> Acho que falta eu
                    </i></p>
                    <p className='news-cit'><i>
                        <br/> <strong>Thiago</strong>:
                        <br/> Eu só trabalho aqui senhor.
                    </i></p>
                    <p className='news-cit'><i>
                        <br/> <strong>Lulu</strong>:
                        <br/> Hahahahahahahahahah
                        <br/> A crise nem chegou lá ainda
                        <br/> Não sei se eles já não tão vendendo trufa também
                        <br/> Me coloco á disposição para demais esclarecimentos no telefone 51 9892-4890
                        <br/> E friso que o Moharinhu é ZiKa DIMAIS irmauzinho
                        <br/> E que eu to usando uma cueca da supreme que custou 120 doll
                    </i></p>
                    <p className='news-cit'><i>
                        <br/> <strong>Willis</strong>:
                        <br/> HASIOHEOASIEOHIASEOHASE
                        <br/> Acho.
                    </i></p>
                    <p className='news-cit'><i>
                        <br/> <strong>Relampago Marquinhos</strong>:
                        <br/> Eu acho... Os caras andam meio sumidos... O João "Moharu" Teló chegou *seguido de berros inteligiveis, provavelmente derivados do fato de seu personagem em um MMO Rpg ter perdido a vida*
                    </i></p>
                    <p className='news-cit'><i>
                        <br/> <strong>Pedro</strong>:
                        <br/> O João postou video ontem então deve estar tudo bem.
                    </i></p>
                    <p className='news-text'>
                        Podemos ver a mudança de carater dos fãs sobre a equipe.
                    </p>
                    <p className='news-text'>
                        Nós da equipe MoharuNews gostariamos de saber a sua opinião! Mande sua opinião para o email para moharunews@gmail.com!
                    </p>
                    <p className='news-moharup'>
                        MOHARU ZOP!
                    </p>
                </div>


                <div className='news-container'>
                    <h2 className="news-title">Moharu pode virar blogueiro de profissão!</h2>
                    <p className='news-text'>
                        Na tarde desta terça feira, 10 de Abril de 2018, <span className='moharu-name'>João "Moharu" Teló</span> criou uma nova rede social, <a href="https://www.instagram.com/moharuow/">Instagram</a>.
                    </p>
                    <p className='news-text'>
                        O que parece uma simples notícia pode ter um final muito mais sinistro.
                    </p>
                    <p className='news-text'>
                        Muitos questionaram a decisão de <span className='moharu-name'>João "Moharu" Teló</span> em se dedicar ao <strong>OVERWATCH</strong> de forma profissional, achando uma decisão bastante perigosa para o futuro de nosso atleta.
                    </p>
                    <p className='news-text'>
                        Porém, em um furo de reportagem, conseguimos uma imagem do chat secreto que <span className='moharu-name'>Moharu</span> possui para seus amigos mais próximos, que pode demonstrar que o mesmo tem intenções de virar um...
                    </p>
                    <p className='news-news'>
                        <span className='full-big'><strong>BLOGUEIRO</strong></span>
                    </p>
                    <p className='news-text'>
                        A imagem, mostrada logo a baixo, foi conseguida por um de nossos informantes, o 'CIDADE LONGE PRA CARALHO EM', e mostra <span className='moharu-name'>Moharu</span> aspirando a nova profissão.
                    </p>
                    <div className='news-image-container'>
                        <img className='news-image-inv' src="/images/moharu_bloguero.png"></img>
                    </div>
                    <p className='news-text'>
                        Nós, da equipe criativa do Moharu News, torcemos para que o nosso jogador preferido repense a sua decisão e que siga sua carreira de <strong>GAMER</strong> profissional.
                    </p>
                    <p className='news-moharup'>
                        MOHARU AEHOOO!
                    </p>
                </div>

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
            <footer className="App-footer">
                <img src='/images/moharu.jpg' className="App-logo" alt="logo" />
                <p style={{color: '#220'}}>KPOP RULES!!11!!1!ONE!1!!!</p>
                <p>1kt1kt Technologies © 2018 </p>
            </footer>
        </div>
        )
    }
}

export default App
