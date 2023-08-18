var englishButton = document.getElementById("englishButton");
var frenchButton = document.getElementById('frenchButton')
var hindiButton = document.getElementById('hindiButton')

englishButton.onclick = function () {
  fetch("/hello?language=English")
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

frenchButton.onclick = function () {
  fetch("/hello?language=French")
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

hindiButton.onclick = function () {
  fetch("/hello?language=Hindi")
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.log(error);
    });
};