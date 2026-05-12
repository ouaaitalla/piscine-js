function filterValues(obj, callback) {
  const result = {}
  for (const key of Object.keys(obj)) {
    const value = obj[key]
    if (callback(value)) {
      result[key] = value
    }
  }
  return result
}

function mapValues(obj, callback) {
  const result = {}
  for (const key of Object.keys(obj)) {
    const value = obj[key]
    result[key] = callback(value)
  }
  return result
}

function reduceValues(obj, callback, initialValue) {
  const values = Object.values(obj)
  let acc
  if (initialValue !== undefined) {
    acc = initialValue
  } else {
    acc = values[0]
    values.shift()
  }
  for (const value of values) {
    acc = callback(acc, value)
  }
  return acc
}
