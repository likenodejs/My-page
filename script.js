function Element(element, top, left, maxShift, PXsInPX) {
  this.elem = element
  this.top = top
  this.left = left
  this.shiftTop = 0
  this.shiftLeft = 0
  this.maxShift = maxShift
  this.PXInPXs = PXsInPX
}

let paralaxElements = [
  new Element(document.getElementById("diploma"), 10, 70, 35, 7),
  new Element(document.getElementById("it-symbol"), 75, 60, 30, 6)
]

document.addEventListener("mousemove", (e) => {
  const screenWidth = document.documentElement.clientWidth
  const screenHeight = document.documentElement.clientHeight

  let positionX
  let positionY
  let translateX
  let translateY

  for(var i = 0; i < paralaxElements.length; i++) {
    let data = paralaxElements[i]

    positionX = screenWidth / 100 * data.left + data.elem.width / 2
    positionY = screenHeight / 100 * data.top + data.elem.height / 2

    if (positionX < e.x) {
      translateX = (e.x - positionX) / data.PXInPXs * -1
    } else if (positionX > e.x) {
      translateX = (positionX - e.x) / data.PXInPXs
    }

    if (positionY < e.y) {
      translateY = (e.y - positionY) / data.PXInPXs * -1
    } else if (positionY > e.y) {
      translateY = (positionY - e.y) / data.PXInPXs
    }

    if (translateX > data.maxShift) {
      translateX = data.maxShift
    } else if (translateX < data.maxShift * -1) {
      translateX = data.maxShift * -1
    }

    if (translateY > data.maxShift) {
      translateY = data.maxShift
    } else if (translateY < data.maxShift * -1) {
      translateY = data.maxShift * -1
    }

    data.elem.style.transform = `translate(${translateX}px, ${translateY}px)`
  }
})

// function checks() {
//
// }
