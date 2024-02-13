const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

// Button to Generate New Joke from API.
jokeBtn.addEventListener("click", generateJoke);

// Generate Joke Function Call
generateJoke();

// Async Await Fetch Request & Displaying Joke in HTML
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const jokeRes = await fetch("https://icanhazdadjoke.com/", config);
  const data = await jokeRes.json();
  jokeEl.innerHTML = data.joke;
}
