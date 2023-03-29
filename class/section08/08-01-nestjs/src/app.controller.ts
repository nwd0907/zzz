import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/products/buy')
  getHello(): string {
    const qqq = 3;

    const profile = {
      age: 13,
      school: '다람쥐초등학교', // trailingComma
    };

    // 세미콜론의 중요성
    // let aaa
    // aaa = ["철수", "영희", "훈이"]

    // [1, 2, 3].map((el) => {
    //   console.log(el)
    // })

    return this.appService.qqq();
  }
}
