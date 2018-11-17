function forLoop(n) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
    n.push("I am" + i + "strange loop.");
  } else {
    n.push("I am ${i} strange loops.");
  }
return n;
}
