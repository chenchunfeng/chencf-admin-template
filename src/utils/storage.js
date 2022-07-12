export const setItem = (key, value) => {
  // 保存复杂类型
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }

  window.localStorage.setItem(key, value)
}

export const getItem = (key) => {
  // 复杂类型的结果需要JSON.parse
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

export const removeAllItem = () => {
  window.localStorage.clear()
}

export const hasItem = (key) => {
  return !!window.localStorage.getItem(key)
}
