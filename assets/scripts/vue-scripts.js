const myVue = new Vue(
    {
        el: '#app',
        data: { 
            welcomeTitle: welcomeTitle,
            welcomeContent: welcomeContent,
            title: whoAmITitle,
            content: whoAmIContent,
            eventname: "click",
        },
        methods: {
            updateArticle: function(title, content){
                myVue.title = title
                myVue.content = content
            } 
        } 
    }
) 