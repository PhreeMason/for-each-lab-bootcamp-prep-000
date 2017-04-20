function iterativeLog(array) {
    array.forEach((element, index, array) =>{  
      console.log(`${index}: ${element}`)})

}

function iterate(callback) {
  arry = [1,2,3]
  arry.forEach(callback)
  return arry
}

function doToArray(array, callback) {
  array.forEach(callback)
}