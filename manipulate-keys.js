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
  let acc = initialValue !== undefined ? initialValue : ""

  const keys = Object.keys(obj)

  for (const key of keys) {
    acc = callback(acc, key)
  }

  return acc
}