function toggleLoop() {
  const video = document.querySelector("video");
  const existingPopup = document.querySelector("#yloop-popup");
  if (existingPopup) {
    setTimeout(() => {
      existingPopup = "-300px"; // Slide the popup out
    }, 100);
    setTimeout(() => {
      existingPopup.remove();
    }, 250);
  }
  // Create a custom sliding popup
  const popup = document.createElement("div");
  popup.id = "yloop-popup";
  popup.style.position = "fixed";
  popup.style.bottom = "20px";
  popup.style.right = "-300px"; // Start off-screen
  popup.style.padding = "10px";
  popup.style.fontFamily = "Ubuntu,sans-serif";
  // popup.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  popup.style.backgroundColor = video.loop ? "red" : "green";

  popup.style.color = "white";
  popup.style.borderRadius = "5px";
  popup.style.zIndex = "9999";
  popup.style.transition = "right 0.5s ease"; // Smooth transition for sliding in

  if (video) {
    video.loop = !video.loop; // Enables looping
    popup.innerText = video.loop ? "Looping enabled!" : "Looping disabled!";
  } else {
    popup.innerText = "No video found.";
  }

  // Append the popup to the body
  document.body.appendChild(popup);

  // Trigger the sliding effect by changing the 'right' value
  setTimeout(() => {
    popup.style.right = "20px"; // Slide the popup in
  }, 100); // Small delay to ensure the popup is attached before the transition
}
