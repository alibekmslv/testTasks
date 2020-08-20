const arr = [1, 2, 7, 5, 6, 8, 4]

function sortNums(arr){
  const oddNums = arr.filter(i => i % 2 !== 0).sort().reverse()
  const evenNums = arr.filter(i => i % 2 === 0).sort()

  let oddIncrement = 0
  let evenIncrement = 0
  const output = []

  arr.forEach(i => {
    if(i % 2 === 0) {
      output.push(evenNums[evenIncrement])
      evenIncrement++
    } else {
      output.push(oddNums[oddIncrement])
      oddIncrement++
    }
  });
  
  console.log(output)
}

sortNums(arr)