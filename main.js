var b = [];
for (var i = 0; i < 5; i++) {
  b[i] = [];
  for (var j = 0; j < 5; j++) {
    b[i][j] = "□";
  }
}

b[2][1] = "■";
b[2][2] = "■";
b[2][3] = "■";

for (var i = 0; i < 5; i++) {
  var line = "";
  for (var j = 0; j < 5; j++) {
    line += b[i][j];
  }
  console.log(line);
}

for (var times = 0; times < 3; times++) {
  var bb = [[],[],[],[],[]];
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      // 誕生
      if (b[i][j] == "□") {
        var count = 0;
        if (b[i-1] && b[i-1][j-1] == "■") count = count+1;
        if (b[i-1] && b[i-1][j] == "■") count = count+1;
        if (b[i-1] && b[i-1][j+1] == "■") count = count+1;
        if (b[i] && b[i][j-1] == "■") count = count+1;
        if (b[i] && b[i][j+1] == "■") count = count+1;
        if (b[i+1] && b[i+1][j-1] == "■") count = count+1;
        if (b[i+1] && b[i+1][j] == "■") count = count+1;
        if (b[i+1] && b[i+1][j+1] == "■") count = count+1;
        if (count >= 3) {
          bb[i][j] = "■";
        } else {
          bb[i][j] = "□";
        }
      } else {
        bb[i][j] = "□"
      }

      // 生存、過疎、過密を判定
      if (b[i][j] == "■") {
        var count = 0;
        if (b[i-1] && b[i-1][j] == "■") count = count+1;
        if (b[i] && b[i][j-1] == "■") count = count+1;
        if (b[i] && b[i][j+1] == "■") count = count+1;
        if (b[i+1] && b[i+1][j] == "■") count = count+1;

        if (count == 2) {
          bb[i][j] = "■";
        }　else {
          bb[i][j] = "□";
        }
      }
    }
  }

  b = bb;

  console.log(times + "==========");

  for (var i = 0; i < 5; i++) {
    var line = "";
    for (var j = 0; j < 5; j++) {
      line += b[i][j];
    }
    console.log(line);
  }
}
