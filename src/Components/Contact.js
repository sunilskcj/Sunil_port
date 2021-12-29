import React, {useState} from 'react'
import "./Contact.css"
import axios from 'axios'
import $ from "jquery";

function Contact() {

const [data, setData] = useState({
    fname : '',
    email : '',
    msg :'',
})

const handleclick = (e) =>{
    e.preventDefault();
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData);
}




const handleSubmit = (e) =>{
    e.preventDefault();
   
    axios.post('/api/mail', {
        fname : data.fname,
        email : data.email,
        msg : data.msg
    }).then(res =>{
       if(res.data['status'] === 200){
        $('.checker').show()
       
       };
    })
    
}

    return (
        <div><br />
            <h2>Let's be in touch</h2>
            <p>If you want to say something about my work or share any ideas with me just drop it in here  </p><br /><br />
            <div className='contact_con' >
            <form  onSubmit={(e)=>handleSubmit(e)}>
  <label htmlFor="fname">Full name</label><br />
  <input  type="text" id="fname" name="fname" value={data.fname} onChange={handleclick} placeholder='Sunil skcj' /><br />
  <label htmlFor="lname">Mail id</label><br  />
  <input type="text" id="email" name="lname" value={data.email} onChange={handleclick} placeholder='sunilskcj@gmai.com'/><br />
  <label htmlFor='textarea' >Message</label><br /> 
  <textarea name="textarea" id='msg' rows="4" cols="50"  onChange={handleclick} value={data.msg}  placeholder='Say Hi !' />
  <div id='btn'><button className='talk' type='Submit'>Send</button></div>
</form>
<div className='checker'><img className='img_c' src='./checked.png' /><p>Your message is successfully sent</p></div>
            </div>
        </div>
    )
}

export default Contact
