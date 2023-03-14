console.log("안녕하세요~ Hello World")

function 토큰만들어줘(){ 
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(result); 
}

토큰만들어줘()