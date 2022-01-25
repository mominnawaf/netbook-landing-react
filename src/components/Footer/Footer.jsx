import React, { Component } from "react";
import "./Footer.css";
import { Button, Input } from "@material-ui/core";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="left-content">
            <ul>
              <li>Home</li>
              <li>Community</li>
              <li>Events</li>
              <li>Collection</li>
              <li>Contact</li>
            </ul>
            <ul>
              <li>Home</li>
              <li>Community</li>
              <li>Events</li>
              <li>Collection</li>
              <li>Contact</li>
            </ul>
            <ul>
              <li>Home</li>
              <li>Community</li>
              <li>Events</li>
              <li>Collection</li>
              <li>Contact</li>
            </ul>
            <ul>
              <li>Home</li>
              <li>Community</li>
              <li>Events</li>
              <li>Collection</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="right-content">
            <h3>Subscribe Cirkle Newsletter</h3>
            <h5>
              Subscribe to be the first one to know about updates. Enter your
              email
            </h5>
            <input type={'text'} placeholder="Email Address"  className="email">
            </input>
          </div>
        </div>
      </div>
    );
  }
}
