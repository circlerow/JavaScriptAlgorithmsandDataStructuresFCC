function rot13(str) {
    let arr=str.split('');
    for(let i=0;i<arr.length;i++){
        let code=arr[i].charCodeAt(0);
        if(code>=65 && code<=90){
            if(code>=78){
                code-=13;
            }
            else{
                code+=13;
            }
        }
        arr[i]=String.fromCharCode(code);
    }
    str=arr.join('');
  return str;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));