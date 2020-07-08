### Spread

## spread
spread라는 단어는 펼치다 이다.
이 문법을 사용시 배열 혹은 객체를 펼칠수 있다.

다음 코드가 주어졌다고 가정을 하겠다.
```javascript
const slime={
    name: '슬라임'
};
const cuteSlime={
    name: '슬라임',
    attribute: 'cute'
};
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

```javascript
const slime = {
   name:'슬라임'
};
const cuteSlime={
    ...slime,
    attribute:'cute'
};
const purpleCuteSlime={
    ...cuteSlime,
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

spread 연산자는 배열에서도 사용이 가능하다.

```javascript
const animals = ['개' , '고양이' , '참새'];
const moreAnimals = [...animals , '비둘기'];
console.log(animals);
console.log(moreAnimals);
```
### Rest

##### 객체에서의 Rest
```javascript
const poppy = {
    name : '강아지',
    type : '개',
    age : 5
};
const {age , ...rest} = poppy;
console.log(age);
console.log(rest);
```
