const express = require('express');
const mongoose = require('mongoose');
const { authMiddleware } = require('../middleware/auth');
const { Account } = require('../db');
const { validateTransfer } = require('../middleware/account');

const router = express.Router();


router.get('/balance', authMiddleware, async (req,res)=>{
    const account = await Account.findOne({
        userId : req.userId
    });

    return res.json({
        balance: account.balance/100
    })
})

router.post('/transfer', authMiddleware, validateTransfer, async (req, res)=>{
    const session = await mongoose.startSession();
    // start transaction
    session.startTransaction();
    const {amount, to} = req.body;

    // getting from account
    const account = await Account.findOne({userId : req.userId}).session(session);

    if(!account || account.balance < amount * 100){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    // getting to account
    const toAccount = await Account.findOne({userId : to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform transaction
    await Account.updateOne({userId: req.userId}, {$inc : {balance: -(amount*100)}}).session(session);
    await Account.updateOne({userId: to}, {$inc:{balance: amount*100}}).session(session);

    //Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
});

module.exports = router;