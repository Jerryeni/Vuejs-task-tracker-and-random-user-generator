const app = vue.createApp({
    template: `<h1>Task Tracker</h1>`,
    data() {
        return {
            title: 'Task Tracker'
        }
    },
})

app.mount('#app ')