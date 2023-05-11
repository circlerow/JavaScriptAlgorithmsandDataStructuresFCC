function telephoneCheck(str) {
    let regex=/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;//1\s? - có thể có số 1 kèm dấu cách hoặc không
    //(\(\d{3}\)|\d{3}) - có thể có 3 số trong ngoặc hoặc không
    //[\s\-]? - có thể có dấu cách hoặc không
    //\d{3} - 3 số
    //[\s\-]? - có thể có dấu cách hoặc không
    //\d{4} - 4 số
    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555");