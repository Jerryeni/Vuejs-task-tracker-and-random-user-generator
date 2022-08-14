const { createApp } = Vue



createApp({
    
    // components: {
    //     vuejsDatepicker
    // },
    
    data() {
        return {

            title: 'Task tracker',
            subTitle: 'Saved tasks',
            text: '',
            day: '',
            datetime: '',
            reminder: false,
            showAddTask: false,
            user: "",


            tasks: [

                {
                    id: 1,
                    text: 'Doctors Appointment',
                    day: 'August 15th at 2:30pm',
                    user: 'Jerry Eni',
                    reminder: true,

                },

                {
                    id: 2,
                    text: 'Play football',
                    day: 'August 15th at 2:30pm',
                    user: 'Jerry Eni',
                    reminder: true,
                },

                {
                    id: 3,
                    text: 'Wash cloths',
                    day: 'August 15th at 2:30pm',
                    user: 'Jerry Eni',
                    reminder: false,
                },

            ]
            
        }
    },
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
                user: this.user,
                reminder: this.reminder
            }

             this.tasks = [...this.tasks, newTask]

             this.text = ''
             this.day = ''
             this.reminder = false
        }

    },


   
}).mount('#app')


