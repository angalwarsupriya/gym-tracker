
import './index.css'

import React, { useEffect } from 'react';

import $ from 'jquery'; 
import './index.less';

function Features() {


  useEffect(() => { let zindex = 10; $('div.card').click(function (e) { e.preventDefault(); const isShowing = $(this).hasclassName('show'); if ($('div.cards').hasclassName('showing')) { $('div.card.show').removeclassName('show'); if (!isShowing) { $(this) .css({ zIndex: zindex }) .addclassName('show'); zindex++; } else { $('div.cards').removeclassName('showing'); } } else { $('div.cards').addclassName('showing'); $(this) .css({ zIndex: zindex }) .addclassName('show'); zindex++; } }); }, []);

  return (
    <section id='features-bg-con' classNameName="features-bg-con">
       <h2 classNameName='features-hea'>
          Discover Our App's Key Features
       </h2>
       

       <div className="cards">

<div className="card">
  <div className="card__image-holder">
    <img className="card__image" src="https://source.unsplash.com/300x225/?wave" alt="wave" />
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div className="card-flap flap1">
    <div className="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div className="card-flap flap2">
      <div className="card-actions">
        <a href="#" className="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div className="card">
  <div className="card__image-holder">
    <img className="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div className="card-flap flap1">
    <div className="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div className="card-flap flap2">
      <div className="card-actions">
        <a href="#" className="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div className="card">
  <div className="card__image-holder">
    <img className="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div className="card-flap flap1">
    <div className="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div className="card-flap flap2">
      <div className="card-actions">
        <a href="#" className="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div className="card">
  <div className="card__image-holder">
    <img className="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div className="card-flap flap1">
    <div className="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div className="card-flap flap2">
      <div className="card-actions">
        <a href="#" className="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div className="card">
  <div className="card__image-holder">
    <img className="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div className="card-flap flap1">
    <div className="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div className="card-flap flap2">
      <div className="card-actions">
        <a href="#" className="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div className="card">
  <div className="card__image-holder">
    <img className="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div className="card-flap flap1">
    <div className="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div className="card-flap flap2">
      <div className="card-actions">
        <a href="#" className="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div className="card">
  <div className="card__image-holder">
    <img className="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div className="card-flap flap1">
    <div className="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div className="card-flap flap2">
      <div className="card-actions">
        <a href="#" className="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div className="card">
  <div className="card__image-holder">
    <img className="card__image" src="https://source.unsplash.com/300x225/?underwater" alt="underwater" />
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div className="card-flap flap1">
    <div className="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div className="card-flap flap2">
      <div className="card-actions">
        <a href="#" className="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div className="card">
  <div className="card__image-holder">
    <img className="card__image" src="https://source.unsplash.com/300x225/?desert" alt="desert" />
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div className="card-flap flap1">
    <div className="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div className="card-flap flap2">
      <div className="card-actions">
        <a href="#" className="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

</div>



    </section>
  )
}

export default Features