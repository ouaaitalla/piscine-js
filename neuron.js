function neuron(data) {
  const result = {
    questions: {},
    orders: {},
  }

  for (const item of data) {
    const [left, responsePart] = item.split(' - Response: ')
    const response = responsePart.trim()

    const [typePart, contentPart] = left.split(': ')
    const type = typePart.toLowerCase()
    const content = contentPart.trim()

    const key = content
      .toLowerCase()
      .replace(/[!?]/g, '')
      .replace(/\s+/g, '_')

    if (!result[type][key]) {
      result[type][key] = {
        [type.slice(0, -1)]: content,
        responses: [],
      }
    }

    result[type][key].responses.push(response)
  }

  return result
}