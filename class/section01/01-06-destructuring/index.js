// // 1. 구조분해할당 예제
// const profile = {
//     name: "철수",
//     age: 12,
//     school: "다람쥐초등학교"
// }
// const { name, age } = profile
// console.log(name)
// console.log(age)



// // 2. 객체 전달하기
// function qqq(aaa){ // let aaa = profile
//     console.log(aaa)      // 객체
//     console.log(aaa.name) // 철수
//     console.log(aaa.age)  // 12
// }

// const profile = {
//     name: "철수",
//     age: 12,
//     school: "다람쥐초등학교"
// }
// qqq(profile)



// 3. 객체 전달하기 => 구조분해할당 방식으로 전달하기
function qqq({ name, age, school }){ // let { name, age, school } = profile
    console.log(name)   // 철수
    console.log(age)    // 12
    console.log(school) // 다람쥐초등학교
}

const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
qqq(profile)