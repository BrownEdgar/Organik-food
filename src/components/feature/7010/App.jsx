import './App.css'

export default function App() {
  return (
    <div className='container'>
      <img src="./background.jpg" alt="background" />
      <div className='section'>
           <div className='section-box1'>
             <p className='p'>Subscirbe to our Newsletter</p>
           </div>
           <input type="email" className='email' placeholder='Your Email Address'/>
           <button className='section-button'><p className='Subscribe'>Subscribe</p></button>
      </div>
    </div>
  )
}
