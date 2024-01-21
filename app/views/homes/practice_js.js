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