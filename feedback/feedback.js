var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}

function save() {
  document.getElementById("success").style.display = "block";
  myvar = setTimeout(closeMsg, 1000);
}

function closeMsg() {
  document.getElementById("success").style.display = "none";
}
