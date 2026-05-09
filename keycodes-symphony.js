export function compose(event) {

  if (event.key >= "a" && event.key <= "z") {
    const note = document.createElement("div")

    note.classList.add("note")

    note.textContent = event.key

    const code = event.key.charCodeAt(0)
    note.style.background = `hsl(${code * 10}, 70%, 60%)`

    document.body.append(note)
  }


  if (event.key === "Backspace") {
    const notes = document.querySelectorAll(".note")

    if (notes.length > 0) {
      notes[notes.length - 1].remove()
    }
  }


  if (event.key === "Escape") {
    const notes = document.querySelectorAll(".note")

    notes.forEach(note => note.remove())
  }
}

document.addEventListener("keydown", compose)