const {
    exec
} = require('child-process')

module.exports = (filename) => {
    exec('echo Samatha',(error, stdout, stderror) => {
        if (error)
        {
            console.error(error)
            return
        }
        console.log(stdout)
        

    })
}