let conteudo = document.querySelector('.conteudo');

function telaInicial() {
    conteudo.innerHTML = `
    <div class="feed" >
        <div class="inicio-feed">
            <div class="container-novo-quiz">
                <div class="texto-novo-quiz">
                    Você não criou nenhum
                </div>
                <div class="texto-novo-quiz">
                    quizz ainda :(
                </div>
                </br>
                </br>
                <button onclick="criarQuiz()">Criar Quizz</button>
            </div >
        </div >

        <div>
            <div class="seus-quizes ocultar">
                <h1>Seus Quizzes</h1>
                <div class="espacamento3"></div>
                <ion-icon name="add-circle"></ion-icon>
            </div>

            <div class="espacamento2"></div>

            <!-- <div class="container-quiz-pessoais">
                <div class="quiz-site-img">
                    <div class="quiz-site">
                        <p class="quiz-site-texto">O quão Potterhead é você?</p>
                    </div>
                </div>

                <div class="quiz-site-img">
                    <div class="quiz-site">
                        <p class="quiz-site-texto">O quão Potterhead é você?</p>
                    </div>
                </div>
            </div> -->
        </div>

        <div class="espacamento2"></div>
        <div class="espacamento2"></div>

        <h1>Todos os Quizzes</h1>

        <div class="quizzes" style="display:flex;flex-wrap:wrap"></div>

        <div class="espacamento2"></div>

    </div >
    `
}

telaInicial();

function criarQuiz() {
    conteudo.innerHTML = `
    <div class="toda-pag">
        <h2>Comece pelo começo</h2>

        <form class="form" onsubmit="enviarFormCriarQuizz()">
            <div class="container-criar-quiz tamanho">
                <div>
                    <input type="text" minLength="5" maxLength="65" placeholder="  Título do seu quizz" >
                </div>
                <div>
                    <input type="text" placeholder="  URL da imagem do seu quizz" >
                </div> 
                <div>
                    <input type="number" class="input-perguntas" min="3" placeholder="  Número de perguntas do quizz" >
                </div>
                <div>
                    <input type="number" min="2" class="input-niveis" placeholder="  Quantidade de níveis do quizz" >
                </div>  
            </div>  

            <button type="submit" class="botao1">Prosseguir pra criar perguntas</button>
        </form>
    </div>
    `
}

function criarPerguntas(numPerguntas) {
    conteudo.innerHTML = `
    <div class="toda-pag">
        <h2>Crie suas perguntas</h2> 

        <form action="#" onsubmit="enviarFormCriarPerguntas()">
            <div class="container-perguntas"></div>

            <button class="botao1" type="submit">Prosseguir pra criar níveis</button>
        </form>
    </div>
    `
    let containerPerguntas = document.querySelector('.container-perguntas');

    for (let i = 0; i < numPerguntas; i++) {

        if (i > 0) {
            containerPerguntas.innerHTML += `
            <div class="novo-container-cp"> 
                <div class="p-fechada">
                    <h3>Pergunta ${i + 1}</h3>  
                    <ion-icon name="create-outline" class="conf-ion"></ion-icon>
                </div>
                <div class="container-criar-perguntas tamanho">
                        <input type="text" minLength="20" placeholder="  Texto da pergunta">
                        <input type="color" placeholder="  Cor de fundo da pergunta">
                    </br>
                    <h3>Resposta correta</h3>
                        <input type="text" placeholder="  Resposta correta" >
                        <input type="url" placeholder="  URL da imagem" >
                    </br>
                    <h3>Respostas incorretas</h3>
                        <input type="text" placeholder="  Resposta incorreta ${i + 1}" >
                        <input type="url" placeholder="  URL da imagem ${i + 1}" >
                    </br>
                        <input type="text" placeholder="  Resposta incorreta ${i + 1}" >
                        <input type="url" placeholder="  URL da imagem ${i + 1}" >
                    </br>
                        <input type="text" placeholder="  Resposta incorreta ${i + 1}" >
                        <input type="url" placeholder="  URL da imagem ${i + 1}" >
                    </br>
                </div>
            </div>
            `
        } else {
            containerPerguntas.innerHTML += `
            <div class="container-criar-perguntas tamanho">
                <h3>Pergunta ${i + 1}</h3>
                    <input type="text" "placeholder="  Texto da pergunta">
                    <input type="color" placeholder="  Cor de fundo da pergunta">
                </br>
                <h3>Resposta correta</h3>
                    <input type="text" placeholder="  Resposta correta" >
                    <input type="url" placeholder="  URL da imagem" >
                </br>
                <h3>Respostas incorretas</h3>
                    <input type="text" placeholder="  Resposta incorreta 1" >
                    <input type="url" placeholder="  URL da imagem 1" >
                </br>
                    <input type="text" placeholder="  Resposta incorreta 2" >
                    <input type="url" placeholder="  URL da imagem 2" >
                </br>
                    <input type="text" placeholder="  Resposta incorreta 3" >
                    <input type="url" placeholder="  URL da imagem 3" >
                </br>
            </div> `

        }
    }
}

