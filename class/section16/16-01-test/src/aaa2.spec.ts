import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appService: AppService;
  let appController: AppController;

  beforeEach(() => {
    appService = new AppService();
    appController = new AppController(appService);
  });

  describe('getHello', () => {
    it('이 테스트의 검증 결과는 Hello World를 리턴해야함!!!', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  //   describe('fetchBoards', () => {
  //     const appService = new AppService();
  //     const appController = new AppController(appService);
  //     appController.fetchBoards()
  //   });

  //   describe('createBoard', () => {
  //     const appService = new AppService();
  //     const appController = new AppController(appService);
  //     appController.createBoard()
  //   });
});
