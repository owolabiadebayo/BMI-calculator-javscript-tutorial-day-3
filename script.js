let form = document.querySelector("form");
form.addEventListener("submit",
function (e) {
  e.preventDefault()
  let height = parseInt(document.querySelector("#height").value);
  let Weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector(".result");

  if ((height === "") || (height < 0 )|| (isNaN(height))) {
    result.innerHTML = "Please input your height";
  } else if (Weight === "" || Weight < 0 || isNaN(Weight)) {
    result.innerHTML = "Please input your weight";
  } else {
    let Result = Weight / (height * height);
    result.innerHTML = `<span>${Result} BMI</span>`;
  }
})

