function AddFucntion() {
  result = prompt("Enter function", parameters.text_values[0].html());
  parameters.text_values[0].html(result.replace(/,/gi, "."));
  Norm();
}

function AddRange() {
  result = prompt("Enter left range", parameters.text_values[2].html());
  parameters.text_values[2].html(e.parse(result.replace(/,/gi, ".")));
  result = prompt("Enter right range", parameters.text_values[3].html());
  parameters.text_values[3].html(e.parse(result.replace(/,/gi, ".")));
  Norm();
}

function SetNFucntion() {
  result = prompt("Enter normalized function", parameters.text_values[1].html());
  parameters.text_values[1].html(result.replace(/,/gi, "."));
  result = prompt("Enter normaliz coefficient", coeff);
  coeff = result.replace(/,/gi, ".");
}

function SetRans() {
  result = prompt("Enter replies count", parameters.text_values[5].html());
  parameters.text_values[5].html(parseInt(result));
}

function SetRep() {
  result = prompt("Enter dots count", parameters.text_values[4].html());
  parameters.text_values[4].html(parseInt(result));
}

function DrawFunction() {
  dots = [];
  funct = parameters.text_values[0].html();
  range1 = parseFloat(parameters.text_values[2].html());
  range2 = parseFloat(parameters.text_values[3].html());
  range = round(abs(range2 - range1) + 0.5) * 1000;
  maxi = 0;
  mini = Number.MAX_VALUE;
  // // console.log(range);
  for (i = 0; i < range; i++) {
    x = map(i, 0, range - 1, range1, range2);
    dots.push(x);
    // // console.log(funct.replace(/x/gi, x));
    try {
      y = ep.parse(funct.replace(/x/gi, x));
    } catch (e) {
      alert(e.message);
      return;
    }
    dots.push(y);
    if (y >= maxi) {
      maxi = y;
    }
    if (y <= mini) {
      mini = y;
    }
  }
  x = 50;
  y = 300;
  y_w = windowHeight - y - 40;
  x_w = y_w;
  // // console.log(mini, maxi);
  // clear();
  fill(255);
  noStroke();
  rect(x - 50, y - 50, x_w + 100, y_w + 100);
  stroke(0);
  strokeWeight(1);
  rect(x, y, x_w, y_w);
  fill(0);
  for (i = 0; i < dots.length - 2; i += 2) {
    line(x + map(dots[i], range1, range2, 0, x_w), y + y_w - map(dots[i + 1], mini, maxi, 0, y_w), x + map(dots[i + 2], range1, range2, 0, x_w), y + y_w - map(dots[i + 3], mini, maxi, 0, y_w));
    // // console.log(map(dots[i], range1, range2, x, x + x_w), y + y_w - map(dots[i + 1], mini, maxi, y, y + y_w), map(dots[i + 2], range1, range2, x, x + x_w), y + y_w - map(dots[i + 3], mini, maxi, y, y + y_w));
  }


  line(x, y + y_w / 2, x + x_w, y + y_w / 2);
  for (let i = 0; i <= 10; i++) {
    // if (((i == 0) && (leng.value() != 0)) || (i >= 1)) {
    let x2 = map(i, 0, 10, 0, x_w);
    let tmp = (parseInt(Math.round(range)) / 10);
    strokeWeight(1);
    line(x + x2, y_w / 2 + y - 10, x + x2, y_w / 2 + y + 10);
    let a = map(i, 0, 10, range1, range2).toFixed(1);
    strokeWeight(0.1);
    text(a, x + x2, y_w / 2 + y + 20);
    // }
  }
  for (let i = 0; i <= 10; i++) {
    let y2 = map(i, 10, 0, 0, y_w);
    let tmp = (parseInt(Math.round(maxi)) / 10);
    strokeWeight(1);
    line(x - 5, y + y2, x + 5, y + y2);
    let a = map(i, 0, 10, mini, maxi).toFixed(1);
    strokeWeight(0.1);
    text(a, x - 30 - a.toString().length * 2, y + y2);
  }
}


