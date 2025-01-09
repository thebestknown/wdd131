// Update the year
const date = new Date();
const currentYear = date.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Last modification date
const lastMod = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastMod;
