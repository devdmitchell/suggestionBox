const mongoose = require('mongoose')
const app = require('./app')

const PORT = 3000

mongoose
    .connect("mongodb://localhost:27017/suggestion-box")
    .then(()=>{
        console.log('MONGODB CONNECTED.')
        app.listen(port, ()=>{                        
            console.log(`Server Started on port ${port}.`)
        })
    })
    .catch((e)=>{               
        console.log(eval)
    }
)
