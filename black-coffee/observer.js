let observer = { // 옵저버 객체를 작성한다.
    handlers: {}, // 각 모듈에서 등록할 핸들러들을 담아둘 내부 변수를 선언한다.
    register: function (eventName, handler, context) {

        let handlerArray = this.handlers[eventName];
        if (undefined === handlerArray) {
            handlerArray = this.handlers[eventName] = [];
        }
        handlerArray.push({
            handler: handler,
            context: context
        });

    },
    unregister : function(eventName , handler , context){
        let handlerArray = this.handlers[eventName];
        if(undefined === handlerArray)
            return;

        for(let hidx = 0 ;hidx < handlerArray.length ; hidx++){
            let currentHandler = handlerArray[hidx];

            if(handler === currentHandler['handler']&&
                context === currentHandler['context']){
                handlerArray.splice(hidx ,1);
                return;
            }
        }
    },
    notify : function(eventName , data){
        let handlerArray = this.handlers[eventName];
        if(undefined === handlerArray)
            return;

        for(let hidx =0; hidx<handlerArray.length ; hidx ++){
            let currentHandler = handlerArray[hidx];
            currentHandler['handler'].call(currentHandler['context'] , data);
        }
    }

};
function Person  (name , age) {
    this.name = name ;
    this.age = age ;
}

let boss = new Person('boss', 10);
let manager = new Person('manger' , 12);
let programmer = new Person('programmer' , 30);


boss.speak = function(comment){
    console.log("boss " + comment);
    observer.notify("bossSpeak" , comment);
};

manager.listen = function(comment){
    this.bossComment = comment;

}
observer.register("bossSpeak" , manager.listen , manager);

programmer.drop = function (comment){
    return comment;
};

observer.register("bossSpeak" , programmer.drop, programmer);

boss.speak(".. for an hour ...");
manager.listen(".. for");


alert(this === window);

const caller = {
    f : function(){
        alert(this === window)
    },
}

caller.f();


function nonStrictMode(){
    return this;
}
function strictMode(){
    'use strict'
    return this;
}

console.log(nonStrictMode())
console.log(strictMode())
console.log(window.strictMode())


function newObject(name,color){
    this.name = name
    this.color = color
    this.isWindow = function(){
        return this === window
    }
}

const newObj = new newObject('nana' , 'yellow')
console.log(newObj.name) //nana
console.log(newObj.color) // yellow
console.log(newObj.isWindow()) //false


function newErrorObject(name,color){
    name = name
    color = color
    isWindow = function(){
        return this === window
    }
}

const newObj = new newErrorObject('nana' , 'yellow')
console.log(newObj.name) //error
console.log(newObj.color) // error
console.log(newObj.isWindow()) //error



const person = {
    name : 'wani',
    age : 25,
    nickName : 'Wanis',
    getName : function(){
        return this.name
    }
}

console.log(person.getName());


const otherPerson = person
otherPerson.name = 'Fo'
console.log(person.getName())
console.log(otherPerson.getName())
