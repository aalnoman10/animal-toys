import logo from '../../../assets/toy.png';
import { Link } from 'react-router-dom';
import { SiFacebook, SiYoutube } from 'react-icons/si';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {

    return (
        <div className='bg-neutral p-10'>
            <footer className="footer text-neutral-content">
                <div>
                    <h3 className="footer-title text-center font-semibold">Animal toys</h3>
                    <img className='w-32 text-center rounded' src={logo} alt="logo" />
                </div>
                <div>
                    <div className='pb-5'>
                        <h4 className="footer-title">contact</h4>
                        <p><strong className='font-semibold'>Tel : </strong><span className='link-hover'>01821178159</span></p>
                        <p><strong className='font-semibold'>Email : </strong><span className='link-hover'>alnomanm10@gmail.com</span></p>
                    </div>
                    <div>
                        <h4 className="footer-title">Address</h4>
                        <p> North Joara, Chandanaish, Chattagram</p>
                    </div>
                </div>
                <div>
                    <div className='pb-5'>
                        <span className="footer-title text-center">social media</span>
                        <div>
                            <button className='m-2'><SiFacebook size={26} /></button>
                            <button className='m-2'><AiFillInstagram size={26} /></button>
                            <button className='m-2'><SiYoutube size={26} /></button>
                            <button className='m-2'><AiFillLinkedin size={26} /></button>
                        </div>
                    </div>
                    <div>
                        <h4 className="footer-title">Useful Link</h4>
                        <p className='p-1'><Link className="link link-hover" to='/'>Home</Link></p>
                        <p className='p-1'><Link className="link link-hover" to='/all-toys'>All Toys</Link></p>
                        <p className='p-1'><Link className="link link-hover" to='/blogs'>Blogs</Link></p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <p className="text-center text-gray-400 font-semibold pt-5">&copy; Copyright by Animal Toys - 2023</p>
        </div>
    );
};

export default Footer;