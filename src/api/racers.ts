import axios from 'axios';

export function getRacers() {
  return axios
    .get('https://ba6gijdps7.execute-api.us-east-1.amazonaws.com/racers')
    .then((res) => res.data.racers);
}

export function generateRacerWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfRacerWinning = Math.random();

  return (callback) => {
    setTimeout(() => {
      callback(likelihoodOfRacerWinning);
    }, delay);
  };
}

export function calculateOdd(odd) {
  return odd;
}

const x = generateRacerWinLikelihoodCalculator();
x(calculateOdd);