function criarNiveis(numNiveis) {
    conteudo.innerHTML = `
    <div class="toda-pag">
        <h2>Agora, decida os níveis</h2>

        <form action="#" onsubmit="enviarFormCriarNiveis">
            <div class = "container-niveis"></div>

             <button class="botao1" onclick="quizPronto()">Finalizar Quizz</button>
        </form>
    </div>
    `
    let containerNiveis = document.querySelector('.container-niveis');

    for (let i = 0; i < numNiveis; i++){
        if (i > 0) {
            containerNiveis.innerHTML += `
            <div class="container-criar-niveis tamanho">
                <h3>Nível ${i + 1}</h3>
                <input type="text" minLength="10" placeholder="  Título do nível" >
                <input type="number" placeholder="  % de acerto mínima">
                <input type="url" placeholder="  URL da imagem do nível" >
                <input type="text" minLength="30" placeholder="  Descrição do nível" >
            </div>

            <div class="espacamento2"></div>

            <div class="container-pergunta-fechada">
                <div class="container-pergunta-fechada-bloco">
                    <h3>Nível 2</h3>
                    <ion-icon name="create-outline" class="conf-ion"></ion-icon>
                </div>
            </div>

            <div class="espacamento2"></div>
        
            <div class="container-pergunta-fechada">
                <div class="container-pergunta-fechada-bloco">
                    <h3>Nível 3</h3>
                    <ion-icon name="create-outline" class="conf-ion"></ion-icon>
                </div>
            </div>
            `
        }
    }

}


function quizPronto() {
    conteudo.innerHTML = `
    <div class="toda-pag">
        <h2>Seu quizz está pronto!</h2>

        <div class="quiz-pronto-pessoal-img">
            <div class="quiz-pronto-pessoal">
                <p class="quiz-site-texto">O quão Potterhead é você?</p>
            </div>
        </div>

        <div class="espacamento2"></div>

        <button class="botao2" onclick="jogarQuiz()">Acessar Quizz</button>

        <div class="espacamento4"></div>

        <div class="voltar-home" onclick="telaInicial()">Voltar para home</div>

    </div>
    `
}

