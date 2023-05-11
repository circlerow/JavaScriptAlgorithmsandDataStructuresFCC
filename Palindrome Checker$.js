function palindrome(str) {
    // Good luck!
    var str1 = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var str2 = str1.split('').reverse().join('');
    if (str1 !== str2) {
        return false;
    }
    
    return true;
  }
  
  palindrome("eye");