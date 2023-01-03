const categories = {
    movies: [{name: "The Shawshank Redemption", hint: "Morgan Freeman movie"}, {name: "The Godfather", hint: "Italian mafia"}, {name:"The Dark Knight", hint: "Christian Bale plays a bat"}, {name: "The Lord of the Rings", hint: "Based on Tolkien"}, {name: "Pulp Fiction", hint: "A Tarantino movie"}, {name:"Star Wars", hint:"Laser sword"}, {name:"Inception", hint:"Dreams"}, {name:"Forrest Gump", hint:"Life is like a box of chocolates"}, {name: "Fight Club", hint:"there are only two rules"}, {name:"The Matrix", hint:"Human battery"}, {name: "One Flew Over the Cuckoo's Nest", hint: "1963 Jack Nicholson movie"}, {name: "The Silence of the Lambs", hint: "FBI and canibal killers"}, {name: "Interstellar", hint:"Wormholes and Blackholes"}, {name: "Saving Private Ryan", hint: "WW2 movie in Normandy"}, {name: "The Green Mile", hint:"Steven King novel"}, {name:"Back to the Future", hint:"Goint on adventures in a Delorean"}, {name:"Spirited Away", hint:"No-face"}, {name:"The Lion King", hint:"Uncle murders father in front of his own son"}, {name:"The Usual Suspects", hint:"Keyser Soze"}, {name:"Whiplash", hint:"drums"}],
    shows: [{name: "Game of Thrones", hint: "Good until season 5"}, {name: "House of the Dragon", hint: "The prequel with even more incest"}, {name: "House of Cards", hint: "Kevin Spacey is president"}, {name: "The Simpsons", hint: "The longest running show"}, {name: "South Park", hint: "They kill Kenny"}, {name: "Friends", hint: "More than acquaintances"}, {name: "How I Met Your Mother", hint: "HIMYM"}, {name: "Daredevil", hint: "Blind batman"}, {name: "Stranger Things", hint: "Kids play DnD for real"}, {name: "The Crown", hint: "The queen"},{name: "Game of Thrones",hint: "Fantasy drama about noble families fighting for the Iron Throne"},{name: "The Sopranos",hint: "Crime drama about a New Jersey mobster seeking therapy"},{name: "The Simpsons",hint: "Animated sitcom about a family living in Springfield"},{name: "The Walking Dead",hint: "Post-apocalyptic horror drama about a group of survivors fighting zombies"},{name: "The Big Bang Theory",hint: "Sitcom about a group of nerdy friends and their neighbor"},{name: "Breaking Bad",hint: "Drama about a high school chemistry teacher who turns to cooking and selling meth after being diagnosed with cancer"},{name: "Friends",hint: "Sitcom about a group of friends living in New York City"},{name: "Seinfeld",hint: "Sitcom about a stand-up comedian and his experiences in New York City"},{name: "The X-Files",hint: "Sci-fi drama about two FBI agents investigating paranormal cases"},{name: "The Crown",hint: "Drama about the reign of Queen Elizabeth II"},{name: "The Office",hint: "Mockumentary sitcom about the daily lives of office workers"},
      {
        name: "The West Wing",
        hint: "Political drama about the inner workings of the White House"
      },
      {
        name: "Law and Order",
        hint: "Crime drama about the investigation and prosecution of crimes in New York City"
      },
      {
        name: "The Marvelous Mrs. Maisel",
        hint: "Comedy-drama about a housewife who discovers she has a talent for stand-up comedy in the 1950s"
      },
      {
        name: "Stranger Things",
        hint: "Sci-fi horror drama about a group of friends in the 1980s who must save their friend from a parallel dimension"
      },
      {
        name: "The Handmaid's Tale",
        hint: "Dystopian drama about a woman who is a handmaid, a reproductive slave, in a patriarchal society"
      },
      {
        name: "The Golden Girls",
        hint: "Sitcom about four older women sharing a home in Miami"
      },
      {
        name: "The Good Place",
        hint: "Fantasy comedy about a woman who wakes up in the afterlife and tries to become a better person"
      },
      {
        name: "Modern Family",
        hint: "Mockumentary sitcom about a diverse family and their daily lives"
      },
      {
        name: "The Queen's Gambit",
        hint: "Miniseries about a young girl who becomes a world-class chess player while struggling with addiction and personal demons"
      },
      {
        name: "Schitt's Creek",
        hint: "Comedy about a wealthy family who loses everything and is forced to live in a small town they once bought as a joke"
      },
      {
        name: "MASH",
        hint: "Comedy-drama about a team of doctors and nurses stationed at a mobile army surgical hospital during the Korean War"
      },
      {
        name: "The Mandalorian",
        hint: "Sci-fi western about a bounty hunter who must protect a powerful child from various factions in the Star Wars universe"
      },
      {
        name: "The Witcher",
        hint: "Fantasy drama about a solitary monster hunter who becomes embroiled in political intrigue while searching for a child with a special destiny"
      },
      {
        name: "The Blacklist",
        hint: "Crime drama about a former government agent who turns himself in and offers to help the FBI track down and apprehend notorious criminals on his list"
      },
      {
        name: "The Office",
        hint: "Mockumentary sitcom about the daily lives of office workers in a small paper company"
      },
      {
        name: "Doctor Who",
        hint: "Sci-fi drama about a time-traveling alien who protects the universe from various threats"
      },
      {
        name: "The Americans",
        hint: "Period drama about two KGB spies posing as a married couple in the United States during the Cold War"
      },
      {
        name: "House of Cards",
        hint: "Political drama about a ruthless politician who will stop at nothing to become President of the United States"
      },
      {
        name: "The Great British Baking Show",
        hint: "Reality competition about amateur bakers competing to be crowned the best baker"
      },
      {
        name: "The Last Dance",
        hint: "Documentary miniseries about the 1997-1998 Chicago Bulls season and the team's quest for a sixth NBA championship"
      },
      {
        name: "MasterChef",
        hint: "Reality competition about amateur chefs competing to be crowned the next MasterChef"
      },
      {
        name: "The Voice",
        hint: "Reality singing competition where famous musicians coach and mentor aspiring singers"
      },
      {
        name: "The Undoing",
        hint: "Mystery drama about a successful therapist whose life unravels when her husband goes missing and she becomes a suspect in his murder"
      }],
    games: [{name: "League of Legends", hint: "Spreading toxicity since 2009"}, {name: "Animal Crossing New Horizons", hint: "Going in debt to pay off a raccoon"}, {name: "Mortal Kombat", hint: "Finish him"}, {name: "Valorant", hint: "Giving riot even more money"}, {name: "Counter Strike Global Offensive", hint: "Lobby filled with russians"}, {name: "Dark Souls", hint: "This is a hard one"}, {name: "Elden Ring", hint: "Sequel to the hardest game"}, {name: "Batman: Arkham City", hint: "Bat and a man game"}, {name: "Tomb Raider", hint: "Lara does some raids"},
    {
        name: "Minecraft",
        hint: "Sandbox building game where players can create and explore virtual worlds made of blocks"
      },
      {
        name: "Super Mario Bros.",
        hint: "Classic platformer game featuring a plumber named Mario who must save Princess Peach from Bowser"
      },
      {
        name: "Fortnite",
        hint: "Online multiplayer game featuring a battle royale mode and creative building elements"
      },
      {
        name: "Grand Theft Auto V",
        hint: "Open-world action-adventure game set in a fictional city where players can engage in various criminal activities"
      },
      {
        name: "The Legend of Zelda",
        hint: "Action-adventure game series featuring a hero named Link who must rescue Princess Zelda from the evil Ganon"
      },
      {
        name: "Pac-Man",
        hint: "Classic arcade game where players control a yellow dot and must eat all the dots in a maze while avoiding ghosts"
      },
      {
        name: "Tetris",
        hint: "Puzzle game where players must rotate and place falling blocks to create and clear lines"
      },
      {
        name: "Call of Duty",
        hint: "First-person shooter game series featuring various military conflicts and storylines"
      },
      {
        name: "Overwatch",
        hint: "Team-based first-person shooter game set in a futuristic world where players control unique heroes with special abilities"
      },
      {
        name: "Pokemon",
        hint: "RPG game series where players catch and train creatures called Pokemon to battle each other"
      },
      {
        name: "Donkey Kong",
        hint: "Classic arcade game featuring a gorilla named Donkey Kong who must be stopped by the player character, Mario"
      },
      {
        name: "Asteroids",
        hint: "Classic arcade game where players control a spaceship and must shoot and destroy asteroids and enemy ships"
      },
      {
        name: "Halo",
        hint: "First-person shooter game series set in a futuristic world where players control a super soldier named Master Chief"
      },
      {
        name: "The Last of Us",
        hint: "Survival horror game set in a post-apocalyptic world where players must navigate dangers and make tough moral choices"
      },
      {
        name: "Final Fantasy",
        hint: "RPG game series featuring epic fantasy storylines and turn-based combat"
      },
      {
        name: "World of Warcraft",
        hint: "Massively multiplayer online role-playing game set in a fantasy world where players can choose their own paths and adventures"
      }],
    cities: [{name: "New York", hint: "Big Apple"}, {name: "Skopje", hint: "Capital of Macedonia"}, {name: "Paris", hint: "City of love"}, {name: "Berlin", hint: "A city united in 1989 after the cold war"}, {name: "Los Angeles", hint: "Hollywood"}, {name: "Bitola", hint: "the Manaki brothers"}, {name: "Ohrid", hint: "Shares a name with one of the oldest lakes"}, {name: "Tokyo", hint: "Cat cafes"}, {name: "Seoul", hint: "K-pop"}, {name: "London", hint: "Constant rain"}, {name: "Belgrade", hint: "Capital of Serbia"}, {name: "Sarajevo", hint: "Capital of Bosnia"}, {name: "Frankfurt", hint: "On the river Main"}, {name: "Bern", hint: "Capital city of Switzerland"}, {name: "Zurich", hint: "Global center for banking"}, {name: "Sidney", hint: "Down under"}, {name: "Las Vegas", hint: "Casino central"}, {name: "San Diego", hint: "Like and near LA but better"}, {name: "Anchorage", hint: "Waaay up north"}, {name: "Istanbul", hint: "Bridge between Europe and Asia"}, {name: "Osaka", hint: "Dotonbori street"}, {name: "Kumanovo", hint: "Sashko Kocev"}, {name: "Huston", hint: "____ we have a problem"}],
    music: [{
        name: "The Beatles",
        hint: "British rock band formed in Liverpool in the 1960s"
      },
      {
        name: "Michael Jackson",
        hint: "American singer, songwriter, and dancer known as the King of Pop"
      },
      {
        name: "Elvis Presley",
        hint: "American singer and actor known as the King of Rock and Roll"
      },
      {
        name: "Madonna",
        hint: "American singer, songwriter, and actress known for her provocative and controversial image"
      },
      {
        name: "Queen",
        hint: "British rock band known for their over-the-top stage performances and vocal harmonies"
      },
      {
        name: "Led Zeppelin",
        hint: "British rock band known for their heavy, guitar-driven sound and epic rock anthems"
      },
      {
        name: "The Rolling Stones",
        hint: "British rock band known for their rebellious image and bluesy rock and roll sound"
      },
      {
        name: "Bob Marley",
        hint: "Jamaican singer and songwriter who popularized reggae music around the world"
      },
      {
        name: "Nirvana",
        hint: "American rock band that helped to popularize the grunge movement in the 1990s"
      },
      {
        name: "Pink Floyd",
        hint: "British rock band known for their experimental sound and elaborate stage shows"
      },
      {
        name: "David Bowie",
        hint: "British singer and songwriter known for his eclectic and innovative music and his flamboyant stage presence"
      },
      {
        name: "U2",
        hint: "Irish rock band known for their socially conscious lyrics and anthemic sound"
      },
      {
        name: "The Eagles",
        hint: "American rock band known for their country-influenced rock sound and harmonies"
      },
      {
        name: "The Bee Gees",
        hint: "British-Australian pop group known for their disco hits in the 1970s"
      },
      {
        name: "Prince",
        hint: "American singer, songwriter, and multi-instrumentalist known for his eclectic and innovative music and his flamboyant stage presence"
      },
      {
        name: "AC/DC",
        hint: "Australian rock band known for their bluesy hard rock sound and high-energy live performances"
      },
      {
        name: "Michael Jackson",
        hint: "American singer, songwriter, and dancer known as the King of Pop"
      },
      {
        name: "Elton John",
        hint: "British singer and songwriter known for his flamboyant stage presence and catchy piano-based pop songs"
      },
      {
        name: "Marvin Gaye",
        hint: "American soul singer known for his smooth, soulful voice and socially conscious lyrics"
      },
      {
        name: "The Who",
        hint: "British rock band known for their energetic live performances and innovative rock anthems"
      }]
}

