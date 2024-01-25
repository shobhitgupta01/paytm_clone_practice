const zod = require('zod');

const validateTransfer = (req, res, next) =>{
    const transferSchema = zod.object({
        to : zod.string(),
        amount: zod.number(),
    });

    const parsedRes = transferSchema.safeParse(req.body);
    if(parsedRes.success){
        req.body = parsedRes.data;
        next();
        return
    }
    else{
        return res.status(400).json({
            message : "Invalid request"
        });
    }
}

module.exports = {
    validateTransfer
}