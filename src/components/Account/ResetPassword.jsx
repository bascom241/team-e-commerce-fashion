
import { Link } from 'react-router-dom'
import buyer from '../../images/buyer.jpg'
const ResetPassword = () => {
  return (
    <div className='h-[500px] flex justify-center items-center gap-16 mx-3 md:mx-[80px] mt-14 border'>
        <div ><img src={buyer} alt='sign-Up' 
        className='h-[500px] w-[577px] hidden md:flex' /></div>
        <div className='h-[500px] w-[577px]'>
            <h1 className='text-[40px] pt-14 md:pt-10'>Toshconsult</h1>
            <h3 className='text-2xl py-5 '>Reset Your Password</h3>

            <form className='pr-10 md:pr-[50px]'>

                <div className='flex flex-col md:flex-row gap-3'>
                    <label>
                        <input type='email'name='email' 
                        placeholder='Enter your email' 
                        className='outline-none py-2 px-3 border-b' required/>
                    </label>
                   
                </div>
                <div className='py-4'>
                <button type="submit" className='bg-gray-500 hover:bg-white hover:border hover:text-black  w-[100%] md:w-[40%] 
                py-3 rounded-xl text-white'>Reset Password</button>
                </div>
            <p className=' pt-2 px-0 md:px-16 '> <span className='font-bold'>
                <Link to="/login"> Login </Link> </span></p>
            </form>
        </div>

    </div>
  )
}
export default ResetPassword