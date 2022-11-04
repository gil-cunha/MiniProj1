// Global variables
const welcomeTitle = "Olá :)" 
const whoAmITitle = "Quem sou eu"
const whatIDoTitle = "O que faço"
const hobbiesTitle = "Hobbies"

const welcomeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est augue, congue ac metus et, lacinia cursus turpis. Suspendisse lobortis pharetra nunc eget hendrerit. Quisque leo felis, tempor in tincidunt a, sollicitudin sit amet dui. Nam ut leo at nisl dapibus laoreet in sit amet ante. Integer risus nunc, lacinia aliquam lobortis venenatis, vehicula in quam. Vestibulum at blandit nulla, non tempus diam. Vestibulum lobortis nibh odio, vitae molestie felis suscipit ut. Aenean et risus nisi. Duis euismod porta dui, vel posuere mauris pharetra id. Nunc hendrerit nec sem at varius. Aliquam consequat leo id tortor dapibus malesuada. Fusce ac lectus arcu. Nunc tempor mollis posuere. Ut pretium ullamcorper quam quis tristique."  
const whoAmIContent = "Nunc vitae magna nisl. Etiam faucibus ex non purus pharetra, varius rhoncus ipsum egestas. Sed luctus purus dui, a finibus sapien aliquam ut. Duis sed tincidunt metus. Vivamus sit amet ornare tellus. Praesent vel augue eu nisi volutpat convallis et vel enim. Nunc ex odio, elementum ut bibendum in, fringilla in lacus. In dignissim vel libero elementum pellentesque. Aenean nisl urna, rhoncus quis auctor eget, dictum sed arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec ipsum sit amet purus auctor ultricies."
const whatIDoContent = "Nulla ut pretium libero. Phasellus est elit, tincidunt eget tellus vitae, placerat dapibus augue. Integer posuere tortor quis pellentesque pellentesque. Quisque sodales molestie tristique. Phasellus in diam mattis, pulvinar magna et, iaculis est. Mauris vitae scelerisque purus. Cras ultricies, leo nec ornare porta, est turpis porttitor purus, quis molestie urna sapien sit amet ante. Sed sit amet dui tempus, malesuada diam vitae, vehicula mauris. Nam non fringilla diam, accumsan pretium odio. Sed ultrices est at sapien sagittis, ac ultricies nulla accumsan. Etiam pellentesque semper orci ut gravida. Nulla nec lectus pellentesque, pharetra nibh sed, eleifend elit."
const hobbiesContent = "Praesent finibus libero tempus varius pharetra. Proin viverra, nulla quis fringilla accumsan, mauris sapien maximus lorem, quis pellentesque metus arcu ac turpis. Nunc sem velit, mollis non ultrices ac, vestibulum elementum massa. Curabitur vel ex ullamcorper, ultrices sem sed, accumsan velit. Nam nibh ipsum, volutpat aliquet erat ac, faucibus vestibulum ligula. Proin id fringilla leo. Aliquam finibus ut nunc ut sodales. Cras ultrices ipsum a maximus malesuada. Suspendisse ut sapien porttitor, placerat mauris ac, laoreet orci. In vel nibh vel justo volutpat egestas nec sed nunc. Morbi arcu magna, porta a mi vel, sollicitudin viverra elit. In hac habitasse platea dictumst. Suspendisse diam sem, sagittis in quam sed, aliquet sollicitudin diam. Morbi nibh leo, fringilla eu mauris vel, commodo convallis libero. Vivamus et accumsan eros. Morbi nec fringilla sapien."


// Callbacks
window.onload = function(){
    setYear()   
}

// Functions
function setYear(){
    const el = document.getElementById("year")
    el.innerHTML = getTheYear() 
}  

function getTheYear(){
    const d = new Date()
    let year = d.getFullYear()
    return year
}

