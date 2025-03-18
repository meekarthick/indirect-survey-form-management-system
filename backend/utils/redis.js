import redis from "redis"

const client = redis.createClient({
    socket : {
        host : "127.0.0.1",
        port : 6379,
    }
});

(async () =>{

    try {

        await client.connect("Connect", () =>{
            console.log("Connected Redis Server");
        });

        await client.set("key","Hello Redis"); 
        console.log("Set success");

        const value = await client.get("key");

        console.log(value);
        
    } catch (error) {
        console.log(error.message);
    }
})();


export default client;