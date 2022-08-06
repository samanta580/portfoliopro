const router=require('express').Router()
const nodemailer=require('nodemailer')



router.post('/contact',(req,res)=>{
    let data=req.body
    if (
        data.contact.name.length === 0 ||
        data.contact.message.length === 0 ||
        data.contact.email.length === 0
      ){
        return res.json({message:"please fill all fields"})

      }


        let smtpTransporter=nodemailer.createTransport({
            service:'Gmail',
            port:456,
            auth:{
                user:"samaneh.azhar@gmail.com",
                pass:'Sma@58099'
            }
        })

        let mailOptions={
            from:data.contact.email,
            to:'samaneh.azhar@gmail.com',
            subject:`message from ${data.contact.name}`,
            html:`
            <h3>Information</h3>
            <ul>
            <li>Name: ${data.contact.name}</li>
            <li>Email: ${data.contact.email}</li> 
            </ul>

            <h3>Message</h3>
            <p>${data.contact.message}</p>
            `
        }


smtpTransporter.sendMail(mailOptions,(error)=>{
    try{
        if(error) return res.status(400).json({message:"please fill all fields"})
        res.status(200).json({message:"Thank you for contacting Samaneh"})
   
    } catch(error){
        if(error) return res.status(500).json({message:"There is server error"})
    }
})

      
})



module.exports=router