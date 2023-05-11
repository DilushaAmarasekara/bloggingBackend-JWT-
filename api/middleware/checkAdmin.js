const User = require('../../models/user')

const checkAdmin = async (req, res, next) => {
    console.log('inside checkadmin middleware')
    console.log('user from req is: ', req.user)
    const loggedUsername = req.user.username
    // console.log({loggedUsername})
    const loggedUser = await User.findOne({ username: loggedUsername })
    // console.log({loggedUser})

    if(loggedUser.role === "Admin"){
        return next()
    }
    //if the user isn't an admin return a 403
    return res.status(403).send("You are not an admin");
}

module.exports = checkAdmin