let secretWord = {};
let missed = 0;
let field = "";

function getRandomItemFromCategory(category) {
    let index = Math.floor(Math.random()*categories[category].length);
    return categories[category][index];
}

function startGame(category, catDisplay){
    secretWord = getRandomItemFromCategory(category);
    missed = 0;
    const wordArea = document.querySelector(".word-area");
    wordArea.innerHTML = "";
    const catTitle = document.createElement("h3");
    wordArea.appendChild(catTitle);
    catTitle.className = "category";
    catTitle.innerText = `The chosen category is ${catDisplay}`;
    field = secretWord.name.split(" ");
    for(let i=0; i<field.length;i++){
        let word = field[i].split("");
        for(let j=0; j<word.length;j++){
            if(word[j] === "'" || word[j] === "." || word[j] === ":" || word[j] === "/" || word[j] === "-"){
                continue;
            }
            word[j] = "_";
        }
        field[i] = word.join("");
        // field[i] = field[i].replace(/\D/g, '_');
    }
    field = field.join(" ");
    const wordField = document.createElement("h2");
    wordField.className = "word-field";
    wordField.innerText = `${field}`;
    wordArea.appendChild(wordField);
}

function checkForLetter(letter){
    document.querySelector(`#btn-${letter.toLowerCase()}`).disabled = true;
    const testSecret = secretWord.name.split("");
    const newField = field.split("");
    let letterFound = false;
    for(let index in testSecret){
        if(letter === testSecret[index].toUpperCase()){
            newField[index] = letter;
            letterFound = true;
        }
    }
    if(!letterFound){
        missedLetter();
        return;
    }
    field = newField.join("")
    document.querySelector(".word-field").innerText = newField.join("");
    if(field === secretWord.name.toUpperCase()){
        document.querySelector(".category").innerText = "Congratulations you have won!";
        secretWord = {};
    }
}


