var emailApp = Vue.component('email-component', {
    props: ['title'],
    template: '<div><p>{{title}}</p><form><input type="text" placeholder="john.smith@email.com"><input type="submit" value="Submit"></form></div>'
})

new Vue({
    el: '#emailApp'

})