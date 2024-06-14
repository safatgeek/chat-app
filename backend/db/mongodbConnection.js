import mongoose from "mongoose"


const connectToMongoDB = async () => {
    try {
        
        if(process.env.MONGO_DB_URL) {
            await mongoose.connect(process.env.MONGO_DB_URL)
            console.log("Connected to MOngoDB")
        } else {
            console.log("MONGO_DB_URL is not defined !")
        }

    } catch (error) {
        console.log("Error connecting to MongoDB", error.message)
    }
}

export default connectToMongoDB;