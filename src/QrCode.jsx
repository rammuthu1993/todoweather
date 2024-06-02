import './QrCode.css'
import qrcode from './assets/qr.png'
import { useState } from 'react'

function QrCode(){
    const [img,setImg] = useState(qrcode)
    const [data,setData] = useState("Muthu.in")
    const [update,setUpdate] = useState("")
    const [size,setSize] = useState("150")
    const [loading,setLoading] = useState(false)
    
    const generateQr=()=>{
        setLoading(true)
        

        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${data}`

       try{
        setImg(url)
       }
       catch(err){
        console.log(err);
        }
        setLoading(false)
        
    }  

    const downloadQr=()=>{
        fetch(img)
        .then((result)=> result.blob())
        .then((blob)=> {const link = document.createElement('a')
         link.href = URL.createObjectURL(blob)
         console.log(link.href);
         link.download = data
         console.log(link);
         document.body.appendChild(link)
         link.click()
         document.body.removeChild(link)
        }
    )
    }

return (
    <>
    <div className='head'>
      <div><p>Your QR code here!</p>
      {loading && <p>Loading...</p>}</div> <br />    
      <div><img src={img} alt="QrCodeimg" />
      <p>{data}</p>
      </div> <br /> <br />
      <div><label htmlFor="qrcode">Enter Your Details:</label>&nbsp; <br />
      <input type="text" id='qrcode' value={data} onChange={(e)=> setData(e.target.value)}/></div> <br />
      <div><label htmlFor="size">Enter Size:</label>&nbsp; <br />
      <input type="text" id="size" value={size} onChange={(e)=> setSize(e.target.value)}/></div>
      <br/>
        <div><button onClick={generateQr}>Generate QR Code</button>&nbsp;<button onClick={downloadQr}>Download QR Code</button></div>
    </div>
    </>
)
}

export default QrCode