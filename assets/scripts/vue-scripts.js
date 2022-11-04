const whoAmIContent = "Mauris sed felis congue, euismod ex id, vulputate sapien. Nunc vulputate vehicula erat, id accumsan dui fermentum in. Maecenas purus nulla, lobortis sit amet tristique nec, elementum ut dui. Curabitur sodales sem ut felis faucibus auctor. Praesent lobortis id tellus non rutrum. Duis ultrices, lectus dapibus consequat fringilla, neque nunc blandit nibh, a placerat sem justo at nulla. Vivamus erat metus, volutpat vitae odio sit amet, dapibus semper mi. Pellentesque luctus nunc eget aliquam venenatis. Ut aliquet molestie quam elementum pharetra. Pellentesque sodales ipsum et elit hendrerit, vitae posuere lorem cursus. Donec felis erat, fermentum pellentesque sapien sit amet, fringilla ornare eros. Nulla suscipit luctus nibh, ullamcorper cursus felis cursus quis. Aliquam erat volutpat. Mauris orci erat, ullamcorper a mi eget, tempor elementum tortor."
const whatIDoContent = "Mauris sed felis congue, euismod ex id, vulputate sapien. Nunc vulputate vehicula erat, id accumsan dui fermentum in. Maecenas purus nulla, lobortis sit amet tristique nec, elementum ut dui. Curabitur sodales sem ut felis faucibus auctor. Praesent lobortis id tellus non rutrum. Duis ultrices, lectus dapibus consequat fringilla, neque nunc blandit nibh, a placerat sem justo at nulla. Vivamus erat metus, volutpat vitae odio sit amet, dapibus semper mi. Pellentesque luctus nunc eget aliquam venenatis. Ut aliquet molestie quam elementum pharetra. Pellentesque sodales ipsum et elit hendrerit, vitae posuere lorem cursus. Donec felis erat, fermentum pellentesque sapien sit amet, fringilla ornare eros. Nulla suscipit luctus nibh, ullamcorper cursus felis cursus quis. Aliquam erat volutpat. Mauris orci erat, ullamcorper a mi eget, tempor elementum tortor."
const hobbiesContent = "Mauris sed felis congue, euismod ex id, vulputate sapien. Nunc vulputate vehicula erat, id accumsan dui fermentum in. Maecenas purus nulla, lobortis sit amet tristique nec, elementum ut dui. Curabitur sodales sem ut felis faucibus auctor. Praesent lobortis id tellus non rutrum. Duis ultrices, lectus dapibus consequat fringilla, neque nunc blandit nibh, a placerat sem justo at nulla. Vivamus erat metus, volutpat vitae odio sit amet, dapibus semper mi. Pellentesque luctus nunc eget aliquam venenatis. Ut aliquet molestie quam elementum pharetra. Pellentesque sodales ipsum et elit hendrerit, vitae posuere lorem cursus. Donec felis erat, fermentum pellentesque sapien sit amet, fringilla ornare eros. Nulla suscipit luctus nibh, ullamcorper cursus felis cursus quis. Aliquam erat volutpat. Mauris orci erat, ullamcorper a mi eget, tempor elementum tortor."

const myVue = new Vue(
    {
        el: '#app',
        data: { 
            message: whoAmIContent,
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
