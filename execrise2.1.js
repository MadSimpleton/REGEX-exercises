const fs = require('fs');

const arrows = fs.readFileSync('input.txt', 'utf-8').split('\n');


function processArrows(arrows) {
  const validArrows = [];

  for (let arrow of arrows) {
    arrow = arrow.trim();


    const match = arrow.match(/^(>+)([-=]+)(>)$/);

    if (match) {
      let [, fletching, shaft, tip] = match;


      if (fletching.length > 2) {
        fletching = '>>';
      }


      const shaftStyle = new Set(shaft);
      if (shaftStyle.size === 1 && shaftStyle.has('=')) {
        shaft = '-'.repeat(shaft.length);
      } else if (shaftStyle.has('=') && shaftStyle.size > 1) {
        continue;
      }

      const fixedArrow = fletching + shaft + tip;

      if (
        fixedArrow.startsWith('>>') &&
        fixedArrow.endsWith('>') &&
        /^[->]+$/.test(fixedArrow) &&
        fixedArrow.length >= 6 &&
        fixedArrow.length <= 8
      ) {
        validArrows.push(fixedArrow);
      }
    }
  }

  return validArrows;
}

const cleanedArrows = processArrows(arrows);

fs.writeFileSync('output.txt', cleanedArrows.join('\n'), 'utf-8');

console.log('Valid arrows written to output.txt');
