import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-parent">
      <div className="footer-names">
        <div className='name-title'>
          Gilda Charles
        </div>
        <div>
          <a href="https://www.linkedin.com/in/gilda-charles-8a761b18b/">
            <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
              height='30'
              width='30'
            />
          </a>
        </div>
      </div>
      <div className="footer-names">
        <div className='name-title'>
          Talon Goulart
        </div>
        <div>
          <a href='https://www.linkedin.com/in/talon-00-goulart/'>
            <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
              height='30'
              width='30'
            />
          </a>
        </div>
      </div>
      <a href="https://github.com/timyoo25/kitchintory" className="github-link">
        <i className="fab fa-github"></i>
      </a>
      <div className="footer-names">
        <div className='name-title'>
          Will Metivier
        </div>
        <div>
          <a href='https://www.linkedin.com/in/willnolinmetivier/'>
            <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
              height='30'
              width='30'
            />
          </a>
        </div>
      </div>
      <div className="footer-names">
        <div className='name-title'>
          Tim Yoo
        </div>
        <div>
          <a href='https://www.linkedin.com/in/timothy-yoo/'>
            <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
              height='30'
              width='30'
            />
          </a>
        </div>
      </div>
    </div>
  );
}