function DrawNFunction() {
  dots = [];
  funct = parameters.text_values[1].html();
  range1 = 0;
  range2 = 1;
  range = round(abs(range2 - range1) + 0.5) * 1000;
  maxi = 0;
  mini = Number.MAX_VALUE;
  // console.log(range);
  for (i = 0; i < range; i++) {
    x = map(i, 0, range - 1, range1, range2);
    dots.push(x);
    try {
      y = ep.parse(funct.replace(/x/gi, x));
    } catch (e) {
      alert(e.message);
      return;
    }
    dots.push(y);
    if (y >= maxi) {
      maxi = y;
    }
    if (y <= mini) {
      mini = y;
    }
    // // console.log(x, y);
  }
  x = 50;
  y = 300;
  y_w = windowHeight - y - 40;
  x_w = y_w;
  // // console.log(mini, maxi);
  // clear();
  fill(255);
  noStroke();
  rect(x - 50, y - 50, x_w + 100, y_w + 100);
  stroke(0);
  strokeWeight(1);
  rect(x, y, x_w, y_w);
  fill(0);
  for (i = 0; i < dots.length - 2; i += 2) {
    line(x + map(dots[i], range1, range2, 0, x_w), y + y_w - map(dots[i + 1], mini, maxi, 0, y_w), x + map(dots[i + 2], range1, range2, 0, x_w), y + y_w - map(dots[i + 3], mini, maxi, 0, y_w));
    // // console.log(map(dots[i], range1, range2, x, x + x_w), y + y_w - map(dots[i + 1], mini, maxi, y, y + y_w), map(dots[i + 2], range1, range2, x, x + x_w), y + y_w - map(dots[i + 3], mini, maxi, y, y + y_w));
  }


  // line(x, y + y_w / 2, x + x_w, y + y_w / 2);
  for (let i = 0; i <= 10; i++) {
    // if (((i == 0) && (leng.value() != 0)) || (i >= 1)) {
    let x2 = map(i, 0, 10, 0, x_w);
    let tmp = (parseInt(Math.round(range)) / 10);
    strokeWeight(1);
    line(x + x2, y_w + y - 10, x + x2, y_w + y + 10);
    let a = map(i, 0, 10, range1, range2).toFixed(1);
    strokeWeight(0.1);
    text(a, x + x2, y_w + y + 20);
    // }
  }
  for (let i = 0; i <= 10; i++) {
    let y2 = map(i, 10, 0, 0, y_w);
    let tmp = (parseInt(Math.round(maxi)) / 10);
    strokeWeight(1);
    line(x - 5, y + y2, x + 5, y + y2);
    let a = map(i, 0, 10, mini, maxi).toFixed(1);
    strokeWeight(0.1);
    text(a, x - 30 - a.toString().length * 2, y + y2);
  }
}


function Norm() {
  dots = [];
  funct = parameters.text_values[0].html();
  range1 = parseFloat(parameters.text_values[2].html());
  range2 = parseFloat(parameters.text_values[3].html());
  range = round(abs(range2 - range1) + 0.5) * 10;
  len = abs(range2 - range1);
  maxi = 0;
  mini = Number.MAX_VALUE;
  name = "(" + funct + ")";
  name2 = name;
  // вычисление максимального значения исходной функции
  for (i = 0; i < range; i++) {
    x = map(i, 0, range - 1, range1, range2);
    dots.push(x);
    try {
      y = ep.parse(funct.replace(/x/gi, x));
    } catch (e) {
      alert(e.message);
      return;
    }
    dots.push(y);
    if (y >= maxi) {
      maxi = y;
    }
    if (y <= mini) {
      mini = y;
    }
  } // нормализация исходной функции
  if (abs(maxi) >= abs(mini)) {
    maxi = maxi;
  } else {
    maxi = mini;
  }
  name += "/" + maxi;
  name = name.replace(/x/gi, "(x*" + len + ")");
  name = "abs(" + name + ")";

  // вывод результата
  alert("Waring! This is an approximate value!\nYou can change it if you think it's incorrect.\nFunction: " + name2 + "\nNormalized: " + name);

  // сохранение коефициента нормализации
  coeff = maxi * len;
  parameters.text_values[1].html(name);
  // return name;

}

