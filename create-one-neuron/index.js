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

initialization(3)
console.log(neuron([5, 2, 3], w))