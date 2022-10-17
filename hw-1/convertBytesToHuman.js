/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
function div(val, by){ // function of division in which the fractional part (remainder) is discarded
  return (val - val % by) / by;
}

export default function convertBytesToHuman(bytes) {
  if (typeof bytes !== 'number' || bytes < 0){
    return false
  }
  let variableLen = bytes
  let i = 0 
  const type = ['B','KB','MB','GB','TB']
  while (div(variableLen, 1024) > 0 && i < type.length - 1) { //checking the possibility of converting a bytes to KB or KB in MB etc.
    variableLen /= 1024
    i++
  }
  return (variableLen.toFixed(2) + ' ' + type[i]) 
}


