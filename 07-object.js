// JavaScript의 객체
//      객체 기반 언어 -> 클래서 없음
//      동적으로 필요할 때 언제든 속성(프로퍼티, 메서드를 추가할 수 있다.)


// 방법 1
const person = new Object();
person.name = "홍길동";
person.age = 30;
person.showInfo = function() {
    // this는 객체 자신의 인스턴스 영역
    let message = "Name:" + this.name + ", Age:" + this.age;
    console.log(message);
}
person.showInfo();

// 방법 2. JSON 이용 (중요)
const person2 = {
    name : "임꺽정",
    age : 40,
    showInfo: function() {
        console.log("Name:" + this.name + ", Age:" + this.age);
    }
}
person2.showInfo();

// function을 이용한 객체의 생성
const Member = function(name, position) {
    // 일종의 생성자처럼 활용 가능 하다.
    this.name = name;
    this.position = position;
};

let m1 = new Member("강백호", "PF");
let m2 = new Member("서태웅", "SF");

console.log("m1", m1);
console.log("m2", m2);

//  동적으로 속성을 추가할 수 있다.
m1.sayHi = function() {
    console.log(this.name + "님이 당신을 부릅니다.");
}   // 인스턴스에만 속성이 추가
m1.sayHi(); // OK

// m2.sayHi(); // 안됨
// prototype영역 확인
console.log(Member.prototype);
// prototype 영역에 속성을 추가하면 해당 객체를 공유하는
// 모든 인스턴스에서 공유된다.
Member.prototype.introduce = function() {
    console.log("Name:" + this.name);
    console.log("Position:" + this.position)
}

m1.introduce();
m2.introduce();

// 기존 객체들에도 동적으로 속성을 추가할 수 있다.
String.prototype.sayHello = function() {
    return "Hello," + this;
}

console.log("둘리".sayHello());