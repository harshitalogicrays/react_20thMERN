import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'
import 'dotenv/config'

const stripe = new Stripe(process.env.STRIPE_KEY)

const app = express()
app.use(express.json())
app.use(cors())
//http://localhost:4000
app.get('/',(req,res)=>{
    res.send({"message":"hello from nodejs server"})
})
 //http://localhost:4000/create-payment-intent
app.post('/create-payment-intent',async(req,res)=>{
    let {amount}=req.body
    try{
        const paymentIntents = await stripe.paymentIntents.create({
            amount,
            currency:"usd",
            payment_method_types:['card']
        })
        console.log(paymentIntents.client_secret)
        res.status(200).json({clientSecret:paymentIntents.client_secret})
    }
    catch(err){ res.status(500).json({message:err.message})}
})

let PORT = process.env.PORT || 2000
app.listen(PORT , ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})