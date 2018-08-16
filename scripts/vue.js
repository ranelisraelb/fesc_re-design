var emailApp = new Vue({
    el: '#email-register'

})

vue.component('register', {
    props: ['title'],
    template: '<p>{{title}}</p><form><input type="text" placeholder="john.smith@email.com"><input type="submit" value="Submit"></form>'
})