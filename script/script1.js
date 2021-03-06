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
    pegarQuizzesAPI()
}

telaInicial();

function criarQuiz() {
    conteudo.innerHTML = `
    <div class="toda-pag">
        <h2>Comece pelo começo</h2>

        <form class="form" onsubmit="enviarFormCriarQuizz()">
            <div class="container-criar-quiz tamanho">
                <div>
                    <input type="text" minLength="5" maxLength="65" placeholder="  Título do seu quizz" required>
                </div>
                <div>
                    <input type="text" placeholder="  URL da imagem do seu quizz" required>
                </div> 
                <div>
                    <input type="number" class="input-perguntas" min="3" placeholder="  Número de perguntas do quizz" required>
                </div>
                <div>
                    <input type="number" class="input-niveis" min="2" placeholder="  Quantidade de níveis do quizz" required>
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
                    <ion-icon " name="create-outline" class="conf-ion"></ion-icon>
                </div>

                <div class="container-criar-perguntas tamanho">
                        <input type="text" minLength="20" placeholder="  Texto da pergunta" required>
                        <input type="color" placeholder="  Cor de fundo da pergunta" required>
                    </br>
                    <h3>Resposta correta</h3>
                        <input type="text" placeholder="  Resposta correta" required>
                        <input type="url" placeholder="  URL da imagem" required>
                    </br>
                    <h3>Respostas incorretas</h3>
                        <input type="text" placeholder="  Resposta incorreta ${i + 1}" required>
                        <input type="url" placeholder="  URL da imagem ${i + 1}" required>
                    </br>
                        <input type="text" placeholder="  Resposta incorreta ${i + 1}" required>
                        <input type="url" placeholder="  URL da imagem ${i + 1}" required>
                    </br>
                        <input type="text" placeholder="  Resposta incorreta ${i + 1}" required>
                        <input type="url" placeholder="  URL da imagem ${i + 1}" required>
                    </br>
                </div>
            </div>
            `
        } else {
            containerPerguntas.innerHTML += `
            <div class="novo-container-cp">

                <div class="p-fechada">
                        <h3>Pergunta ${i + 1}</h3>  
                        <ion-icon name="create-outline" class="conf-ion"></ion-icon>
                </div>
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
            </div> `

        }
    }
}

function criarNiveis(numNivel) {
    console.log(numNivel);    
    conteudo.innerHTML = `
    <div class="toda-pag">
        <h2>Agora, decida os níveis</h2>

        <form action="#" onsubmit="enviarFormCriarNiveis">
            <div class = "container-niveis"></div>

            <button class="botao1" type="submit"">Finalizar Quizz</button>
        </form>
    </div>
    `
    let containerNiveis = document.querySelector('.container-niveis');

    for (let i = 0; i < numNivel; i++){
        if (i > 0) {
            containerNiveis.innerHTML += `
            <div class="container-criar-niveis tamanho">
                <h3>Nível ${i}</h3>
                <input type="text" minLength="10" placeholder="  Título do nível" required>
                <input type="number" placeholder="  % de acerto mínima" required>
                <input type="url" placeholder="  URL da imagem do nível" required>
                <input type="text" minLength="30" placeholder="  Descrição do nível" required>
            </div>

            <div class="container-pergunta-fechada">
                <div class="container-pergunta-fechada-bloco">
                    <h3>Nível ${i + 1}</h3>
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
                <div class="estilo-quiz" style="background-image: url(${quizzes[i].image})">

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
    numNiveis = document.querySelector('.input-niveis').value;

    criarPerguntas(numPerguntas);
}

function enviarFormCriarNiveis() {
    

    quizPronto();
}

function enviarFormCriarPerguntas() {
    console.log(numNiveis)
    criarNiveis(numNiveis);
}

function esconder(){
    document.querySelector(".p-fechada").classList.toggle("esconder");
}