import "./views/profile-page/profile-page.js";
import "./views/settings-page/settings-page.js";
import "./views/pwd-change-page/password-change-page.js";
import "./components/nav-bar/nav-bar-in.js";
import "./components/footer/footer-in.js";
import { LitElement, html, css } from "lit";

export class MyApp extends LitElement {
  constructor() {
    super();
    this.isLoggedIn = {
      // isLoggedIn: // ! Get auth response if user is logged in or not
    };
    this.navBar = {
      // navBar: (navBar, isLoggedIn) => {
      //   this.isLoggedIn
      //     ? (navBar = <nav-bar-in></nav-bar-in>)
      //     : (navBar = <nav-bar-out></nav-bar-out>);
      //   return navBar;
      // },
    };
  }

  render() {
    return html`
      <nav-bar-in></nav-bar-in>
      <profile-page></profile-page>
      <footer-in></footer-in>
      <br />
      <nav-bar-in></nav-bar-in>
      <settings-page></settings-page>
      <footer-in></footer-in>
      <br />
      <nav-bar-in></nav-bar-in>
      <password-change-page></password-change-page>
      <footer-in></footer-in>
    `;
  }
}
customElements.define("my-app", MyApp);
