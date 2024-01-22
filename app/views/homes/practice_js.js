alert('Hello World');

let hello = 'Hello Hello';
alert(hello);

let int1 = 1; //整数代入
let int2 = -10; //負数を代入する
let float1 = 3.14; //小数点を代入する
let str1 = 'JavaScriptを覚えよう'; //文字列を代入する


alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);

alert('hello' + 'world')

let str3 = 'Java'
let str4 = 'Script'
alert(str3 + str4)

let orange = 100;
let apple = 120;

//分岐処理
if(orange < apple){
  alert('みかんの値段がリンゴより安い')
} else if(orange == apple){
  alert('みかんとりんごが同じ値段')
}else{
  alert('みかんの値段がリンゴより高い')
}

//繰り返し処理
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('２をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

//for文
let i;
let num1 = 0;

for(i = 1; i < 11; i++){
  num1 = num1 + i;
}

alert('1から10まで足し算した結果は' + num1 + 'です');

//変数宣言(変数宣言を再宣言してからconsole.logで呼び出すことで表示内容が変わる)
//varでのみ再宣言可能
var nickname = "taro"
console.log (nickname)

var nickname = "ichiro"
console.log (nickname)

//変数宣言２
//再代入はvarとletでのみ可能
var apple_name = "リンゴ"
console.log(apple_name)

apple_name = "fujiringo"
console.log(apple_name)

