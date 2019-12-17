const jobs = [
    {id: 1, title: 'nodejs dev'},
    {id: 2, title: 'angular dev'}
]

module.exports.handler = async (event, context) => {

    // Find the job index 
    const jobIndex = jobs.findIndex(j => j.id == event.pathParameters.id)

    return {
        statusCode: 200,
        body: JSON.stringify({
            job: jobs[jobIndex]
        })
    }
}