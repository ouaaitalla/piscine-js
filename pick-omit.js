function pick(obj, keys) {
  const result = {}
  const keysArray = Array.isArray(keys) ? keys : [keys]
  for (const key of keysArray) {
    if (Object.hasOwn(obj, key)) {
      result[key] = obj[key]
    }
  }
  return result
}

function omit(obj, keys) {
  const result = {}
  const keysArray = Array.isArray(keys) ? keys : [keys]
  for (const key of Object.keys(obj)) {
    if (!keysArray.includes(key)) {
      result[key] = obj[key]
    }
  }
  return result
}