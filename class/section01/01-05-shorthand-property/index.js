// 1. 키와 밸류가 다를때
// const myname = "철수"
// const myage = 12
// const myschool = "다람쥐초등학교"
// const profile1 = {
//     name: myname,
//     age: myage,
//     school: myschool
// }



// 2. 키와 밸류가 같을때
// const name = "철수"
// const age = 12
// const school = "다람쥐초등학교"
// // const profile2 = {
// //     name: name,
// //     age: age,
// //     school: school
// // }
// const profile2 = { name, age, school } // 키와 밸류가 같아서, 밸류를 생략함 => shorthand-property



// 3. shorthand-property로 함수에 인자 전달하기
function qqq(aaa){          // let aaa = profile // 이것과 같은 내용임
    console.log(aaa)        // 객체
    console.log(aaa.name)   // 철수
    console.log(aaa.age)    // 12
    console.log(aaa.school) // 다람쥐초등학교
}

const name = "철수"
const age = 12
const school = "다람쥐초등학교"
const profile = { name, age, school }

qqq(profile)               // 1. 변수에 담아서 보내주기
qqq({ name, age, school }) // 2. 그냥 통째로 보내주기
                           // => 결과는 1번과 2번이 동일함