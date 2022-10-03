const treatInputEdgeCases = (arr) => {
  if (arr.length < 1) {
    return [1, 15, 30, 90]
  }

  return arr.slice(0, 10)
}

export const getArray = (str) => {
  const daysArray = str
    .split(',')
    .filter((element) => {
      if (element.trim() === '') {
        return false
      }
      return element
    })
    .map((element) => {
      return Number(element)
    })

  if (daysArray.length < 1) {
    return [1, 15, 30, 90]
  }

  return treatInputEdgeCases(daysArray)
}

const convertToCurrency = (number) => {
  return number.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}

export const treatResults = (data) => {
  let treatedData = {}
  for (const key in data) {
    treatedData = {
      ...treatedData,
      [key]: convertToCurrency(data[key] / 100),
    }
  }
  return treatedData
}

export const getChartData = (data) => {
    const firstKey = Object.keys(data)[0]

    const baseValue = data[firstKey]/100

    return Object.keys(data).map((key) => {return {name: `${key}`, 'R$': data[key]/100 - baseValue}})
}