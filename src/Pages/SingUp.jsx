import { LuArrowUpRight } from 'react-icons/lu';
import singInImg from '../assets/images/singIn.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';


const SingUp = () => {

    const [showPass, setShowPass] = useState(false);
    const {createUser} = useContext(AuthContext);

    const Navigate = useNavigate();

    const handelCreateUser = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const photo = from.photo.value;

        if (!/^(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/.test(password)
        ) {
            Swal.fire({
                icon: 'error',
                title: "Password must be 6 characters, one uppercase and one spacial characters",
                showConfirmButton: false,
                timer: 2500
            });
            return;
        }

        createUser(email, password, name, photo)
            .then(res => {
                updateProfile(auth.currentUser, {
                    displayName: `${name}`, photoURL: `${photo}`
                })
                console.log(res.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate('/')
                
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2500
                })
            })


    }

    return (
        <div>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">Sing Up</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; <span className="text-[#fcb650]">Sing Up</span></p>
                    </div>
                </div>
            </div>
            <div className="hero px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div data-aos="fade-right" data-aos-duration="2000" className="flex-1">
                        <img src={singInImg} alt="" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className="card shrink-0 w-full shadow-2xl bg-base-100 flex-1">
                        <h4 className='px-8 text-2xl font-semibold text-[#222E48] mt-6 mb-3'>Welcome!</h4>
                        <h6 className='px-8 text-[#222E48] font-medium'>Sign up to your account and join us</h6>
                        <form onSubmit={handelCreateUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? 'text' : 'password'} name='password' placeholder="Enter Your Password" className="input input-bordered rounded-full" required />
                                <button onClick={() => setShowPass(!showPass)} className='absolute right-4 top-12'>
                                {
                                    showPass ? <IoMdEye className='text-[#074c3e] w-6 h-6'/> : <IoMdEyeOff className='text-[#074c3e] w-6 h-6'/>
                                }
                                </button>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Enter Your Photo Url" className="px-4 py-2.5 input input-bordered rounded-full mb-2" required />
                            </div>
                            <p className='mx-1 text-[#222E48]'>Do you have an account? <Link to='/singIn' className='text-[#074c3e] font-medium hover:underline'>
                                SignIn
                            </Link></p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn text-[#074c3e] text-start border border-[#074c3e] rounded-full px-6 py-3 flex items-center gap-4 hover:text-white hover:bg-[#074c3e]">
                                    Register
                                    <LuArrowUpRight className='w-6 h-6' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;