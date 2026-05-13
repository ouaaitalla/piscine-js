function filterKeys(obj, callback) {
  const result = {}

  for (const key of Object.keys(obj)) {
    if (callback(key)) {
      result[key] = obj[key]
    }
  }

  return result
}

function mapKeys(obj, callback) {
  const result = {}

  for (const key of Object.keys(obj)) {
    const newKey = callback(key)
    result[newKey] = obj[key]
  }

  return result
}

function reduceKeys(obj, callback, initialValue) {
  const keys = Object.keys(obj)

  let acc
  let start

  if (initialValue !== undefined) {
    acc = initialValue
    start = 0
  } else {
    acc = keys[0]
    start = 1
  }

  for (let i = start; i < keys.length; i++) {
    acc = callback(acc, keys[i])
  }

  return acc
}