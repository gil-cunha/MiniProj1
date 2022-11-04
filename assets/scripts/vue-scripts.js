const myVue = new Vue(
    {
        el: '#app',
        data: { 
            message: 'Olá, Vue.js!',
            summary: 'A minha primeira aplicação Vue.',   

        }
    }
)  

function whoAmI(){
    console.log("i did something");
}

function whatIDo(){
    console.log("i did something again");
}

function hobbies(){
    console.log("i did something again");
}  
