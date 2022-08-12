const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Task tracker',
            text: '',
            day: '',
            reminder: false,
            showAddTask: false,

            tasks: [

                {
                    id: 1,
                    text: 'Doctors Appointment',
                    day: 'August 15th at 2:30pm',
                    reminder: true,

                },

                {
                    id: 2,
                    text: 'Play football',
                    day: 'August 15th at 2:30pm',
                    reminder: true,
                },

                {
                    id: 3,
                    text: 'Wash cloths',
                    day: 'August 15th at 2:30pm',
                    reminder: false,
                },

            ]
            
        }
    },

    // created() {
    //     this.tasks = [

    //         {
    //             id: 1,
    //             text: 'Doctors Appointment',
    //             day: 'August 15th at 2:30pm',
    //             reminder: true,
    //         },

    //         {
    //             id: 1,
    //             text: 'Play football',
    //             day: 'August 15th at 2:30pm',
    //             reminder: true,
    //         },

    //         {
    //             id: 1,
    //             text: 'Wash cloths',
    //             day: 'August 15th at 2:30pm',
    //             reminder: false,
    //         },

    //     ]
    // },   

    methods: {
        onClick(showAddTask) {
            this.showAddTask = !showAddTask
        },

        onDelete(id) {
            if (confirm('Are you sure?')) {
                this.tasks = this.tasks.filter((task) => task.id !== id)
            }
        },

        toggleReminder (id) {
            this.tasks = this.tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task)
        },

        onSubmit(e) {
            e.preventDefault()
            
            if(!this.text) {
                alert('Please add a task')
                return
            }
            const newTask = {
                id: Math.floor(Math.random() * 100000),
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }

             this.tasks = [...this.tasks, newTask]

             this.text = ''
             this.day = ''
             this.reminder = false
        }

    }
}).mount('#app')

// const app = vue.createApp({
// })

// app.mount('#app ')