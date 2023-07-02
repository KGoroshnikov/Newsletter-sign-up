

document.getElementById("subscribeBTN").onclick = function() {ValidateEmail(document.getElementById("email-box").value)};
document.getElementById("dismissBTN").onclick = function() {reloadPage()};
let emailSave = "";

function ValidateEmail(input) {
  emailSave = input;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    setPage();
    return true;
  } else {
    wrongEmail();
    return false;
  }
}

function reloadPage(){
  location.reload();
}

function wrongEmail(){
  document.getElementById("wrongEmail").style.display = "block";
  let inpt = document.getElementById("email-box");
  inpt.style.borderColor = "hsl(4, 100%, 67%)";
  inpt.style.backgroundColor = "hsl(4, 100%, 93%)";
}

function closeSignUp(){
  document.getElementById("main-container").style.display = "none";
  document.getElementById("success-page").style.display = "flex";

  const thanksMessage = document
  .getElementById("success-page")
  .animate(
    [{ transform: "scale(0)" }, { transform: "scale(1)" }],
    {
      fill: "forwards",
      easing: "cubic-bezier(0.000, 0.205, 0.635, 1.650)",
      duration: 800,
    }
  );
  thanksMessage.play();
}

function setPage(){
  let anim = true;
  if (window.innerWidth <= 830) anim = false;

  if (!anim)
  {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("success-page").style.display = "flex";
  }
  const paragraph = document.getElementById("infoMSG");
  const strongElement = document.createElement("strong");
  const textNode = document.createTextNode(`${emailSave}.`);
  strongElement.appendChild(textNode);
  paragraph.textContent = "A confirmation email has been sent to ";
  paragraph.appendChild(strongElement);

  const secondPart = document.createElement("p");
  secondPart.appendChild(document.createTextNode("Please open it and click the button inside to confirm your subscription."));
  paragraph.appendChild(secondPart);

  if (anim){
    const singUp = document
    .getElementById("main-container")
    .animate(
      [{ transform: "scale(1)" }, { transform: "scale(0)" }],
      {
        fill: "forwards",
        easing: "cubic-bezier(0.525, -0.430, 0.775, 0.370)",
        duration: 800,
      }
    );
    singUp.play();
    setTimeout(closeSignUp, 800);
  }
}