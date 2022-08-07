const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            firstName: 'Jerry',
            lastName: 'Eni',
            gender: 'male',
            Email: 'enijery22@gmail.coms',
            image: 'image/download.jpeg',
            title: 'Task tracker'
            
        }
    },

    methods: {
       async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            // console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.Email = results[0].email
            this.gender = results[0].gender
            this.image = results[0].picture.large
        }
    }
}).mount('#app')

// const app = vue.createApp({
// })

// app.mount('#app ')