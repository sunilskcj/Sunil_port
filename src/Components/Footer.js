import React from 'react'

function Footer() {
    const d = new Date();
let year = d.getFullYear();
    return (
        <div id='paper'>
             <hr className='solid'/><br />
        <div className='Foot'>
          
            <div><h6>Address</h6><p className='foot_text'>Chennai, Tamil Nadu, India</p></div>
            <div><h6>Contact</h6><p className='foot_text'>+91 8754175920</p></div>
            <div><h6>Social</h6>
            
            <a href='mailto:sunilskcj@gmail.com' ><img id='soc' className='img_h' src="https://img.icons8.com/fluency/30/000000/gmail-new.png"/></a>
            <a href='https://github.com/sunilskcj' ><img id='soc' className='img_h' src="./github.png"/></a>
            <a href='https://www.instagram.com/skcj.dev/' ><img id='soc' className='img_h' src="https://img.icons8.com/color/35/000000/instagram-new--v1.png"/></a></div>
            
            
        </div><br />
        <hr className='solid'/>
        
        <p className='copy'>©Copyright {year} - <span className='cpyt'> Sunilcj</span> </p>
        </div>
    )
}

export default Footer
