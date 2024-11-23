import { Link } from 'react-router-dom';
import buyer from '../../images/buyer.jpg'
const Signup= () => {
  return (
    <div className='h-[500px] flex justify-center items-center gap-16 mx-3 md:mx-[80px] mt-5 md:mt-14 border'>
        <div ><img src={buyer} alt='sign-Up' 
        className='h-[500px] w-[577px] hidden md:flex' />
        </div>

        <div className='h-[500px] w-[577px]'>
            <h1 className='text-[40px] pt-0 md:pt-10 px-0 md:px-10'>Toshconsult</h1>
            <h3 className='text-2xl py-5 px-0 md:px-10'>Creat Account</h3>

            <form className='pr-10 md:pr-[50px]'>

                <div className='flex flex-col md:flex-row gap-3 justify-center'>
                    <label>
                        <input type='text'name='first-name' 
                        placeholder='First Name' 
                        className='outline-none py-2 px-3 border-b' required/>
                    </label>
                    <label>
                        <input type='text'name='last-name' 
                        placeholder='Last Name'
                        className='outline-none py-2 px-3 border-b'
                        required
                        />
                    </label>
                </div>

                <div className='flex flex-col md:flex-row  gap-3 py-8 justify-center'>
                    <label>
                        <input type='email'name='email' 
                        placeholder='Email' 
                        className='outline-none py-2 px-3  border-b  ' required/>
                    </label>
                    <label>
                        <input type='number'name='number' 
                        placeholder='Phone Number'
                        className='outline-none py-2 px-3 border-b  ' required
                        />
                    </label>
                </div>

                <div className='flex flex-col md:flex-row  gap-3 pb-8 justify-center'>
                    <label>
                        <input type='password'name='password' 
                        placeholder='Password' 
                        className='outline-none py-2 px-3  border-b ' required/>
                    </label>
                    <label>
                        <input type='password'name='confirm-password' 
                        placeholder='Confirm Password'
                        className='outline-none py-2 px-3 border-b ' required
                        />
                    </label>
                </div>
                <div className='flex justify-center'>
                <button type="submit" className='bg-gray-500 w-[100%] md:w-[40%] py-3 rounded-xl text-white'>Create Account</button>
                </div>
            <p className='text-center pt-4 '>Already have an account? 
                <span className='font-bold'><Link to="/login"> Login </Link> </span></p>
            </form>
        </div>

    </div>
  )
}
export default Signup