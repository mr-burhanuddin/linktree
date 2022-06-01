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

import React, { useEffect } from 'react';

function init() {
  var Canvas = document.getElementById('canvas');
  var ctx = Canvas.getContext('2d');

  var resize = function () {
    Canvas.width = Canvas.clientWidth;
    Canvas.height = Canvas.clientHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  var elements = [];
  var presets = {};

  presets.o = function (x, y, s, dx, dy) {
    return {
      x: x,
      y: y,
      r: 12 * s,
      w: 5 * s,
      dx: dx,
      dy: dy,
      draw: function (ctx, t) {
        this.x += this.dx;
        this.y += this.dy;

        ctx.beginPath();
        ctx.arc(
          this.x + +Math.sin((50 + x + t / 10) / 100) * 3,
          this.y + +Math.sin((45 + x + t / 10) / 100) * 4,
          this.r,
          0,
          2 * Math.PI,
          false
        );
        ctx.lineWidth = this.w;
        ctx.strokeStyle = '#EC994B';
        ctx.stroke();
      },
    };
  };

  presets.x = function (x, y, s, dx, dy, dr, r) {
    r = r || 0;
    return {
      x: x,
      y: y,
      s: 20 * s,
      w: 5 * s,
      r: r,
      dx: dx,
      dy: dy,
      dr: dr,
      draw: function (ctx, t) {
        this.x += this.dx;
        this.y += this.dy;
        this.r += this.dr;

        var _this = this;
        var line = function (x, y, tx, ty, c, o) {
          o = o || 0;
          ctx.beginPath();
          ctx.moveTo(-o + (_this.s / 2) * x, o + (_this.s / 2) * y);
          ctx.lineTo(-o + (_this.s / 2) * tx, o + (_this.s / 2) * ty);
          ctx.lineWidth = _this.w;
          ctx.strokeStyle = c;
          ctx.stroke();
        };

        ctx.save();

        ctx.translate(
          this.x + Math.sin((x + t / 10) / 100) * 5,
          this.y + Math.sin((10 + x + t / 10) / 100) * 2
        );
        ctx.rotate((this.r * Math.PI) / 180);

        line(-1, -1, 1, 1, '#F1EEE9');
        line(1, -1, -1, 1, '#F1EEE9');

        ctx.restore();
      },
    };
  };

  for (var x = 0; x < Canvas.width; x++) {
    for (var y = 0; y < Canvas.height; y++) {
      if (Math.round(Math.random() * 8000) === 1) {
        var s = (Math.random() * 5 + 1) / 10;
        if (Math.round(Math.random()) === 1)
          elements.push(presets.o(x, y, s, 0, 0));
        else
          elements.push(
            presets.x(
              x,
              y,
              s,
              0,
              0,
              (Math.random() * 3 - 1) / 10,
              Math.random() * 360
            )
          );
      }
    }

    setInterval(function () {
      ctx.clearRect(0, 0, Canvas.width, Canvas.height);

      var time = new Date().getTime();
      for (var e in elements) elements[e].draw(ctx, time);
    }, 10);
  }
}

function App() {
  useEffect(() => {
    return init();
  }, []);
  return (
    <span>
      <div style={{ position: 'absolute', zIndex: 3 }} className='app'>
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
      <canvas
        style={{
          position: 'absolute',
          zIndex: 0,
        }}
        id='canvas'
      ></canvas>
    </span>
  );
}

export default App;
