import './Section.scss'

export default function Section() {
  return (
    <div className='container'>


      <div className='container-box1'>
        <p>Subscirbe to <br />our Newsletter</p>
      </div>
      <div className='container-box2'>
        <form>
          <input type="email" className='email' placeholder='Your Email Address' />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>

  )
}


