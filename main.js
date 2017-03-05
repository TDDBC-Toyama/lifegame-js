var b = [];
for (var i = 0; i < 5; i++) {
  b[i] = [];
  for (var j = 0; j < 5; j++) {
    b[i][j] = "□";
  }
}

for (var i = 0; i < 5; i++) {
  var line = "";
  for (var j = 0; j < 5; j++) {
    line += b[i][j];
  }
  console.log(line);
}
