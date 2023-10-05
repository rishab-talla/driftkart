import { size } from 'lodash';
import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
   return (
      <>
         <footer className='footer'>
            <div className='container'>
               <div className='footer-content'>
                  <div className='footer-logo'>
                     <Link to='/'>
                        <p className='footer-logo'>DriftKart</p>
                     </Link>
                  </div>
                  <div className='footer-copyright'>
                     <p className='footer-copyright-txt'>© 2023, DriftKart.</p>
                  </div>
               </div>
               <div className='footer-icons'>
                  <div>
                     <a
                        className='footer-icon'
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/duhbhavesh'>
                        <i className='fab fa-github'></i>
                        <p className='p-font'>Github</p>
                     </a>
                  </div>
                  <div>
                     <a
                        className='footer-icon'
                        target='_blank'
                        rel='noreferrer'
                        href='https://twitter.com/duhbhavesh'>
                        <i className='fab fa-twitter'></i>
                        <p className='p-font'>Twitter</p>
                     </a>
                  </div>
                  <div>
                     <a
                        className='footer-icon'
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/bhavesh-kasturi/'>
                        <i className='fab fa-linkedin'></i>
                        <p className='p-font'>Linkedin</p>
                     </a>
                  </div>

                  <div>
                     <a
                        className='footer-icon'
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/bhavesh-kasturi/'>
                        <i className='fab fa-instagram'></i>
                        <p className='p-font'>Instagram</p>
                     </a>
                  </div>

                  <div>
                     <a
                        className='footer-icon'
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/bhavesh-kasturi/'>
                        <i className='fab fa-telegram'></i>
                        <p className='p-font'>Telegram</p>
                     </a>
                  </div>


               </div>
            </div>
         </footer>
      </>
   );
};