function monte1() {
  DrawNFunction();
  parameters.logg.value("Monte-Carlo V1\n\n");
  funct = parameters.text_values[1].html();
  rans = parseInt(parameters.text_values[5].html());
  throws = parseInt(parameters.text_values[4].html());
  maxi = 0;
  mini = Number.MAX_VALUE;
  x = 50;
  y = 300;
  y_w = windowHeight - y - 40;
  x_w = y_w
  for (j = 1; j <= rans; j++) {
    ok = 0;
    for (i = 0; i < throws; i++) {
      x1 = random(0, 1);
      y1 = random(0, 1);
      try {
        y2 = ep.parse(funct.replace(/x/gi, x1));
      } catch (e) {
        alert(e.message);
        return;
      }
      if (y2 > y1) {
        fill(0, 255, 0);
        ok++;
      } else {
        fill(255, 0, 0);
      }
      // console.log(x, y);
      ellipse(x + map(x1, 0, 1, 0, x_w), y + y_w - map(y1, 0, 1, 0, y_w), 10, 10);
      fill(0);
      // ellipse(x, y, 5, 5);
    }
    tmp = parameters.logg.value();
    tmp += "Reply:" + j + "\n" + "Good/All: " + ok + "\n" + "Integral:" + ok / throws * coeff + "\n\n";
    parameters.logg.value(tmp);
    // console.log(ok / throws * coeff);
  }
}

function monte2() {
  DrawFunction();
  parameters.logg.value("Monte-Carlo V3\n\n");
  funct = parameters.text_values[0].html();
  rans = parseInt(parameters.text_values[5].html());
  throws = parseInt(parameters.text_values[4].html());
  range1 = parseFloat(parameters.text_values[2].html());
  range2 = parseFloat(parameters.text_values[3].html());
  range = round(abs(range2 - range1) + 0.5) * 1000;
  len = abs(range2 - range1);
  maxi = 0;
  mini = Number.MAX_VALUE;

  for (i = 0; i < range; i++) {
    x = map(i, 0, range - 1, range1, range2);
    // dots.push(x);
    // // console.log(funct.replace(/x/gi, x));
    try {
      y = ep.parse(funct.replace(/x/gi, x));
    } catch (e) {
      alert(e.message);
      return;
    }
    // dots.push(y);
    if (y >= maxi) {
      maxi = y;
    }
    if (y <= mini) {
      mini = y;
    }
  }
  x = 50;
  y = 300;
  y_w = windowHeight - y - 40;
  x_w = y_w
  for (j = 1; j <= rans; j++) {
    ok = 0;
    for (i = 0; i < throws; i++) {
      x1 = random(range1, range2);
      y1 = random(mini, maxi);
      try {
        y2 = ep.parse(funct.replace(/x/gi, x1));
      } catch (e) {
        alert(e.message);
        return;
      }
      if (y2 >= 0) {
        if ((y2 > y1) && (y1 >= 0)) {
          fill(0, 255, 0);
          ok++;
        } else {
          fill(255, 0, 0);
        }
      } else {
        if ((y2 < y1) && (y1 <= 0)) {
          fill(0, 255, 0);
          ok++;
        } else {
          fill(255, 0, 0);
        }
      }
      // // console.log(mini, maxi);
      // ellipse(x + map(x1, 0, 1, 0, x_w), y + y_w - map(y1, 0, 1, 0, y_w), 10, 10);
      ellipse(x + map(x1, range1, range2, 0, x_w), y + y_w - map(y1, mini, maxi, 0, y_w), 10, 10);
      // console.log(x + map(x1, range1, range2, 0, x_w), map(y2, mini, maxi, 0, y_w), 10, 10);


      fill(0);
      // ellipse(x, y, 5, 5);
    }
    tmp = parameters.logg.value();
    tmp += "Reply:" + j + "\n" + "Good/All: " + ok + "\n" + "Integral:" + ok / throws * (abs(maxi) + abs(mini)) * len + "\n\n";
    parameters.logg.value(tmp);
    // console.log(ok / throws * (abs(maxi) + abs(mini)) * len);
  }
}


//
function Help() {
  alert("В поле\"Функция\" задается исходная функция.\nВ поле\"Единичная функция\" будет отображаться приведенная к еденичному квадрату исходная функция.\nВ поле\"Промежуток\" вводится левая и правая граница исходной функции.\nВ поле\"Случайные точки\" вводится количество точек, используемых для каждой итерации метода Монте-Карло.\nВ поле\"Повторы\" вводится количесвто итераций метода Монте-Карло.\n\n\n\nДанны проект разработан в рамках контрольных работ по дисциплине\"Системы моделирования\" под руководством Столярчука В.А.\nАвтор: Бурченко К.А.\nМАИ. 609 кафедра. 2018 г.");
}




// 1231312312312312312313123