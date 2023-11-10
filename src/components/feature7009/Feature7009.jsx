import './Feature7009.scss'
import logo from '../../assets/MOrganik.jpg'

export default function Feature7009() {
    return (
        <div className='Organik'>
            <img src={logo} alt="organik img" className='Organik-image' />
            <div className='Organik-box'>
            </div>
            <div className='Organik-titlebox'>
                <p className='Organik-title'>Eco Friendly</p>
                <p className='Organik-econis'>Econis is a Friendly Organic Store</p>
                <div className='Organik-childbox'>
                    <p className='Organik-childtitle'>Start with Our Company</p>
                    <p className='Organik-childtext'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                </div>
                <div className='Organik-childbox'>
                    <p className='Organik-childtitle'>Learn How to Grow Yourself</p>
                    <p className='Organik-childtext'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                </div>
                <div className='Organik-childbox'>
                    <p className='Organik-childtitle'>Farming Strategies of Today</p>
                    <p className='Organik-childtext'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                </div>
            </div>
        </div>
    )
}