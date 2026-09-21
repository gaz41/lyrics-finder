document.getElementById("searchButton").addEventListener("click", function () {
  // User input for artist and song
  const artistInput = document.getElementById("artistInput").value;
  const songInput = document.getElementById("songInput").value;

  // Check if both inputs are provided
  if (artistInput && songInput) {
    // Fetch lyrics from the API
    fetch(`https://api.lyrics.ovh/v1/${artistInput}/${songInput}`)
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        // Check if lyrics are found
        if (data.lyrics) {
          // Display artist and song information
          document.getElementById("artistDisplay").innerHTML =
            `<hr class="line" /><div class="artist-song"><span class="artistText">artist: </span><span class="artist">${artistInput}</span></div><div><span class="artistText">song: </span><span class="song">${songInput}</span></div>`;
          document.getElementById("lyricsDisplay").innerText = data.lyrics; // Display the lyrics
        } else {
          document.getElementById("artistDisplay").innerHTML = ""; // Clear display
          document.getElementById("lyricsDisplay").innerHTML =
            `<div>Lyrics not found - check spelling</div><div class="msg">Not all songs are available on this app</div>`;
          artistInput.value = ""; // Clear input field
          songInput.value = ""; // Clear input field
        }
      })
      // Handle errors during the fetch operation
      .catch((error) => {
        document.getElementById("artistDisplay").innerHTML = ""; // Clear display
        document.getElementById("lyricsDisplay").innerText =
          "Error fetching lyrics.";
        artistInput.value = ""; // Clear input field
        songInput.value = ""; // Clear input field
      });
  } else if (!artistInput && songInput) {
    // Prompt user to enter an artist if only song is provided
    document.getElementById("lyricsDisplay").innerText = "Enter an artist";
    document.getElementById("artistInput").focus(); // Focus on the artist input field
    // Prompt user to enter a song title if only artist is provided
  } else if (artistInput && !songInput) {
    document.getElementById("lyricsDisplay").innerText = "Enter a song title";
    document.getElementById("songInput").focus(); // Focus on the artist song field
  } else {
    // Prompt user to enter both fields if both are empty
    document.getElementById("lyricsDisplay").innerText =
      "Enter an artist and a song title";
    document.getElementById("artistInput").focus(); // Focus on the artist input field
  }
});

document.getElementById("clearButton").addEventListener("click", function () {
  artistInput.value = ""; // Clear input field
  songInput.value = ""; // Clear input field
  artistInput.focus(); // Focus on the artist input field
  document.getElementById("artistDisplay").innerHTML = ""; // Clear display
  document.getElementById("lyricsDisplay").innerText = ""; // Clear display
});

// COPYRIGHT NOTICE
// Select DOM element
const copyright = document.getElementById("copy");

// Dynamically generate copyright information
copyright.innerHTML =
  "Copyright &copy; " + // Start of the copyright string
  new Date().getFullYear() + // Get the current year
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;

// Lyricsovh API
// https://publicapis.io/lyrics-ovh-api
