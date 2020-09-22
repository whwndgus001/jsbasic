// 함수의 선언
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));

// 함수 표현식 : 이름이 없는 함수 -> 익명 함수
const csum = function(a, b) {
    return a + b;
}

console.log(typeof csum,    // function
     csum(10, 20));

// 익명 함수의 활용 : 즉시실행 함수
// 프로그램의 초기화 과정에서 많이 활용
(function(number) {
    // 주로 1회성 초기화시 사용
    console.log(`${number}을 이용하여 즉시 실행하였습니다.`);
})(2020);

// 함수의 매개변수
// JavaScript는 매개변수를 선언하지 않아도 함수로 전달되는 모든 이수가
// arguments 배열로 전달
function getTotal() {   // 매개변수 선언 없음
    let result = 0;
    // 모든 전달된 인수는 arguments로 전달
   for (let i = 0; i < arguments.length; i++) {
       // 동적 스크립트에서 타입체크는 꼼꼼히 해 주도록 한다.
       if (typeof arguments[i] == "number")
       result += arguments[i];
   }
   return result;
}
console.log("End of Code");
console.log("getTotal:", getTotal(1, 2, 3, 4, 5));
console.log("getTotal:", getTotal(1, 2, "3", 4, 5));

// JavaScirpt의 함수는 그 자체로 객체다.
// number, string 등 다른 객체와 마찬가지로 다른 함수의 인수로 전달 가능
function calcUsingCallback(val1, val2, func) {
    // 외부에서 전달된 함수를 거꾸로 호출하는 것을
    // "Callback" 함수라고 부른다 (중요)
    if (typeof func == "function") {   // 넘겨받은 인수가 함수인지 확인
        func(val1,val2);
}
}

calcUsingCallback(3, 4, function(v1, v2) {
    console.log(v1 + v2);
});

calcUsingCallback(3, 4, function(v1, v2){
    console.log(v1 * v2);
})

// 화살표 함수 = >
const f1 = function() { return "Hello" };
const f1Arrow = () => "Hello";  // 단순 출력은 return 없이

console.log(f1(), f1Arrow());
const f2 = function(name) { return "Hello" + name};
const f2Arrow = name => "Hello, " + name;

console.log(f2("Bit"), f2Arrow("Bit"));


// callback 함수 전달시 유용
calcUsingCallback(3, 4, (v1, v2) => {
    console.log("화살표 콜백 함수:", v1 * v2);
});
