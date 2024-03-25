
var arr = [10, 20, 30, 40, 50, 60]
console.log(typeof arr);

console.log(arr[1]);

console.log(arr[2] ** 2);
console.log(arr[2]);

arr[1] = 999;
arr[3]++;

console.log(arr);

// 배열 데이터 수 확인

console.log(arr.length);

console.log(`첫번째 데이터: ${arr[0]}`);
console.log(`마지막 데이터: ${arr[arr.length-1]}`);


console.log('==================');

// 배열 데이터 순회 (전체 참조: travis)
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log('==================');

// for ~ of 반복문 (배열 전용 반복문)
var weedDays = ['월','화','수','목','금','토','일'];

// for(i = 0; i < weedDays.length; i++) {
//     console.log(`${weedDays[i]}요일`);
// }

for(var day of weedDays) {
    console.log(`${day}요일`);    
}

// 배열 생성 관례: 이름 복수형, -List 어미
var fruits = ['자몽','포도','사과',];
var fruitList = ['자몽','포도','사과'];
var fruitArray = ['자몽','포도','사과'];

console.log(fruits.length);

var tags = [
    '<li>오렌지</li>', 
    '<a href="#">오렌지</a>', 
    '<h1>오렌지</h1>',
    '<h2>오렌지</h2>',  // 배열의 마지막에 ,를 입력해도 이상없음
];
