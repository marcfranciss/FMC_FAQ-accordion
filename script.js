const queryR = document.querySelectorAll(".query-container");

queryR.forEach((que) => {
  que.addEventListener("click", () => {
    que.classList.toggle("active");
  });
});
