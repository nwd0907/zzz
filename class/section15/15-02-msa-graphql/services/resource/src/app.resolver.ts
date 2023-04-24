// import { Controller, Get } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
// import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  // constructor(private readonly appService) {}

  @Query(() => String)
  fetchBoards(): string {
    return '게시글 데이터 보내기'; // 원래는 서비스 타고 갔다오기
  }
}
