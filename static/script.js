
/*
  FarmBot Garden Dashboard
  This version uses sample data.
  It does not connect to or control a real FarmBot.
*/

// Sample garden data
const farmData = {
  farmbot: {
    connected: true,
    lastSync: "2026-02-25T15:16:00Z",
    coordinates: { x: 120, y: 45, z: 0 },
    waterLevel: 85
  },

  sensors: {
    currentTemp: 24.5,
    targetTemp: 22,
    humidity: 60,
    soilMoisture: 42,
    lightLux: 35000,
    targetLux: 30000
  },

  crops: [
    { bed: "A1", name: "Butterhead Lettuce", status: "Optimal" },
    { bed: "A2", name: "Cherry Tomato", status: "Optimal" },
    { bed: "A3", name: "Cucumber", status: "Optimal" },
    { bed: "A4", name: "Capsicum", status: "Optimal" },
    { bed: "A5", name: "Carrot", status: "Optimal" }
  ]
};

// Check that the website loaded successfully
document.addEventListener("DOMContentLoaded", () => {
  console.log("🌱 FarmBot Dashboard loaded!");
  console.log("Sample garden data:", farmData);

  // Show the last sync time in the browser console
  console.log(
    "Last sample sync:",
    new Date(farmData.farmbot.lastSync).toLocaleString()
  );

  // Show sensor information in the console
  console.log("Temperature:", farmData.sensors.currentTemp + " °C");
  console.log("Soil moisture:", farmData.sensors.soilMoisture + "%");
  console.log("Water level:", farmData.farmbot.waterLevel + "%");
});
