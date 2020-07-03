### Truthy,Falsy

```javascript
function print(person){
    console.log(person.name);
}

const person = {
    name: 'Wani'
};

print(person);
```
만약에 이러한 상황에서, 만약 print 함수가 다음과 같이 파라미터가 비어진 채로 실행됐다고 가정해봅시다.
```javascript
function print(person){
    console.log(person.name);
}
const person = {
    name: 'Wani'
};
print();

```

다음과 같은 에러를 생성해낸다.
        
        TypeError: Cannot read property 'name' of undefined
        
이러한 상황에서, 만약에 print 함수에서 만약에 object가 주어지지 않았다면, 문제가 있다고 콘솔에 출력해야 한다면
다음과 같은 구현을 할 수가 있다.
```javascript
function print(person){
    if(person === undefined){
    return;
    }
    console.log(person.name);
}
const person = {
    name: 'Wani'
};
print();
```

그런데 만약 다음과 같이 print에 널값이 파라미터로 전달되면 어떨까요?
```javascript
function print(person){
    if(person=== undefined){
        console.log('person is empty');
        return;
    }
    console.log(person.name);
}
const person = null;
print(person);
```
그러면 또 오류가 발생한다.
        
        TypeError : Cannot read property 'name' of null
                
그러면 또.. print 함수에 조건을 추가해줘야 한다. 

```javascript
function print(person){
    if(person === undefined || person === null){
        console.log('person is empty');
        return;
    }
    console.log(person.name);
}
const person = null;
print(person);
```

이렇게 person 이 undefined이거나 ,null인 상황같은 모든 상황에 대비를 해야한다.
줄일수 있는 방법이 있다!

```javascript
function print(person){
    if(!person){
        console.log('person is empty');
        return;
    }
    console.log(person.name);
}
const person = null;
print(person);
```

이것이 작동하는 이유는 undefined와 null은 Falsy한 값입니다. Falsy 한 값 앞에 느낌표를
붙여주면 true로 전환됩니다. 예시로는

```javascript
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
```

이 값은 모두 true가 됩니다.
여기서 NaN이라는 값은 조금 생소하지만 이값은 Not A Number라는 의미를 가진다.
보통 NaN은 문자열을 숫자로 변환하는 자바스크립트 기본함수 parseInt라는 함수를 사용하게 될 때 볼수 있습니다.

```javascript
const num = parseInt('15' , 10); // 10진수 15를 숫자로 변환하겠다는 의미이다.
console.log(num);
const notNum = parseInt('이것 숫자가 아니다');
console.log(notNum); //NaN
```

```javascript
console.log(!3);
console.log(!'hello');
console.log(!['array?']);
console.log(![]);
console.log(!{value:1});
```
이번에는 아까와 반대로 모든 값이 false가 됩니다.
Truthy한값과 Falsy 한 값은 if문에서도 사용할 수가 있다.
```javascript
const value = {a:1};
if(value){
    console.log('value is Truthy');
}
```
value 가 Truthy한 값이기 때문에, 콘솔에 메시지가 출력 될 것입니다. 반면 value가 null, undefined,0,'',NaN중
하나라면 나타나지 않을것이다.

그래서 이렇게, Truthy 한값과 Falsy한 값을 잘 알아놓으면 조건문을 작성할때 편할것이다.
만약에, 특정 값이 Truthy한 값이라면 ture 그렇지않다면 false로 값을 표현하는것을 써봤다.
```javascript
const value = {a :1};
const truthy = value ? true : false;
```

삼항 연산자를 사용하면 쉽게 value의 값에 따라 true false로 전환이 가능하다.
이를 더 쉽게 할수있다.
```javascript
const value = {a :1};
const truthy = !!value;
```