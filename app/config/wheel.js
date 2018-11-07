import debug from '../util/debug';

const wheel = {
  prizes: [
    {
      color: '#00FFFF',
      weight: 2,
      label: 'Frankreich',
      answer: 'Paris'
    },
    {
      color: '#FF0088',
      weight: 2,
      label: 'Deutschland',
      answer: 'Berlin'
    },
    {
      color: '#41bf73',
      weight: 2,
      label: 'Schweden',
      answer: 'Stockholm'
    },
    {
      color: '#88FF00',
      weight: 2,
      label: 'England',
      answer: 'London'
    },
    {
      color: '#ed5e0b',
      weight: 2,
      label: 'Holland',
      answer: 'Amsterdam'
    },
    {
      color: '#888888',
      weight: 2,
      label: 'Spanien',
      answer: 'Madrid'
    },
    {
      color: '#2d34ff',
      weight: 2,
      label: 'Italien',
      answer: 'Rom'
    },
    {
      color: '#FF0000',
      weight: 2,
      label: 'Schweiz',
      answer: 'Bern'
    },
    {
      color: '#e5e059',
      weight: 2,
      label: 'Österreich',
      answer: 'Wien'
    },
    {
      color: '#b23caa',
      weight: 2,
      label: 'Belgien',
      answer: 'Brüssel'
    },
  ]

}

// Update prizes to setup angles and offsets.
let sum = 0;
wheel.prizes.forEach(p => sum += p.weight);
const base = 360 / sum;
debug('SUM:', sum);
debug('BASE:', base);
let offset = 0;
wheel.prizes.forEach(p => {
  p.offset = offset;
  p.angle = base * p.weight;
  offset += p.angle;
});

wheel.getPrize = function(a) {
  a = 360 + 270 - a;
  a = a % 360;
  for(let i = 0; i < wheel.prizes.length; i++) {
    const prize = wheel.prizes[i];
    const { angle, offset } = prize;
    if(offset < a && angle + offset > a) {
      return prize;
    }
  }
  return null; // NOTE THIS SHOULD NEVER HAPPEN.
}

export default wheel;
