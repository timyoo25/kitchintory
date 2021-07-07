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
            <img className='linked-in'/>
          </a>
        </div>
      </div>
      <div className="footer-names">
        <div className='name-title'>
          Talon Goulart
        </div>
        <div>
          <a href='https://www.linkedin.com/in/talon-00-goulart/'>
            <img className='linked-in'/>
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
            <img className='linked-in'/>
          </a>
        </div>
      </div>
      <div className="footer-names">
        <div className='name-title'>
          Tim Yoo
        </div>
        <div>
          <a href='https://www.linkedin.com/in/timothy-yoo/'>
            <img className='linked-in'/>
          </a>
        </div>
      </div>
    </div>
  );
}
