let umaString = "Um \"texto\"";
console.log(umaString);

let umaString2 = "Um \\texto.";
console.log(umaString2);
console.log(umaString2[3]);
console.log(umaString2[14]);
console.log(umaString2[-3]);
console.log(umaString2.charAt(6));
console.log(umaString2.charAt(10));
console.log(umaString2.replace('Um', 'Troca o'));
console.log(umaString2.replace(/t/g, '#'));
console.log(umaString2.slice(3, 6));
console.log(umaString2.slice(-6, -1));
console.log(umaString2.split('t'));
console.log(umaString2.toLocaleUpperCase());
console.log(umaString2.toLocaleLowerCase());