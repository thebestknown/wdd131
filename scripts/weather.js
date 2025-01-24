document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;

    const temperature = 10; 
    const windSpeed = 5;   

    function calculateWindChill(temp, speed) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(1); 
    }

    const windChillOutput = document.getElementById("windchill");
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillOutput.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        windChillOutput.textContent = "N/A"; 
    }
});
