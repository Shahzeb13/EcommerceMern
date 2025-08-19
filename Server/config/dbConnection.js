import mongoose from 'mongoose';

export const ConnectToDatabase = async () => {
    try{
        await mongoose.connect(process.env.MongoDBURI , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("✅ MongoDB Connected Successfully!");
        
        // Handle graceful shutdown
        mongoose.connection.on('error', (err) => {
            console.error('❌ MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('⚠️ MongoDB disconnected');
        });

        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('🔄 MongoDB connection closed through app termination');
            process.exit(0);
        });

    } catch (err) {
        console.error(`❌ Error Connecting to Database: ${err.message}`);
        // Exit process if database connection fails
        process.exit(1);
    }
};