const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;

const temperature = 28; // in celsius
const windSpeed = 15; // in km/h

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(wind, 0.16) +
            0.3965 * temp * Math.pow(wind, 0.16)
        ).toFixed(1);
    }
    return "N/A";
}

document.getElementById("windchill").textContent = calculateWindChill(
    temperature,
    windSpeed
);
