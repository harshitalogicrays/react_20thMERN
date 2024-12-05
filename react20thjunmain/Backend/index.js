import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'
import 'dotenv/config'
import nodemailer from 'nodemailer'
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

//mail 
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user:`${process.env.USER}`,
      pass:"wzlj lwkg mbfu xkmj",
    },
  });

  app.post('/mail',async(req,res)=>{
    let {email,name,status,amount,payment} =  req.body
    try{
        const info = await transporter.sendMail({
            from: '"Admin" <harshita.logicrays@gmail.com>', // sender address
            to: email, // list of receivers
            subject: `your order has been ${status}`, // Subject line
            html: `Hello ${name} <br/>
                        <b>Thank you for ordering from us </b><br> Amount = ${amount}<br/>
                          Order Status : ${status}<br/>
                          Payment:${payment}<br/>
                          Thank You<br/>Admin `, // html body
          });
        res.send({message:"Mail Sent Successfully"})
    }
    catch(err){
        res.status(500).json({message:"something went wrong"})
    }
  })

let PORT = process.env.PORT || 2000
app.listen(PORT , ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})