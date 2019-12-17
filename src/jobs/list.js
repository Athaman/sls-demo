const jobs = [
    {id: 1, title: 'nodejs dev'},
    {id: 2, title: 'angular dev'}
]

module.exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            jobs
        })
    }
}