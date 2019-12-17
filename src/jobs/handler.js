module.exports.handler=async (event, context) => {
    console.log(event);
    console.log(context);
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            "name": "Nodejs dev job function",
            event
        })
    };
}