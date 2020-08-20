const paragraph = document.querySelector('p')
const text = paragraph.innerText
const textArr = text.split(' ')

const wordsColored = textArr.map(word => {
  if(word.charAt(0).toLowerCase() === 'r') {
    return '<span style="color: red">' + word.split('').reverse().join('') + '</span>'
  }
  return word
})

const resultText = wordsColored.join(' ')
const copiedParagraph = paragraph.insertAdjacentHTML('afterend', resultText)