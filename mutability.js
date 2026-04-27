const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}

const clone1 = {...persone}
const clone2 = {...persone}
const samepersone = persone

persone.age++
persone.country='FR'
