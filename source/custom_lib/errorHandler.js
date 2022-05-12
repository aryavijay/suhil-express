function errorHandler(err, req, res, next) {

    switch (err.message) {
        case 'CUSTOM_ERROR':
            customErrorHandling(err, req, res, next)
            break
        default:
            defaultErrorHandling(err, req, res, next)
    }

}

function customErrorHandling(err, req, res, next) {
    const name = "CUSTOM"
    return res.send({ error: true, "from": "Error custom Handler", err, name })
}
function defaultErrorHandling(err, req, res, next) {
    const name = "DEFAULRT"
    return res.send({ error: true, "from": "Error default Handler", err, name })
}

module.exports = {
    errorHandler
}