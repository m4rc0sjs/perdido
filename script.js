// Estrutura do jogo
const story = [
    {
        text: "Você se encontra em uma floresta densa, cercado por árvores altas e um silêncio perturbador. Seus amigos, que estavam com você, desapareceram. Você se sente perdido e sozinho.",
        choices: [
            { text: "Chamar por seus amigos", nextStory: 1 },
            { text: "Explorar a floresta", nextStory: 2 }
        ]
    },
    {
        text: "Seu chamado ecoa, mas não há resposta. Você se lembra de como seus amigos se afastaram, rindo de você enquanto se aventurava. O sentimento de traição aperta seu coração.",
        choices: [
            { text: "Decidir seguir em frente", nextStory: 3 },
            { text: "Sentar e esperar por ajuda", nextStory: 4 }
        ]
    },
    {
        text: "Enquanto explora, você encontra uma clareira iluminada. No centro, há um velho baú. O que você faz?",
        choices: [
            { text: "Abrir o baú", nextStory: 5 },
            { text: "Ignorar e continuar explorando", nextStory: 6 }
        ]
    },
    {
        text: "Você decide seguir em frente, determinado a encontrar uma saída. As lembranças da traição o motivam a provar que pode sobreviver sozinho.",
        choices: [
            { text: "Buscar por comida e abrigo", nextStory: 7 },
            { text: "Continuar a explorar a floresta", nextStory: 6 }
        ]
    },
    {
        text: "Você se senta e espera, mas o desespero começa a tomar conta. Lembranças de seus amigos e as promessas feitas passam pela sua mente.",
        choices: [
            { text: "Levantar e agir", nextStory: 3 },
            { text: "Permitir-se chorar", nextStory: 8 }
        ]
    },
    {
        text: "Ao abrir o baú, você encontra um mapa antigo e um diário. O diário fala de superação e resiliência, escrito por alguém que também foi traído. Isso lhe dá esperança.",
        choices: [
            { text: "Usar o mapa para sair da floresta", nextStory: 9 },
            { text: "Ler mais do diário", nextStory: 10 }
        ]
    },
    {
        text: "Você ignora o baú e continua a explorar. Encontra armadilhas e perigos, mas também percebe que a floresta tem beleza e vida.",
        choices: [
            { text: "Caminhar em direção a um som de água", nextStory: 11 },
            { text: "Voltar ao caminho inicial", nextStory: 4 }
        ]
    },
    {
        text: "Você busca por comida e abrigo. Encontra frutos e um pequeno abrigo natural. Cada passo que você dá é uma prova de que pode superar essa situação.",
        choices: [
            { text: "Ficar e descansar", nextStory: 12 },
            { text: "Continuar a busca por uma saída", nextStory: 9 }
        ]
    },
    {
        text: "Você se permite chorar, liberando a dor da traição. Mas enquanto faz isso, você percebe que a tristeza não vai definir sua jornada.",
        choices: [
            { text: "Levantar e decidir seguir em frente", nextStory: 3 },
            { text: "Desistir e aceitar o destino", nextStory: 13 }
        ]
    },
    {
        text: "O mapa revela uma saída da floresta, mas há um aviso: 'Os que buscam se conhecer devem enfrentar seus medos.' Você sente uma nova determinação.",
        choices: [
            { text: "Seguir o mapa", nextStory: 14 },
            { text: "Ignorar e explorar mais", nextStory: 6 }
        ]
    },
    {
        text: "Você lê mais do diário e encontra relatos de alguém que superou não apenas a traição, mas toda uma vida de desafios. Isso inspira você a mudar sua perspectiva.",
        choices: [
            { text: "Decidir lutar pela sua vida", nextStory: 15 },
            { text: "Deixar o diário e seguir em frente", nextStory: 6 }
        ]
    },
    {
        text: "Seguindo o som da água, você encontra um rio cristalino. Isso te dá esperança e força para continuar.",
        choices: [
            { text: "Seguir o rio em busca de uma saída", nextStory: 14 },
            { text: "Construir uma balsa e navegar", nextStory: 16 }
        ]
    },
    {
        text: "Você descansa, recuperando suas forças. Sabe que, independentemente da traição, você pode superar essa fase.",
        choices: [
            { text: "Levantar e seguir", nextStory: 3 },
            { text: "Ficar mais um pouco", nextStory: 17 }
        ]
    },
    {
        text: "A traição pode ter te machucado, mas você não é definido por isso. Você se levanta, determinado a encontrar sua saída e a se reencontrar.",
        choices: [
            { text: "Seguir o mapa", nextStory: 14 },
            { text: "Procurar a saída por conta própria", nextStory: 18 }
        ]
    },
    {
        text: "Você decide que a traição não vai te parar. Sua determinação o leva a enfrentar a floresta e encontrar a saída. Você é mais forte do que imagina.",
        choices: []
    },
    {
        text: "Após muitos desafios, você finalmente encontra o caminho de volta para a civilização. A experiência o transformou e agora você sabe o que realmente importa.",
        choices: []
    }
];

// Função para atualizar a história e as escolhas
function updateStory(index) {
    const storyDiv = document.getElementById('story');
    const choicesDiv = document.getElementById('choices');

    storyDiv.innerHTML = story[index].text;
    choicesDiv.innerHTML = '';

    story[index].choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => updateStory(choice.nextStory);
        choicesDiv.appendChild(button);
    });
}

// Iniciar o jogo
updateStory(0);
