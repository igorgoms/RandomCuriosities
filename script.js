const donutElement = document.getElementById('donut');
const messageElement = document.getElementById('message');
const jokeButton = document.getElementById('jokeButton');
const languageButton = document.getElementById('languageButton');
const titleElement = document.getElementById('title');
const subtitleElement = document.getElementById('subtitle');
const footerTextElement = document.getElementById('footer-text');

let currentLanguage = 'pt';

const curiosities = {
    pt: [
        // Tecnologia
        "Você sabia que a Apple foi fundada em uma garagem? Steve Jobs e Steve Wozniak começaram a montar computadores no final dos anos 70.",
        "O primeiro e-mail da história foi enviado em 1971 por Ray Tomlinson. Ele escolheu o símbolo '@' para separar o nome do usuário do servidor.",
        "O algoritmo de compressão MP3 foi desenvolvido em 1987, e revolucionou a maneira como armazenamos e transmitimos música.",
        "O primeiro domínio registrado na internet foi 'symbolics.com' em 1985, e ainda está ativo até hoje.",
        "O Bluetooth foi nomeado em homenagem ao rei viking Harald 'Bluetooth' Gormsson, famoso por unir a Dinamarca e a Noruega no século 10.",
        "Em 2020, havia mais de 40 bilhões de dispositivos conectados à internet, representando quase 5 dispositivos por pessoa no mundo.",
        
        // Guerras
        "A Primeira Guerra Mundial foi a primeira grande guerra a usar aviões, tanques e armas químicas em combate.",
        "A criptografia da máquina Enigma nazista foi decifrada por Alan Turing e sua equipe, ajudando os Aliados a encurtar a Segunda Guerra Mundial.",
        "Durante a Guerra Civil Americana, balões de ar quente foram usados como ferramentas de reconhecimento para observar o campo de batalha.",
        "Na Guerra Fria, tanto EUA quanto URSS desenvolveram armas nucleares tão poderosas que poderiam destruir a Terra várias vezes.",
        "Os samurais no Japão medieval praticavam o 'bushido', o código de honra dos guerreiros, que enfatizava lealdade e disciplina.",
        
        // Mistérios
        "O mistério dos Moais da Ilha de Páscoa permanece até hoje. Como essas estátuas gigantes foram esculpidas e transportadas por grandes distâncias?",
        "O caso do 'Voo MH370' da Malaysia Airlines, desaparecido em 2014, é um dos maiores mistérios da aviação moderna.",
        "O Triângulo das Bermudas já causou o desaparecimento de dezenas de navios e aviões, sem explicação clara.",
        "A cidade inca de Machu Picchu, nas montanhas do Peru, foi descoberta em 1911, mas o motivo de sua construção ainda é desconhecido.",
        "O manuscrito Voynich, datado do século 15, continua indecifrável, escrito em uma língua ou código que ninguém consegue entender.",
        
        // Ciência
        "As formigas são capazes de levantar até 50 vezes o seu próprio peso corporal. Imagine se um humano tivesse essa força!",
        "A água que você bebe pode ter bilhões de anos, possivelmente mais antiga que o próprio sistema solar.",
        "O ferro no nosso sangue e o cálcio em nossos ossos foram formados no coração de estrelas que explodiram há bilhões de anos.",
        "O DNA humano tem cerca de 3 bilhões de pares de bases, mas a diferença genética entre todos os humanos é inferior a 0,1%.",
        "A velocidade da luz no vácuo é 299.792.458 metros por segundo, mas a luz pode ser desacelerada quando passa por outros materiais como vidro.",
        
        // Exploração espacial
        "A Lua está se afastando lentamente da Terra, a uma taxa de cerca de 3,8 centímetros por ano.",
        "Os anéis de Saturno são compostos por bilhões de pedaços de gelo e rocha, alguns pequenos como grãos de areia, outros do tamanho de montanhas.",
        "Júpiter tem uma mancha vermelha gigante, que é uma tempestade tão grande que caberiam duas Terras dentro dela.",
        "A Voyager 1, lançada em 1977, é o objeto feito pelo homem mais distante da Terra, atualmente viajando além do nosso sistema solar.",
        "A Estação Espacial Internacional viaja ao redor da Terra a uma velocidade de 28.000 km/h, completando uma órbita a cada 90 minutos.",
        
        // História e civilizações antigas
        "Cleópatra viveu mais perto da construção dos primeiros McDonald's do que da construção das pirâmides do Egito.",
        "Os romanos antigos inventaram o concreto, e muitos de seus aquedutos e construções de concreto ainda estão de pé hoje.",
        "A Grande Muralha da China tem mais de 21.000 quilômetros de extensão, e foi construída ao longo de várias dinastias para defender o império.",
        "Os antigos maias acreditavam que o mundo passava por ciclos de criação e destruição, e seu calendário previa o fim de um ciclo em 2012.",
        "A biblioteca de Alexandria, no Egito antigo, era o maior centro de conhecimento do mundo, contendo centenas de milhares de pergaminhos.",
        
        // Medicina e corpo humano
        "Seu corpo contém cerca de 37,2 trilhões de células, e cada uma delas realiza milhares de reações químicas por segundo.",
        "A pele é o maior órgão do corpo humano, cobrindo cerca de 2 metros quadrados em um adulto médio.",
        "Os ossos humanos são cinco vezes mais fortes que o aço, mas também incrivelmente leves e flexíveis.",
        "O coração humano bate mais de 100.000 vezes por dia, bombeando cerca de 7.500 litros de sangue através do corpo.",
        "Cerca de 60% do corpo humano é composto por água, e o cérebro contém aproximadamente 75% de água.",
        
        // Tecnologia e internet
        "Em 1991, havia apenas cerca de 1 milhão de computadores conectados à internet; hoje, esse número é de mais de 5 bilhões.",
        "O primeiro website da história, criado por Tim Berners-Lee, ainda está ativo e pode ser acessado: 'info.cern.ch'.",
        "Os algoritmos de IA atuais são capazes de aprender tarefas extremamente complexas, como jogar xadrez melhor do que qualquer humano.",
        "O Twitter foi criado em 2006, e a primeira mensagem postada foi 'just setting up my twttr', por Jack Dorsey, um dos fundadores.",
        "Os drones começaram como ferramentas militares, mas hoje são usados em muitas áreas, como agricultura, cinema, e até entregas de pacotes.",
        
        // Curiosidades diversas
        "Existem mais estrelas no universo observável do que grãos de areia em todas as praias da Terra.",
        "A Terra viaja ao redor do Sol a uma velocidade de 107.000 km/h, mas nós não sentimos esse movimento por causa da gravidade.",
        "Existem mais formas possíveis de embaralhar um baralho de cartas do que átomos na Terra.",
        "Algumas árvores podem viver milhares de anos. A mais antiga conhecida, chamada Matusalém, tem cerca de 4.800 anos.",
        "O som não pode viajar no espaço, porque não há ar para transportar as ondas sonoras."
    ],
    en: [
        // Technology
        "Did you know that Apple was founded in a garage? Steve Jobs and Steve Wozniak started assembling computers in the late 1970s.",
        "The first email in history was sent in 1971 by Ray Tomlinson. He chose the '@' symbol to separate the user's name from the server.",
        "The MP3 compression algorithm was developed in 1987 and revolutionized the way we store and transmit music.",
        "The first domain registered on the internet was 'symbolics.com' in 1985, and it is still active today.",
        "Bluetooth was named after Viking King Harald 'Bluetooth' Gormsson, famous for uniting Denmark and Norway in the 10th century.",
        "In 2020, there were over 40 billion devices connected to the internet, averaging nearly 5 devices per person worldwide.",
        
        // Wars
        "World War I was the first major war to use airplanes, tanks, and chemical weapons in combat.",
        "The Nazi Enigma machine's encryption was cracked by Alan Turing and his team, helping the Allies shorten World War II.",
        "During the American Civil War, hot air balloons were used as reconnaissance tools to observe the battlefield.",
        "During the Cold War, both the US and the USSR developed nuclear weapons powerful enough to destroy the Earth multiple times.",
        "Samurai in medieval Japan practiced 'bushido', the code of honor for warriors, emphasizing loyalty and discipline.",
        
        // Mysteries
        "The mystery of the Moai statues on Easter Island remains today. How were these giant statues carved and transported over long distances?",
        "The case of Malaysia Airlines Flight MH370, missing since 2014, is one of the greatest mysteries of modern aviation.",
        "The Bermuda Triangle has caused the disappearance of dozens of ships and planes without clear explanation.",
        "The Inca city of Machu Picchu in the mountains of Peru was discovered in 1911, but the reason for its construction is still unknown.",
        "The Voynich manuscript, dated to the 15th century, remains undecipherable, written in a language or code that no one can understand.",
        
        // Science
        "Ants can lift up to 50 times their own body weight. Imagine if a human had that strength!",
        "The water you drink may be billions of years old, possibly older than the solar system itself.",
        "The iron in our blood and calcium in our bones were formed in the hearts of stars that exploded billions of years ago.",
        "Human DNA has about 3 billion base pairs, but the genetic difference among all humans is less than 0.1%.",
        "The speed of light in a vacuum is 299,792,458 meters per second, but light can be slowed down when passing through materials like glass.",
        
        // Space exploration
        "The Moon is slowly drifting away from Earth at a rate of about 3.8 centimeters per year.",
        "Saturn's rings are made up of billions of pieces of ice and rock, some as small as grains of sand, others the size of mountains.",
        "Jupiter has a giant red spot, a storm so large that two Earths could fit inside it.",
        "Voyager 1, launched in 1977, is the farthest human-made object from Earth, currently traveling beyond our solar system.",
        "The International Space Station travels around Earth at a speed of 28,000 km/h, completing an orbit every 90 minutes.",
        
        // History and ancient civilizations
        "Cleopatra lived closer to the construction of the first McDonald's than to the building of the pyramids in Egypt.",
        "Ancient Romans invented concrete, and many of their aqueducts and concrete buildings still stand today.",
        "The Great Wall of China stretches over 21,000 kilometers and was built over several dynasties to defend the empire.",
        "The ancient Mayans believed the world went through cycles of creation and destruction, and their calendar predicted the end of a cycle in 2012.",
        "The Library of Alexandria in ancient Egypt was the largest center of knowledge in the world, containing hundreds of thousands of scrolls.",
        
        // Medicine and human body
        "Your body contains about 37.2 trillion cells, and each of them performs thousands of chemical reactions per second.",
        "The skin is the largest organ in the human body, covering about 2 square meters in an average adult.",
        "Human bones are five times stronger than steel but are also incredibly lightweight and flexible.",
        "The human heart beats over 100,000 times a day, pumping about 7,500 liters of blood through the body.",
        "About 60% of the human body is made up of water, and the brain is approximately 75% water.",
        
        // Technology and the internet
        "In 1991, there were only about 1 million computers connected to the internet; today, that number is over 5 billion.",
        "The first website in history, created by Tim Berners-Lee, is still active and can be accessed at: 'info.cern.ch'.",
        "Current AI algorithms are capable of learning extremely complex tasks, such as playing chess better than any human.",
        "Twitter was created in 2006, and the first message posted was 'just setting up my twttr' by Jack Dorsey, one of the founders.",
        "Drones started as military tools but are now used in many areas, including agriculture, filmmaking, and even package deliveries.",
        
        // Miscellaneous curiosities
        "There are more stars in the observable universe than grains of sand on all the beaches on Earth.",
        "Earth travels around the Sun at a speed of 107,000 km/h, but we don't feel that movement due to gravity.",
        "There are more possible ways to shuffle a deck of cards than there are atoms on Earth.",
        "Some trees can live for thousands of years. The oldest known, called Methuselah, is about 4,800 years old.",
        "Sound cannot travel in space because there is no air to carry sound waves."
    ]
};


