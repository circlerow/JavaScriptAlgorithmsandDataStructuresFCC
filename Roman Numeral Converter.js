function convertToRoman(num) {
    var roman = ["I","V","X","L","C","D","M"],
        ints=[],
        romanNumber=[],
        i=0,
        numeral="";
  
    while(num){
      ints.push(num%10);
      num=Math.floor(num/10);
    }
    for(i=0;i<ints.length;i++){
      change(ints[i]);
    }
    function change(){
      numeral=roman[i*2];
      switch(ints[i]){
        case 1:
          romanNumber.push(numeral);
          break;
        case 2:
          romanNumber.push(numeral.concat(numeral));
          break;
        case 3:
          romanNumber.push(numeral.concat(numeral,numeral));
          break;
        case 4:
          romanNumber.push(numeral.concat(roman[i*2+1]));
          break;
        case 5:
          romanNumber.push(roman[i*2+1]);
          break;
        case 6:
          romanNumber.push(roman[i*2+1].concat(numeral));
          break;
        case 7:
          romanNumber.push(roman[i*2+1].concat(numeral,numeral));
          break;
        case 8:
          romanNumber.push(roman[i*2+1].concat(numeral,numeral,numeral));
          break;
        case 9:
          romanNumber.push(numeral.concat(roman[i*2+2]));
      }
    }
    romanNumber.reverse();
    romanNumber=romanNumber.join('');
   return romanNumber;
  }
  
  convertToRoman(36);