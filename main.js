let button = document.createElement("button");
button.id = "btn";
button.textContent = "Submit";
document.body.appendChild(button);

let popup = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let buttonOk = document.createElement("button");
let img = document.createElement("img");

popup.classList.add("popup");
h1.classList.add("title");
p.classList.add("text");
buttonOk.classList.add("btn-ok");

h1.textContent = "Thank You!";
p.textContent = "Your details has been successfully submitted. Thanks!";
buttonOk.innerText = "Ok";
img.src = "/icons8-check-96.png";

document.body.appendChild(popup);
popup.appendChild(img);
popup.appendChild(h1);
popup.appendChild(p);
popup.appendChild(buttonOk);

button.addEventListener("click", () => {
  popup.style.top = "50%";
});

buttonOk.addEventListener("click", () => {
  popup.style.top = "-300px";
});
