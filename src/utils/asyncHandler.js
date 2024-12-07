// asyncHandler is a higher order function
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (func) => {}  --> passing a function
// const asyncHandler = (func) => { () => {} }   --> it is similar to below
// const asyncHandler = (func) => () => {}    --> further passing down the function
// const asyncHandler = (func) => async () => {}    --> making it async

// next is the parameter used for middlewares
/*
This is try-catch method
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
*/