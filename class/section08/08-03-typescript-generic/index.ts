// 1. 문자/숫자/불린(primitive) 타입
function getPrimitive(arg1: string, arg2: number, arg3: boolean): [boolean, number, string] {
  return [arg3, arg2, arg1];
}

const result1 = getPrimitive("철수", 123, true);
const result11 = result1[0] * 10; // 사실은 불린 타입인데 곱하기를 해도 문제가 발견되지 않음

//
//
// 2. any 타입 => 그냥 자바스크립트랑 같음
function getAny(arg1: any, arg2: any, arg3: any): [any, any, any] {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
}

const result2 = getAny("철수", 123, true);
const result22 = result2[0] * 10; // 사실은 불린 타입인데 곱하기를 해도 문제가 발견되지 않음

//
//
// 3. unknown 타입
function getUnknown(arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
}

const result3 = getUnknown("철수", 123, true);
const result33 = result3[0] * 10;

//
//
// 4. generic 타입
function getGeneric4<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result4 = getGeneric4("철수", 123, true);
const result44 = result4[0] * 10;

//
//
// 5. generic 타입
function getGeneric5<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result5 = getGeneric5("철수", 123, true);
const result55 = result5[0] * 10;

//
//
// 6. generic 타입
function getGeneric6<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result6 = getGeneric6("철수", 123, true);
const result66 = result6[0] * 10;

//
//
// 7. generic 타입
const getGeneric7 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result7 = getGeneric7<string, string, string>("철수", 123, true); // 제네릭에 타입 명시가 필요한 상황
const result77 = result7[0] * 10;
