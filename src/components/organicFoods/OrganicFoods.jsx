import { getAllOrganicFoods } from '../../features/organicFoodSlice'
import { useSelector } from "react-redux"
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BiSolidUser } from 'react-icons/bi'
import "./OrganicFoods.scss"

export default function OrganicFoods() {
  const organicFoods = useSelector(getAllOrganicFoods)
  return (
    <div className='container'>
      <p className='news'>News</p>
      <div className="info">
        <p className='title'>Discover weekly content about organic food, & more</p>
        <button className='btn'>More News <BsFillArrowRightCircleFill className='btn-icon'/></button>
      </div>
      <div className="item">
        {
          organicFoods.map(food=> {
            return(
              <div key = {food.id} className='item-cover'>
                <img src={food.image} alt="" />
                <span className='item-abs'>
                  <span className='text'>25 Nov</span>
                </span>
                <div className="item-info">
                  <div className="user">
                    <BiSolidUser className='user-icon'/>
                    <p className='user-name'> By Rachi Card</p>
                  </div>
                  <p className='user-title'>{food.title}</p>
                  <p className='user-info'>{food.desc}</p>
                  <button className='btn-yellow'>Read More <BsFillArrowRightCircleFill className='btn-icon'/></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
