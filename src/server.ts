import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function tourServer() {
 try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
        console.log(`server started successfully 🏃‍♂️ this port is ${config.port}`)
      })
 } catch (error) {
    console.log(error);
    
 }
}
tourServer()