function jogarQuiz() {
    conteudo.innerHTML = `
    <div class="container-topo-quiz">
            <div class="topo-quiz">
                <div class="texto-quiz">
                    <h4>O quão Potterhead você é?</h4>
                </div>
            </div>
        </div>

        <div class="espacamento5"></div>

        <div class="toda-pag">
            <div class="container-op-quiz">
                <div class="containter-interno-op">
                    <div class="pergunta-quiz">
                        <h2>Em qual animal Olho-Tonto Moody transfigurou Malfoy?</h2>
                    </div>
                    <div class="espacamento1"></div>
                    <div>
                        <div class="img-quiz"></div>
                        </br>
                        <h5>Gatineo</h5>
                    </div>
                    <div>
                        <div class="img-quiz"></div>
                        </br>
                        <h5>Gatineo</h5>
                    </div>
                    <div>
                        <div class="img-quiz"></div>
                        </br>
                        <h5>Gatineo</h5>
                    </div>
                    <div>
                        <div class="img-quiz"></div>
                        </br>
                        <h5>Gatineo</h5>
                    </div>
                </div>
            </div>

            <div class="espacamento2"></div>

            <div class="container-resultado">
                <div class="containter-interno-result">
                    <div class="resultado-quiz">
                        <h2>88% de acerto: Você é praticamente um aluno Hogwarts!</h2>
                    </div>
                    <div class="espacamento4"></div>
                    <div class="disposicao">
                        <div class="img-resultado"></div>
                        <div class="espacamento6"></div>
                        <h5 class="quebrar-texto">Parabéns Potterhead! Bem-vindx a Hogwats, aproveite o loop infinito de
                            comida e clique no
                            botão abaixo para usar o vira-tempo e reiniciar este teste</h5>
                    </div>

                </div>
            </div>

            <div class="espacamento2"></div>

            <button class="botao3" onclick="jogarQuiz()">Reiniciar Quizz</button>

            <div class="espacamento4"></div>

            <div class="voltar-home" onclick="telaInicial()">Voltar para home</div>

        </div>
    `
}


/* function validacaoQuiz() {
    let inText = document.querySelector('.in-text').value;
    if (inText.length < 20 || inText.length >= 65) {
        alert("O título deve ter no mínimo 20 e máximo de 65 caracteres! :(")
    } */

/* let inUrl = document.querySelector('.in-url').value;
if () {

} */

/* let inNumP = document.querySelector('.in-numP').value;
if (inNumP < 3) {
    alert("O número mínimo de fases são 3! :(")
}

let inNumQ = document.querySelector('.in-numQ').value;
console.log(inNumQ);
if (inNumQ < 2) {
    alert("O número mínimo de níveis são 2! :(")
} */

/* let validarCriacao = document.querySelector('.container-criar-quiz');
for(let i = 0; i ){
    conteudo.innerHTML += `
    <button onclick="criarPerguntas()"class="botao1">Prosseguir pra criar perguntas</button>
    `
} */
//}

/* function validacaoPerguntas() {
    let inText2 = document.querySelector('.in-text2').value;
    if (inText2.length < 20) {
        alert("A pergunta deve ter no mínimo 20 caracteres! :(")
    }

    let inRespCorreta = document.querySelector('.in-resp-correta').value;
    console.log(inRespCorreta);
    if (inRespCorreta.length !== null){
        alert("Esse campo deve conter a resposta correta!! =D");
    }

    let inRespIncorreta = document.querySelector('.in-resp-incorreta').value;
    console.log(inRespIncorreta);
    if (inRespIncorreta.length !== null){
        alert("Esse campo deve conter a resposta incorreta!! =D");
    }
} */

function pegarQuizzesAPI() {
    let promessa = axios.get('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes');
    promessa.then(exibirQuizzes);
    promessa.catch((err) => {
        console.log('Erro' + err)
    })
}

function exibirQuizzes(resposta) {
    console.log(resposta.data)
    let mostrarQuizzes = document.querySelector('.quizzes');
    let quizzes = resposta.data;

    mostrarQuizzes.innerHTML = '';

    for (let i = 0; i < quizzes.length; i++) {
        mostrarQuizzes.innerHTML += `
            <div class = "exibir-quiz">
                <div class="" style="background-image: url(${quizzes[i].image});height: 200px;background-size:cover;background-repeat:no-repeat;">

                    ${quizzes[i].title}
                </div>
            </div>
        `
    }
}

let numPerguntas = 0;
let numNiveis = 0;

function enviarFormCriarQuizz() {
    numPerguntas = document.querySelector('.input-perguntas').value;

    criarPerguntas(numPerguntas);
}

function enviarFormCriarNiveis() {
    numNiveis = document.querySelector('.input-niveis').value;

    criarNiveis(numNiveis)
}

function enviarFormCriarPerguntas() {
    criarNiveis();
}

function enviarFormCriarNiveis() {
    quizPronto();
}