import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/precily', { useNewUrlParser: true , useUnifiedTopology: true })
.then(function(){
    console.log("Database connected")
})  
.catch((err) => {
    console.log(err.message)
  
})
