const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const author_name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 1500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1705834008920-b08bf6a05223?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="Image of Snowy Mountains" />';

  title.innerHTML = "Visit the Snowy Mountains";

  excerpt.innerHTML =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, officiis?";

  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Image of Woman" />';

  author_name.innerHTML = "Jane Doe";
  date.innerHTML = "Oct 15, 2024";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
