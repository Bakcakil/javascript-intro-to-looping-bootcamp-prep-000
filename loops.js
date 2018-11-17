function forLoop(arrayIn){
  for (let i = 0; i < 25; i++) {
    if(i==1){
      arrayIn.push("I am 1 strange loop.")
    } else {
      arrayIn.push("I am " + i + " strange loops.")
  }
}
return arrayIn
}