function missedLetter(){
    if(missed === 10){
        document.querySelector(".main-container").style.backgroundColor = "var(--color-danger)";
        for(let item of document.querySelectorAll(".btn")){
            item.style.backgroundColor = "var(--color-danger)";
        }
        const category = document.querySelector(".category");
        category.innerText = `You've lost the term was:`;
        document.querySelector('.word-field').innerText = `${secretWord.name}`;
        for(let btn of document.querySelectorAll(".alph-btn")){
            btn.disabled = true;
        }
        secretWord = {};
        return;
    }
    missed++;
    const hangman = document.querySelectorAll(".hangman");
    for(let index = 0; index < missed; index++){
        hangman[index].style.opacity = 100;
    }

}

// EVENT LISTENERS
const categoryButtons = document.querySelectorAll(".catBtn");
for(let btn of categoryButtons){
    btn.addEventListener('click', () => {
        startGame(btn.value, btn.innerText);
    });
}
document.querySelector("#hint").addEventListener('click', ()=>{
    document.querySelector(".hint").innerText = `Your Hint: ${secretWord.hint}`
});

document.querySelector("#restart").addEventListener('click', ()=>{
    location.reload();
});

const alphBtns = document.querySelectorAll(".alph-btn");
for(let btn of alphBtns){
    btn.addEventListener('click', ()=>{
        checkForLetter(btn.innerText);
    });
}

window.addEventListener('keypress', (event) => {
    checkForLetter(event.key.toUpperCase());
});