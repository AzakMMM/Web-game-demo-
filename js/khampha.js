document.addEventListener("DOMContentLoaded", function () {
const pages = document.querySelectorAll(".page");
const pageLinks = document.querySelectorAll(".page-link");
const prevLink = document.querySelector(".pagination .prev");
const nextLink = document.querySelector(".pagination .next");

let currentPage = 1;
const totalPages = pages.length;

function showPage(pageNumber) {
    pages.forEach(page => {
    page.style.display = (page.dataset.page === pageNumber.toString()) ? "grid" : "none";
    });
    pageLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.page === pageNumber.toString());
    });
    currentPage = pageNumber;
}

pageLinks.forEach(link => {
    link.addEventListener("click", function (e) {
    e.preventDefault();
    showPage(parseInt(this.dataset.page));
    });
});

prevLink.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentPage > 1) {
    showPage(currentPage - 1);
    }
});

nextLink.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentPage < totalPages) {
    showPage(currentPage + 1);
    }
});

showPage(1);

const wrapper  = document.getElementById('kp-wrapper');
const gameList = document.getElementById('kp-gameList');
if (!wrapper || !gameList) return;

const card  = gameList.querySelector('.kp-game-card');
const cs    = window.getComputedStyle(card);
const cardOuterWidth = card.offsetWidth + parseInt(cs.marginRight);

const visibleCount = 4;  

const scrollStep = cardOuterWidth * visibleCount;

const maxOffset = gameList.scrollWidth - scrollStep;

wrapper.style.width = `${scrollStep}px`;

let currentOffset = 0;
const updateScroll = () => {
  gameList.style.transform = `translateX(-${currentOffset}px)`;
};

window.nextPage = () => {
  currentOffset = Math.min(currentOffset + scrollStep, maxOffset);
  updateScroll();
};

window.prevPage = () => {
  currentOffset = Math.max(currentOffset - scrollStep, 0);
  updateScroll();
};


  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  function displayGames(games) {
    const gameList = document.getElementById('kp-gameList');
    if (!gameList) return;

    gameList.innerHTML = '';
    
    games.forEach(game => {
      const card = document.createElement('div');
      card.className = 'kp-game-card';
      
      card.innerHTML = `
        <a href="../html/chitiet.html?id=${game.id}" style="text-decoration: none;">
          <img src="${game.image}" alt="${game.title}">
          <p class="kp-game-title">${game.title}</p>
        </a>
      `;
      gameList.appendChild(card);
    });
  }

  fetch('../json/data.json') 
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {

      const filteredGames = data.filter(game => {
        const idNum = parseInt(game.id, 10);
        return idNum >= 1 && idNum <= 70;
      });

      const randomGames = shuffle(filteredGames);

      const numberToDisplay = 12;  
      const gamesToDisplay = randomGames.slice(0, numberToDisplay);

      displayGames(gamesToDisplay);
    })
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });

});

function _0x2e5f(){const _0x2e5448=['%c👀\x20Want\x20some\x20challenge?\x0aTyping:\x20accept','innerHTML','key','accept','5146676hCzpap','shift','push','3ZoszLi','length','admin-challenge','display','1464335qQBTkI','602632bxtEoz','join','block','getElementById','style','keydown','color:\x20cyan;\x20font-size:\x2014px;\x20font-family:\x20monospace;','addEventListener','secret','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>User:\x20','72TuVHUn','479856mNgIKJ','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Password:\x20','1065854FdvHka','2868850eDBsWY','941619kZAolj'];_0x2e5f=function(){return _0x2e5448;};return _0x2e5f();}const _0x14acd9=_0xd653;(function(_0x32ec0b,_0x165be8){const _0xe6494d=_0xd653,_0x345bd6=_0x32ec0b();while(!![]){try{const _0x3a053f=-parseInt(_0xe6494d(0x1ba))/0x1+parseInt(_0xe6494d(0x1bb))/0x2+parseInt(_0xe6494d(0x1a8))/0x3*(parseInt(_0xe6494d(0x1a5))/0x4)+-parseInt(_0xe6494d(0x1ac))/0x5+-parseInt(_0xe6494d(0x1b8))/0x6+parseInt(_0xe6494d(0x1bc))/0x7+-parseInt(_0xe6494d(0x1ad))/0x8*(parseInt(_0xe6494d(0x1b7))/0x9);if(_0x3a053f===_0x165be8)break;else _0x345bd6['push'](_0x345bd6['shift']());}catch(_0x113b76){_0x345bd6['push'](_0x345bd6['shift']());}}}(_0x2e5f,0xc6cca),console['log'](_0x14acd9(0x1bd),_0x14acd9(0x1b3)));function _0xd653(_0x2cb20e,_0xcd0d91){const _0xd6536f=_0x2e5f();return _0xd653=function(_0x2efda8,_0x2ca5a2){_0x2efda8=_0x2efda8-0x1a2;let _0x549801=_0xd6536f[_0x2efda8];return _0x549801;},_0xd653(_0x2cb20e,_0xcd0d91);}const cheatCode=['a','c','c','e','p','t'];let userInput=[];const binaryPassword=_0x14acd9(0x1a4),user=_0x14acd9(0x1aa);document[_0x14acd9(0x1b4)](_0x14acd9(0x1b2),function(_0x12b594){const _0x20e9ea=_0x14acd9;userInput[_0x20e9ea(0x1a7)](_0x12b594[_0x20e9ea(0x1a3)]);userInput[_0x20e9ea(0x1a9)]>cheatCode[_0x20e9ea(0x1a9)]&&userInput[_0x20e9ea(0x1a6)]();if(userInput[_0x20e9ea(0x1ae)]('')===cheatCode['join']('')){const _0xee4fac=document[_0x20e9ea(0x1b0)](_0x20e9ea(0x1b5));_0xee4fac[_0x20e9ea(0x1a2)]=_0x20e9ea(0x1b6)+user+_0x20e9ea(0x1b9)+binaryPassword+'</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',_0xee4fac[_0x20e9ea(0x1b1)][_0x20e9ea(0x1ab)]=_0x20e9ea(0x1af);}});