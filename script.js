const albums = {
  dont: {
    title: "Don’t",
    photos: [
      "photos/dont1.jpg","photos/dont2.jpg","photos/dont3.jpg","photos/dont4.jpg",
      "photos/dont5.jpg","photos/dont6.jpg","photos/dont7.jpg","photos/dont8.jpg"
    ]
  },
  cry: {
    title: "Cry",
    photos: [
      "photos/cry1.jpg","photos/cry2.jpg","photos/cry3.jpg","photos/cry4.jpg",
      "photos/cry5.jpg","photos/cry6.jpg","photos/cry7.jpg","photos/cry8.jpg"
    ]
  },
  anymore: {
    title: "Anymore",
    photos: [
      "photos/anymore1.jpg","photos/anymore2.jpg","photos/anymore3.jpg","photos/anymore4.jpg",
      "photos/anymore5.jpg","photos/anymore6.jpg","photos/anymore7.jpg","photos/anymore8.jpg"
    ]
  },
  yu: {
    title: "Yu",
    photos: [
      "photos/yu1.jpg","photos/yu2.jpg","photos/yu3.jpg","photos/yu4.jpg",
      "photos/yu5.jpg","photos/yu6.jpg","photos/yu7.jpg","photos/yu8.jpg"
    ]
  }
};

let currentAlbum = null;
let currentPage = 1;
const photosPerPage = 4;

// Open album
function openAlbum(name) {
  currentAlbum = albums[name];
  currentPage = 1;
  document.getElementById("album-list").classList.add("hidden");
  document.getElementById("photo-container").classList.remove("hidden");
  document.getElementById("album-title").innerText = currentAlbum.title;
  showPage();

  // Play music when opening album
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  }
}

// Show photos page
function showPage() {
  const photoContainer = document.getElementById("photos");
  photoContainer.innerHTML = "";
  const start = (currentPage - 1) * photosPerPage;
  const end = start + photosPerPage;
  const pagePhotos = currentAlbum.photos.slice(start, end);
  pagePhotos.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    photoContainer.appendChild(img);
  });
  document.getElementById("prev-btn").style.display = currentPage === 1 ? "none" : "inline-block";
  document.getElementById("next-btn").style.display = end >= currentAlbum.photos.length ? "none" : "inline-block";
}

// Next/Prev page
function nextPage() { currentPage++; showPage(); }
function prevPage() { currentPage--; showPage(); }

// Go back to album list
function goBack() {
  document.getElementById("album-list").classList.remove("hidden");
  document.getElementById("photo-container").classList.add("hidden");
}