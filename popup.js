document.getElementById("getLocation").addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const data = `Lat: ${pos.coords.latitude}, Lon: ${pos.coords.longitude}`;
      document.getElementById("output").innerText = data;

      // Save location
      chrome.storage.local.set({ location: data });
    },
    (err) => {
      document.getElementById("output").innerText = err.message;
    }
  );
});