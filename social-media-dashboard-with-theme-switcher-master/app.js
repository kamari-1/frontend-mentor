const toggle = document.getElementById("toggle_theme");
let theme = localStorage.getItem("data-theme");

// Change theme to light
const changeThemeToLight = () => {
  toggle.checked = true;
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
};

// Change theme to dark
const changeThemeToDark = () => {
  toggle.checked = false;
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
};

// Set theme to localStorage value
if (theme == "dark") {
  changeThemeToDark();
} else {
  changeThemeToLight();
}

// Set theme on toggle change
toggle.addEventListener("change", () => {
  theme = localStorage.getItem("data-theme");
  if (theme !== "dark") {
    trans();
    changeThemeToDark();
    // console.log("to dark");
  } else {
    trans();
    changeThemeToLight();
    // console.log("to light");
  }
});

// Transition
let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
