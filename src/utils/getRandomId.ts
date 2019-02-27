export const getRandomId = (length: number, withLetters?: boolean): string => {
  let letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
  let id = ''
  if (withLetters) {
    for (let i = 1; i <= length; i++) {
      id += letters.charAt(Math.floor(Math.random() * i)) + Math.floor(Math.random() * i)
    }
    return id
  } else {
    for (let i = 1; i <= length; i++) {
      id += Math.floor(Math.random() * i)
    }
    return id
  }
}
