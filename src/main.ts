import "./style.css";
type Album = {
  title: string;
  artist: string;
  genres: string[];
  imageSource: string;
  rating: number;
  yearOfRelease: number;
};

const Albums: Album[] = [
  {
    title: "A Moon Shaped Pool",
    artist: "Radiohead",
    yearOfRelease: 2016,
    imageSource:
      "https://media.pitchfork.com/photos/5929b5b913d197565213ace4/1:1/w_450%2Cc_limit/e3c43867.jpg",
    rating: 9.1,
    genres: ["Art Rock", "Ambient", "Post Rock"],
  },

  {
    title: "Amnesiac",
    artist: "Radiohead",
    yearOfRelease: 2001,
    imageSource:
      "https://media.pitchfork.com/photos/5929a1ee13d197565213874d/1:1/w_450%2Cc_limit/e75d5920.jpeg",
    rating: 9.0,
    genres: ["Experimental Rock", "Electronica", "Alternative Rock"],
  },
  {
    title: "Kid A",
    artist: "Radiohead",
    yearOfRelease: 2000,
    imageSource:
      "https://media.pitchfork.com/photos/5929a1ebb1335d7bf1698393/1:1/w_450%2Cc_limit/dddaf5bb.jpg",
    rating: 10,
    genres: ["Experimental Rock", "Art Rock", "Post Rock"],
  },
];
const makeAlbumCard = (album: Album) => {
  return `<div class="card">
              <div class="card__header-section">
                  <img
                      class="card__image"
                      src="${album.imageSource}"
                  />
                  <div class="card__rating">${album.rating}</div>
              </div>
              <div class="card__content">
                  <h2 class="card__heading">${album.title}</h2>
                  <div class="card__description">
                      <p class="card__description-text">${album.artist}</p>
                      <p class="card__description-text">${
                        album.yearOfRelease
                      }</p>
                  </div>
                  <hr class="card__line" />
                  <p class="card__genres">Genres:</p>
                  <p class="card__genre-values">${album.genres.join(", ")}<p>
              </div>
          </div>`;
};

const container = document.querySelector<HTMLElement>(".card-container");

if (!container) {
  throw new Error("Issue with selector");
}
Albums.forEach((Album) => {
  container.innerHTML += makeAlbumCard(Album);
});
