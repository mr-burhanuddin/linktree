import "./App.css";
import Links from "./Links";
import linkedin from "./icons/linkedin.png";
import relax from "./icons/relax.png";
import github from "./icons/github.png";
import snapchat from "./icons/snapchat.png";
import whatsapp from "./icons/whatsapp.png";
import instagram from "./icons/instagram.png";
import twitter from "./icons/twitter.png";

function App() {
  return (
    <div className="app">
      <div className="app__profile">
        <img
          className="app__img"
          src="https://lh3.googleusercontent.com/Gp0a4Uh9AeD697KgC7t3bvaZN6ufG3EjOOO3cPoxlx8CEqm3bvJ6v79ibKUrbqlQY_4DSE-40euj7OyKVFd7-dU9m8nSMARHeXS4DCpQcSPCrELARTwhzmI_DpFUsQeToscHG_JHT8yKJOxKCTX1acMRM5RsRfuKrq2YJ903L-Qy0wb9R3_WKEIw1lA20dT1KrCkQVqTrTwH26xDkIK9-0nBKeNj1QQT5Mfg1WLUeR_8XcHT8VOqrpsxWWNXkPcaw9k4KFEF6hbtV_9jYztQwgTnSuRwuYGoLsq_QBno6_HoVwQ4e4XSPo5TYk8zFV7h9HWJtenOA0ZikHNI-9fsFeDElXX7-ntLkYoiAMNq28xcbnso8yyNnef-GSnxRAG43g6cQGHZC0XRaAORNW2XZTP66bev1O6qRZhbCLH9j8dLf-LRJPYLxS8IMaBSFS6S8JZXrLei1ZTCN8TSBnF4OKpgN6d2k6jt0ZWiXFZYqNqdNeYtTIkKfqO7dbrWALmpNdU-Yd2ALy8EmPBmN6rzaHzCpFc2ndRLohRCXvp3c_MM8EgSbOcECIttSzSSh1LwGAE4A1R-gHEs1HGj3orjsFQjumxoWem2vnkPtt27wWslGkQ0ZWkVkh6U4eVhSH-tioY0CW-u0676d3OyWhsYykrRIFkDhoD8PMs4a9bTDhL5QODExJcbD0BGvEFMwDSZKxuG-gnT-rHiuDF-x64f6gLk=w853-h645"
          alt="img"
        />
        <h3 className="app__name">@Burhanuddin</h3>
      </div>
      <div className="link__appContainer">
        <Links
          path="https://www.linkedin.com/in/burhanuddin-presswala-689925201/"
          logo={linkedin}
          alt="Linkedin"
        />
        <Links
          path="https://mr-burhanuddin.netlify.app/"
          logo={relax}
          alt="Portfolio"
        />
        <Links
          path="https://github.com/mr-burhanuddin"
          logo={github}
          alt="Github"
        />
        <Links
          path="https://i.extraimages.net/images/2021/04/09/snapcodeBitmoji.jpg"
          logo={snapchat}
          alt="Snapchat"
        />

        <Links
          path="https://www.instagram.com/mr.burhanuddin/"
          logo={instagram}
          alt="Instagram"
        />
        <Links
          path="https://twitter.com/I_M_burhanuddin"
          logo={twitter}
          alt="Twitter"
        />
        <Links
          path="https://socialfinds.xyz/wp-content/uploads/2021/02/13-Sunday-ko-mast-naha-dho-ke-aa-featured.jpg"
          logo={whatsapp}
          alt="Whatsapp"
        />
      </div>
    </div>
  );
}

export default App;
