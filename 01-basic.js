// 콘솔 출력을 console 내장 객체의 메서드를 이용
console.info("정보메시지");
console.log("일반 로그");
console.warn("경고 메시지");
console.error("에러 메시지");

// 필요한 출력 객체를 , 구분하여 출력
console.log("ECMA Script", 2015);

// 변수
// var, let, const

var testVar = 10;   // ES6 이전에 변수 할당하는 방법
//  WEB 환경에서 var을 사용하도록 하자

let testLet = "let variable";   // 재할당 가능 변수
const TEST_CONST = "constant";  // 재할당 불가 변수

console.log(testVar, testLet, TEST_CONST);

testVar = "var changed";
testLet = "let changed";
// TEST_CONST ="constant changed"; - _재할당 불가
// const는 선언과 동시에 할당해야 한다.

// typeof : 동적 타이핑 언어 -> 실제 객체의 타입을 확인해야 한다.
let v = "JavaScript";   // 데이터 타입이 할당과 동시에 결정
console.log ("v ->", v, "type ->", typeof v);
v = 2020;   // 다른 타입의 할당이 가능
console.log ("v ->", v, "type ->", typeof v);

// number, string, boolean, object
