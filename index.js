const perguntas = [
    {
      pergunta: "Quem é o diretor da Escola de Magia e Bruxaria de Hogwarts?",
      respostas: [
        "Severus Snape",
        "Alvo Dumbledore",
        "Minerva McGonagall",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do melhor amigo de Harry Potter?",
      respostas: [
        "Ron Weasley",
        "Neville Longbottom",
        "Draco Malfoy",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a casa de Hogwarts que o Chapéu Seletor seleciona Harry Potter?",
      respostas: [
        "Grifinória",
        "Lufa-Lufa",
        "Corvinal",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o animal de estimação de Hermione Granger?",
      respostas: [
        "Coruja",
        "Gato",
        "Sapo",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o feitiço usado para iluminar a ponta da varinha?",
      respostas: [
        "Lumos",
        "Accio",
        "Expelliarmus",
      ],
      correta: 0
    },
    {
      pergunta: "Quem matou Sirius Black?",
      respostas: [
        "Lord Voldemort",
        "Bellatrix Lestrange",
        "Severus Snape",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um Patrono?",
      respostas: [
        "Uma maldição poderosa",
        "Uma criatura mágica que guarda Hogwarts",
        "Uma forma de magia defensiva que invoca uma manifestação de energia positiva",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do elfo doméstico que Harry liberta da família Malfoy?",
      respostas: [
        "Dobby",
        "Winky",
        "Kreacher",
      ],
      correta: 0
    },
    {
      pergunta: "Quem foi o professor de Defesa Contra as Artes das Trevas no primeiro ano de Harry em Hogwarts?",
      respostas: [
        "Remus Lupin",
        "Quirinus Quirrell",
        "Gilderoy Lockhart",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a varinha de Harry Potter feita de?",
      respostas: [
        "Teixo, com uma pena de fênix",
        "Teixo, com uma pena de grifo",
        "Azevinho, com uma pena de fênix",
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template') //procura no html quiz e template
  
  const corretas = new Set() //nao repete informaçao
  const totalPerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span') //procura o span em acertos
  mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas //define mostrarTotal
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true) //clona conteúdo de template
    quizItem.querySelector('h3').textContent = item.pergunta //coloca a pergunta no título
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true) //clona conteúdo de dt (span)
      dt.querySelector('span').textContent = resposta //coloca a resposta no span
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) //define o name do input para selecionar uma resposta a cada pergunta
      dt.querySelector('input').value = item.respostas.indexOf(resposta) //define o value de cada opção de resposta
      dt.querySelector('input').onchange = (event) => { //arrow function para mudança
        const estaCorreta = event.target.value == item.correta //obs.: === compara tipos
        corretas.delete(item) //deleta o item em caso de mudança
        if(estaCorreta) {
          corretas.add(item) //adiciona se estaCorreta
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas //define mostrarTotal
      }
  
      quizItem.querySelector('dl').appendChild(dt) //adiciona o dt no quizItem
    }
  
    quizItem.querySelector('dl dt').remove() //remove o dt incial
    quiz.appendChild(quizItem) //adiciona o quizItem na div quiz
  }