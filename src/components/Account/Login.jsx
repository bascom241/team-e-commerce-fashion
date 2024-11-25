
import { Link } from 'react-router-dom'
import buyer from '../../images/buyer.jpg'
const Login= () => {
  return (
    <div className='h-[500px] flex justify-center items-center gap-16 mx-3 md:mx-[80px] mt-14 border'>
        <div ><img src={buyer} alt='sign-Up' 
        className='h-[500px] w-[577px] hidden md:flex' /></div>
        <div className='h-[500px] w-[577px]'>
            <h1 className='text-[40px] pt-14 md:pt-10 px-0 md:px-10'>Toshconsult</h1>
            <h3 className='text-2xl py-5 px-0 md:px-10'>Login</h3>

            <form className='pr-10 md:pr-[50px]'>

                <div className='flex flex-col md:flex-row gap-3 justify-center'>
                    <label>
                        <input type='email'name='email' 
                        placeholder='Enter your email' 
                        className='outline-none py-2 px-3 border-b' required/>
                    </label>
                    <label>
                        <input type='password'name='password' 
                        placeholder='password'
                        className='outline-none py-2 px-3 border-b'
                        required
                        />
                    </label>
                </div>
                <div className='flex justify-center py-4'>
                <button type="submit" className='bg-gray-500 hover:bg-white hover:border hover:text-black w-[100%] md:w-[40%] 
                py-3 rounded-xl text-white'>Login</button>
                </div>
            <p className='text-center pt-4 '>Don't have an account? <span className='font-bold'>
                <Link to="/signup"> Sign Up </Link> </span></p>
                <p className='font-bold text-center text-red-300'> <Link to="/reset">Forgot Password</Link> </p>
            </form>
        </div>

    </div>
  )
}
export default Login