function rot13(str){

let alphabeticPos = 0;
let decLetter = '';
let newArr = [];

let strAr = str.match(/\w+|\W+/g);

 for ( let i=0; i<strAr.length; i++){
  for( let j=0; j<strAr[i].length; j++){
    if(!(/[A-Z]/).test(strAr[i][j])){

      newArr.push(strAr[i][j]);

    } else {
      alphabeticPos = strAr[i][j].charCodeAt(0) - 'A'.charCodeAt(0)+1-13;

      if( alphabeticPos >= 1){
        decLetter = String.fromCharCode(97+alphabeticPos-1).toUpperCase();
        newArr.push(decLetter);
      } else {
        let negPos = 26+alphabeticPos;
        decLetter = String.fromCharCode(97+negPos-1).toUpperCase();
        newArr.push(decLetter);
      }
  
      

    }
  }
 }

  return newArr.join("");

}

console.log(rot13("SERR PBQR PNZC")); 
// returns FREE CODE CAMP
console.log(rot13("SERR YBIR?"));
// returns FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// returns THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
