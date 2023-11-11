import './Subscribe.scss'

export default function Subscribe() {
  return (
    <div className='Subscribe'>


      <div className='Subscribe-box1'>
        <p>Subscirbe to <br />our Newsletter</p>
      </div>
      <div className='Subscribe-box2'>
        <form>
          <input type="email" className='email' placeholder='Your Email Address' />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>

  )
}


