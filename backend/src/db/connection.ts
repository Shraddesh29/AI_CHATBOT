import {connect,disconnect} from 'mongoose';
async function connectToDatabase(){
    try{
        await connect(process.env.MONGODB_URL);
    }catch(error){
        throw new Error("cannot connect To mongoDB");
    }

} 

async function disconnectFromDatabase() {
    try{
        await disconnect();
    }catch(error){
        throw new Error("cannot connect To mongoDB");
    }
}

export {connectToDatabase,disconnectFromDatabase};