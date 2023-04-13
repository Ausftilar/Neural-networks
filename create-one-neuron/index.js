let w = [];
let a = 0.03;

function initialization(n) {
  for(let i = 0; i < n; i++) {
    w[i] = Math.random();
  }
}

function neuron(x, w) {
  let y = 0;

  for(let i = 0; i < x.length; i++) {
    y += x[i] * w[i];
  }

  return (1 / (1 + Math.exp(-a * y)));
}

// Обучение нейрона

const Xn = 20,
      Yn = 10,
      P = 2,
      N = 3,
      L = 0.5,
      R = 1;

let buf = [],
    Ts = [],
    Result = ['Левая сторона', 'Правая сторона'];

function teach() {
  let k = Ts.length,
      n = 0.1;

  for (let i = 0; i < k; i++) {
    let b = Ts[i][2] - neuron([Ts[i][0], Ts[i][1], 1], w);
    for (let j = 0; j < N - 1; j++) {
      for (let l = 0; l <= 1; l++) {
        w[j] += n * b * Ts[i][l];
      }
    }

    w[N - 1] += n * b * 1;
  }
}

function cArr(x, y) {
  let number = 0;
  for ( let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      buf.push([]);
      buf[number].push(i);
      buf[number].push(j);
      buf[number].push(i <= (Xn / P) ? L : R);

      number++;
    }
  }
}

function sortArr(b) {
  while(b.length > 0) {
    Ts.push(b.pop());
    Ts.push(b.shift());
  }
}

function answer(o) {
  let left = Math.abs(L - o),
      right = Math.abs(R - o);

  if (left < right) {
    return Result[0];
  }
  return Result[1];
}

function begin(n) {
  initialization(n);
  cArr(Xn, Yn);
  sortArr(buf);
}