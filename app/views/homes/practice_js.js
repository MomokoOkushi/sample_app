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

//スコープ
//var　関数スコープ(ローカルスコープ)、グローバルスコープ
var str = "webcamp"//グローバルスコープ。どこからでも呼び出し可能

function foo() {
  console.log(str)
  var y = "hello"//関数スコープ(ローカルスコープ)
  console.log(y) //関数の呼び出しは定義した{}内でのみ

}

//ブロックスコープ（ローカルスコープ）の変数を宣言することができます。
//ブロックとは() 、{}の組で区切られたものを指します。
for (let i = 0; i < 10; i++) {
  console.log(i)
}

console.log(i)

//関数　戻り値
// メイン部分
let alertString;
// 作成した関数を呼び出し、変数へ格納
alertString = addString("WebCamp");

//変数の中身をアラートで表示する
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}

//入力ダイアログで値を入力
let promptStr = prompt('何か好きな文字を入力してください。');
alert(promptStr);