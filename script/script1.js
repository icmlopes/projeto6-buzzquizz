let conteudo = document.querySelector('.conteudo');

function telaInicial(){
    conteudo.innerHTML = `
    <div class="espacamento1"></div>
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
                <button>Criar Quizz</button>
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

        <div class="espacamento2"></div>

    </div >
    `
}

<!-- telaInicial(); -->

function criarQuiz(){
    conteudo.innerHTML = `
    <div class="espacamento1"></div>
    <div class="toda-pag">
        <h2>Comece pelo começo</h2>

        <div class="espacamento4"></div>  

        <div class="container-criar-quiz tamanho">
            <input type="text" placeholder="  Título do seu quizz" >
            <input type="url" placeholder="  URL da imagem do seu quizz" >
            <input type="number" placeholder="  Número de perguntas do quizz" >
            <input type="number" placeholder="  Quantidade de níveis do quizz" >
        </div>

        <div class="espacamento1"></div>

        <button class="botao1">Prosseguir pra criar perguntas</button>
    </div>
    `
}

function criarPerguntas(){
    conteudo.innerHTML = `
    <div class="espacamento1"></div>
    <div class="toda-pag">
        <h2>Crie suas perguntas</h2>

        <div class="espacamento4"></div>  

        <div class="container-criar-perguntas tamanho">
            <h3>Pergunta1</h3>
            <input type="text" placeholder="  Texto da pergunta">
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
        </div>

        <div class="espacamento2"></div>

        <div class="container-pergunta-fechada">
            <div class="container-pergunta-fechada-bloco">
                <h3>Pergunta 2</h3>
                <ion-icon name="create-outline" class="conf-ion"></ion-icon>
            </div>
        </div>

        <div class="espacamento2"></div>

        <div class="container-pergunta-fechada">
            <div class="container-pergunta-fechada-bloco">
                <h3>Pergunta 3</h3>
                <ion-icon name="create-outline" class="conf-ion"></ion-icon>
            </div>
        </div>

        <div class="espacamento2"></div>

        <button class="botao1">Prosseguir pra criar níveis</button>
    </div>
    `
}

function criarNiveis(){
    conteudo.innerHTML = `
    <div class="espacamento1"></div>
    <div class="toda-pag">
        <h2>Agora, decida os níveis</h2>

        <div class="espacamento4"></div>  

        <div class="container-criar-niveis tamanho">
            <h3>Nível 1</h3>
            <input type="text" placeholder="  Título do nível" >
            <input type="number" placeholder="  % de acerto mínima">
            <input type="url" placeholder="  URL da imagem do nível" >
            <input type="text" placeholder="  Descrição do nível" >
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

        <div class="espacamento2"></div>

        <button class="botao1">Finalizar Quizz</button>
    
    </div>
    `
}

function quizPronto(){
    conteudo.innerHTML = `
    <div class="espacamento1"></div>
    <div class="toda-pag">
        <h2>Seu quizz está pronto!</h2>

        <div class="espacamento2"></div>

        <div class="quiz-pronto-pessoal-img">
            <div class="quiz-pronto-pessoal">
                <p class="quiz-site-texto">O quão Potterhead é você?</p>
            </div>
        </div>

        <div class="espacamento2"></div>

        <button class="botao2">Acessar Quizz</button>

        <div class="espacamento4"></div>

        <div class="voltar-home">Voltar para home</div>

    </div>
    `
}

