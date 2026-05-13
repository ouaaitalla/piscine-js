let lastCircle = null

export function createCircle(event) {
  const circle = document.createElement("div")

  circle.classList.add("circle")
  circle.style.background = "white"

  // position
  circle.style.left = `${event.clientX - 25}px`
  circle.style.top = `${event.clientY - 25}px`

  document.body.append(circle)

  lastCircle = circle
}

export function moveCircle(event) {
    const box = document.querySelector(".box")
  if (!lastCircle) return

  const boxRect = box.getBoundingClientRect()

  const circleSize = 50

  let x = event.clientX - circleSize / 2
  let y = event.clientY - circleSize / 2

  // check if circle is fully inside the box
  const insideBox =
    x > boxRect.left + 1 &&
    y > boxRect.top + 1 &&
    x + circleSize < boxRect.right - 1 &&
    y + circleSize < boxRect.bottom - 1

  if (insideBox) {
    lastCircle.style.background = "var(--purple)"

    // trap circle inside the box
    x = Math.max(x, boxRect.left + 1)
    y = Math.max(y, boxRect.top + 1)

    x = Math.min(x, boxRect.right - circleSize - 1)
    y = Math.min(y, boxRect.bottom - circleSize - 1)
  } else {
    // if already trapped, prevent escape
    if (lastCircle.style.background === "var(--purple)") {
      x = Math.max(x, boxRect.left + 1)
      y = Math.max(y, boxRect.top + 1)

      x = Math.min(x, boxRect.right - circleSize - 1)
      y = Math.min(y, boxRect.bottom - circleSize - 1)
    }
  }

  lastCircle.style.left = `${x}px`
  lastCircle.style.top = `${y}px`
}

export function setBox() {
  const box = document.createElement("div")

  box.classList.add("box")

  document.body.append(box)

  return box
}

document.addEventListener("click", createCircle)
document.addEventListener("mousemove", moveCircle)

  