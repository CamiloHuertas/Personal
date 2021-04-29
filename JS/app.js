const d = document

let createElement = d.querySelector(".createElement"),
  overlayContainer = d.querySelector(".overlaySelection"),
  btnClose = d.querySelector(".btnClose"),
  btnCreate = d.querySelector(".btnCreate")

createElement.addEventListener("click", () => {
  overlayContainer.classList.add("active")
  createElement.style.opacity = "0"
})

let input = d.querySelector("input"),
  img = d.querySelector(".previewIMG"),
  url

//Addeventlistener
input.addEventListener("change", (e) => {
  url = URL.createObjectURL(e.target.files[0])
  //Get the img

  img.src = url
  //
})

// BTN CLOSE
btnClose.addEventListener("click", () => {
  overlayContainer.classList.remove("active")
  createElement.style.opacity = "1"
})

// BTN CREATE
btnCreate.addEventListener("click", () => {
  let container = d.querySelector(".createdElementsContainer")
  let previewIMG = d.querySelector(".previewIMG")

  overlayContainer.classList.remove("active")
  createElement.style.opacity = "1"
  input.value = ""
  previewIMG.src = ""

  // Element creation
  let figureC = d.createElement("figure"),
    imgC = d.createElement("img")

  // Class names

  figureC.className = "createdFigure"
  imgC.className = "createdIMG"

  // Appends

  figureC.appendChild(imgC)
  container.appendChild(figureC)
  // Extra code

  imgC.src = url
})
