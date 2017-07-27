import React, { Component } from 'react';
import './Overlay.css';

export const Overlay = () => (
  <div class="overlay overlay-message">
    <div class="inner align-center col-xsm-11 col-sm-11 col-md-9 col-lg-7 col-xlg-5">

      <div class="choke">
        <h2>Hello there.</h2>
        <br></br>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      </div>

    </div>

    <div class="overlay-close">
      <div class="inner">
        <span class="one"></span>
        <span class="two"></span>
      </div>
    </div>

  </div>
)