let A = 0, B = 0;
const render = () => {
    const b = [];
    const z = [];
    A += 0.07;
    B += 0.03;
    const cA = Math.cos(A), sA = Math.sin(A);
    const cB = Math.cos(B), sB = Math.sin(B);
    for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 === 79 ? "\n" : " ";
        z[k] = 0;
    }
    for (let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j), st = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.02) {
            const sp = Math.sin(i), cp = Math.cos(i);
            const h = ct + 2;
            const D = 1 / (sp * h * sA + st * cA + 5);
            const t = sp * h * cA - st * sA;
            const x = Math.floor(40 + 30 * D * (cp * h * cB - t * sB));
            const y = Math.floor(12 + 15 * D * (cp * h * sB + t * cB));
            const o = x + 80 * y;
            const N = Math.floor(8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));
            if (y < 22 && y >= 0 && x >= 0 && x < 80 && D > z[o]) {
                z[o] = D;
                b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
            }
        }
    }
    donutElement.innerHTML = b.join('');
};
setInterval(render, 50);

jokeButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * curiosities[currentLanguage].length);
    messageElement.textContent = curiosities[currentLanguage][randomIndex];
    messageElement.style.display = 'block';
});

languageButton.addEventListener('click', () => {
    if (currentLanguage === 'pt') {
        currentLanguage = 'en';
        jokeButton.textContent = 'Click to hear a random curiosity!';
        languageButton.textContent = 'Switch to Portuguese';
        titleElement.textContent = 'Random Curiosities';
        subtitleElement.textContent = 'A surprising fact to brighten your day!';
        footerTextElement.textContent = 'Created by Igor Gomes - All rights reserved - 2024';
    } else {
        currentLanguage = 'pt';
        jokeButton.textContent = 'Clique para saber uma curiosidade aleatória!';
        languageButton.textContent = 'Mudar para Inglês';
        titleElement.textContent = 'Curiosidades Aleatórias';
        subtitleElement.textContent = 'Uma curiosidade surpreendente para animar seu dia!';
        footerTextElement.textContent = 'Criado por Igor Gomes - Todos os direitos reservados - 2024';
    }
});
