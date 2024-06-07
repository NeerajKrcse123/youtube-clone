import asyncHandler from "../utils/asyncHandler.js";
console.log('Setting up user routes');
const userRegister = asyncHandler(async (req, res) => {
    console.log('Setting up user routes');
    res.status(200).json({
        message: "user registered successfully"
    })
})
export { userRegister };
