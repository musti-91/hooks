export const log = (text: string) => {
  return console.log(
    `%cAction Type: ${text}`,
    'color:red;background-color:lightblue;padding:5px;border-radius: 5px'
  )
}
