### Promise

프로미스는 비동기 작업을 조금더 편하게 처리할 수 있도록 ES6부터 도입된 기능이다. 이전에는 비동기 작업을
처리할 때에는 콜백 함수로 처리해야하는 불편함이 있었다. 콜백함수로 처리를 하게된다면 비동기 작업이 많아질수록
코드가 난잡해지는 경험을 할수가 있다.

숫자 n을 파라미터로 받아와 다섯번에 걸쳐 1초마다 1씩 더해서 출력하는 작업을 setTimeout으로 구현을 해보자

```javascript
function increaseAndPrint(n , callback){
    setTimeout(()=>{
        const increased = n +1 ;
        console.log(increased);
        if(callback){
            callback(increased);
        }
    },1000);
}
increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          console.log('끝!');
        });
      });
    });
  });
});
```
코드 읽기가 참 불편해짐을 느낄수가 있다.
이런식의 코드를 `Callback Hell(콜백지옥)`이라고 부른다.
비동기적으로 처리해야하는 일이 많아질 수록, 코드의 깊이가 계속 깊어지는 현상을 가지고 있는데,
`Promise`를 사용하면 이렇게 코드의 깊이가 깊어지는 현상을 방지할 수가 있다.

## Promise 만들기

`Promise`는 다음과 같이 만듭니다.
```javascript
const myPromise = new Promise((resolve , reject)=>{
    //구현
})
```

`Promise`는 성공 할 수도 있고, 실패 할 수도 있습니다. 성공 할 때에는 `resolve`를 호출해주면 되고, 실패할 때에는 `reject`를 호출해주면
된다.
```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

myPromise.then(n => {
  console.log(n);
});
``` 

`resolve`를 호출할 때 특정값을 파라미터로 넣어주면, 이 값을 작업이 끝나고 나서 사용 할 수가 있다. 작업이 끝나고 나서 또 다른
작업을 해야할 때에는 `Promise`뒤에 `.then(...)`을 붙여서 사용하면 된다.

이번에는, 1초뒤에 실패되게끔 해볼것이다.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 1000);
});

myPromise
  .then(n => {
    console.log(n);
  })
  .catch(error => {
    console.log(error);
  });
```


```javascript
function work(callback){
  setTimeout(()=>{
    const start = Date.now();
    for(let i = 0 ; i < 1000000000 ; i++){
  
    }
    const end = Date.now();
    console.log(end - start + 'ms');
    callback(end -start);
  } , 0)

}
function workNotAsynk(){
  const start = Date.now();
  for(let i = 0 ; i < 1000000000 ; i++){

  }
  const end = Date.now();
  console.log(end - start + 'ms');
}

console.log('작업시작');
work((ms)=>{
  console.log('작업이 끝났어요');
  console.log(ms + 'ms 걸렸다고 해요');
});
console.log('다음 작업');

```

```javascript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0).then(n => {
  return increaseAndPrint(n);
}).then(n =>{
  return increaseAndPrint(n);
}).then(n =>{
  return increaseAndPrint(n);
}).then(n =>{
  return increaseAndPrint(n);
}).then(n =>{
  return increaseAndPrint(n);
}).catch(e =>{
  console.error(e);
})

```
```javascript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
  console.error(e);
})

```