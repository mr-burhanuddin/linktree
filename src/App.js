import './App.css';
import Links from './Links';
import linkedin from './icons/linkedin.png';
import relax from './icons/relax.png';
import github from './icons/github.png';
import snapchat from './icons/snapchat.png';
import whatsapp from './icons/whatsapp.png';
import instagram from './icons/instagram.png';
import twitter from './icons/twitter.png';
import AvatarImg from './icons/AvatarMaker.svg';

function App() {
  return (
    <div className='app'>
      <div className='app__profile'>
        <img className='app__img' src={AvatarImg} alt='img' />
        <h3 className='app__name'>@Burhanuddin</h3>
      </div>
      <div className='link__appContainer'>
        <Links
          path='https://www.linkedin.com/in/burhanuddin-presswala-689925201/'
          logo={linkedin}
          alt='Linkedin'
        />
        <Links
          path='https://mr-burhanuddin.netlify.app/'
          logo={relax}
          alt='Portfolio'
        />
        <Links
          path='https://github.com/mr-burhanuddin'
          logo={github}
          alt='Github'
        />
        <Links
          path='https://www.snapchat.com/add/mr-burhanuddin?share_id=FqUqsQA0dCQ'
          logo={snapchat}
          alt='Snapchat'
        />

        <Links
          path='https://www.instagram.com/mr.burhanuddin/'
          logo={instagram}
          alt='Instagram'
        />
        <Links
          path='https://twitter.com/mr_burhanuddin_'
          logo={twitter}
          alt='Twitter'
        />
        <Links
          path='https://socialfinds.xyz/wp-content/uploads/2021/02/13-Sunday-ko-mast-naha-dho-ke-aa-featured.jpg'
          logo={whatsapp}
          alt='Whatsapp'
        />
      </div>
    </div>
  );
}

export default App;
