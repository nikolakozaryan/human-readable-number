module.exports = function toReadable (number) {
  let hundreds = Math.trunc(number/100),
      decs     = Math.trunc(number / 10 - hundreds * 10),
      ones     = number % 10,
      resHundreds, resDecs, resOnes;

  const digits = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
  }

  resHundreds = hundreds ? `${digits[hundreds]} hundred` : '';

  switch (decs) {
    case 0:
        resDecs = '';
        break;
    case 1:
        if (ones == 0) resDecs = 'ten';
        else if (ones == 1) resDecs = 'eleven';
        else if (ones == 2) resDecs = 'twelve';
        else if (ones == 3) resDecs = 'thirteen';
        else if (ones == 5) resDecs = 'fifteen';
        else if (ones == 8) resDecs = 'eighteen';
        else resDecs = `${digits[ones]}teen`;
        break;
    case 2:
        resDecs = 'twenty';
        break;
    case 3:
        resDecs = 'thirty';
        break;
    case 4: 
        resDecs = 'forty';
        break;
    case 5:
        resDecs = 'fifty';
        break;
    case 8: 
        resDecs = 'eighty';
        break;
    default: resDecs = `${digits[decs]}ty`
  }

  resOnes = (decs == 1 || !ones) ? '' : digits[ones];

  return number === 0 ? 'zero' : resHundreds + 
                                 `${resHundreds && (resDecs || resOnes) ? ' ' : ''}` + 
                                 resDecs + 
                                 `${resOnes && resDecs ? ' ' : ''}` + 
                                 resOnes
}

//I FILL MYSELF STUPID, BUT IT WORKS AND I'M HAPPY