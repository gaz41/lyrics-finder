document.getElementById("searchButton").addEventListener("click", function () {
  const artistInput = document.getElementById("artistInput").value;
  const songInput = document.getElementById("songInput").value;

  //   pulp - babies
  //   u2 - one
  //   lizzo - boys
  // the jam - fly

  if (artistInput && songInput) {
    fetch(`https://api.lyrics.ovh/v1/${artistInput}/${songInput}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.lyrics) {
          document.getElementById("stuffDisplay").innerHTML =
            `<hr class="line" /><div class="artist-song"><span class="artistText">artist: </span><span class="artist">${artistInput}</span></div><div><span class="artistText">song: </span><span class="song">${songInput}</span></div>`;
          document.getElementById("lyricsDisplay").innerText = data.lyrics;
        } else {
          document.getElementById("stuffDisplay").innerHTML = "";
          document.getElementById("lyricsDisplay").innerHTML =
            `<div>Lyrics not found - check spelling</div><div class="msg">Not all songs are available on this app</div>`;
          artistInput.value = "";
          songInput.value = "";
        }
      })
      .catch((error) => {
        document.getElementById("stuffDisplay").innerHTML = "";
        document.getElementById("lyricsDisplay").innerText =
          "Error fetching lyrics.";
        artistInput.value = "";
        songInput.value = "";
      });
  } else if (!artistInput && songInput) {
    document.getElementById("lyricsDisplay").innerText = "Enter an artist";
    document.getElementById("artistInput").focus();
  } else if (artistInput && !songInput) {
    document.getElementById("lyricsDisplay").innerText = "Enter a song title";
    document.getElementById("songInput").focus();
  } else {
    document.getElementById("lyricsDisplay").innerText =
      "Enter an artist and a song title";
    document.getElementById("artistInput").focus();
  }
});

document.getElementById("clearButton").addEventListener("click", function () {
  artistInput.value = "";
  songInput.value = "";
  artistInput.focus();
  document.getElementById("stuffDisplay").innerHTML = "";
  document.getElementById("lyricsDisplay").innerText = "";
});

// COPYRIGHT NOTICE
// Select DOM element
const copyright = document.getElementById("copy");

// Dynamically generate copyright information
copyright.innerHTML =
  "Copyright &copy; " + // Start of the copyright string
  new Date().getFullYear() + // Get the current year
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;

//
// API
// https://lyricsovh.docs.apiary.io/#
