const jobs = [
    {id: 1, title: 'nodejs dev'},
    {id: 2, title: 'angular dev'}
]

module.exports.handler = async (event, context) => {
    //  Add a new job into the existing jobs array.

    jobs.push(JSON.parse(event.body));

    return {
        statusCode: 200,
        body: JSON.stringify({
            jobs
        })
    }
}