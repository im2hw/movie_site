const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjk4Njc2NjVjZDI1OTkwNzRiY2EwMjBiMzE4ZGI0NSIsInN1YiI6IjY1MmZhY2JiMGNiMzM1MTZmNzQ5ODBjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o9Kn249p9BCEkoxZ40aqsHrTZwRbR95vlDJAScH6u6o",
  },
};

fetch(
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((data) => {
    // data.results 배열을 순회하면서 각 영화에 대한 카드를 생성하고 추가합니다.
    data.results.forEach((movie) => {
      createCard(movie); // createCard 함수를 호출하여 각 영화 정보를 전달
    });
  })
  .catch((err) => console.error(err));

function createCard(movie) {
  const card = document.createElement("div");
  const poster_path = document.createElement("img");
  const name = document.createElement("h2");
  const vote_average = document.createElement("p");
  const overview = document.createElement("p");
  let CardId;

  card.classList.add("card");

  poster_path.classList.add("poster-img");
  poster_path.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${movie.poster_path}`
  );
  

  name.classList.add("title");
  name.textContent = movie.name;

  vote_average.classList.add("vote");
  vote_average.textContent = movie.vote_average;

  overview.classList.add("overview");
  overview.textContent = movie.overview;

  CardId = movie["id"];
  card.addEventListener("click", () => {
    alert(`영화 ID : ${CardId}`);
  });

  card.appendChild(poster_path);
  card.appendChild(name);
  card.appendChild(vote_average);
  card.appendChild(overview);

  const cardContainer = document.querySelector("#card-container");
  cardContainer.appendChild(card);
  return card;
}
createCard();

// input 검색창 :: 도저히 방법을 모르겠어용.. 됐다 안됐다가 하기도 하고 새로고침하면 아예 작동을 안해요 ㅜㅜ

const searchBox = document.getElementById("searchBar");
const searchBtn = document.getElementById('button');
const cards = document.querySelectorAll(".card");
const title = document.querySelector('.title');

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    searchInput();
});

function searchInput() {
    const inputValue = searchBox.value.toLowerCase(); // 검색어를 소문자로 변환

    cards.forEach(card => {
        title.textContent.toLowerCase(); // 카드 제목을 소문자로 변환
        if (title.includes(inputValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchBox.addEventListener('input', searchInput);
cards.forEach(card => {
    card.style.display = "block";
});
searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  searchInput();
});
