export function checkPhone(myphone){
    if(myphone.length < 10 || myphone.length > 11){
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!")
        return false
    } else {
        return true
    }
}

export function getToken(){
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(result); 
    return result
}

export function sendTokenToSMS(myphone, mytoken){
    console.log(myphone + "번호로 인증번호 " + mytoken + "를 전송합니다.")
}

export default function qqq(){
    
}
