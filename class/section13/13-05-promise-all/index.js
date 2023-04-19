const fetchData = async () => {
  // API 보내기 요청!!

  console.time("=== 개별 Promise 각각 ===");
  await new Promise((성공시함수) => {
    setTimeout(() => {
      성공시함수("다운로드URL");
    }, 2000);
  });

  await new Promise((성공시함수) => {
    setTimeout(() => {
      성공시함수("다운로드URL");
    }, 3000);
  });

  await new Promise((성공시함수) => {
    setTimeout(() => {
      성공시함수("다운로드URL");
    }, 1000);
  });
  console.timeEnd("=== 개별 Promise 각각 ===");
};

fetchData();

const fetchData2 = async () => {
  // API 보내기 요청!!
  //   await Promise.all([promise, promise, promise])

  console.time("=== 한방 Promise.all ===");
  const results = await Promise.all([
    new Promise((성공시함수) => {
      setTimeout(() => {
        성공시함수("다운로드URL");
      }, 2000);
    }),

    new Promise((성공시함수) => {
      setTimeout(() => {
        성공시함수("다운로드URL");
      }, 3000);
    }),

    new Promise((성공시함수) => {
      setTimeout(() => {
        성공시함수("다운로드URL");
      }, 1000);
    }),
  ]);
  console.log(results);
  console.timeEnd("=== 한방 Promise.all ===");
};

fetchData2();
