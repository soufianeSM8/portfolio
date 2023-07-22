// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function setDarkTheme(darkIcon, lightIcon) {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = "dark";
  for (let i = 0; i < 2; i++) {
  
     lightIcon[i].style = `transform:translateY(0px)`
  darkIcon[i].style = `transform:translateY(0px)`;
  }
 
  console.log("set dark");
}

function setLightTheme(darkIcon, lightIcon) {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = "light";
  for (let i = 0; i < 2; i++) {
   
     lightIcon[i].style = `transform:translateY(35px)`;
    darkIcon[i].style = `transform:translateY(-39px)`;
  }
   
  console.log("set light");
}

function onThemeSwitcherItemClick(event) {
  const theme = event.currentTarget.dataset.theme,
        darkIcon = document.querySelectorAll(".darkIcon"),
        lightIcon = document.querySelectorAll(".lightIcon");
   if (theme === "dark") {
    setDarkTheme(darkIcon,lightIcon);
  } else {
    setLightTheme(darkIcon, lightIcon);
  }
console.log(event.currentTarget);
}

const themeSwitcherItems = document.querySelectorAll(".modeBtn");
themeSwitcherItems.forEach((item) => {
  item.addEventListener("click", onThemeSwitcherItemClick);
});
