import type {FC} from "react"
import {Link} from "react-router";
import Logo from "@/shared/ui/Logo";
import SvgIcon from "@/shared/ui/SvgIcon";
import "./Footer.pcss"

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <div className="footer__categories">
            <ul className="footer__categories-list">
              <li className="footer__categories-item">
                <Link className="footer__categories-link text text--gray text--gilroy" to={`/`}>
                  Privacy Policy
                </Link>
              </li>
              <li className="footer__categories-item">
                <Link className="footer__categories-link text text--gray text--gilroy" to={`/`}>
                  Terms & Conditions
                </Link>
              </li>
              <li className="footer__categories-item">
                <Link className="footer__categories-link text text--gray text--gilroy" to={`/`}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__main">
            <Logo className="footer__logo"/>
          </div>
          <address className="footer__contacts">
            <ul className="footer__contacts-list">
              <li className="footer__contacts-item">
                <Link
                  className="footer__contacts-link text text--gray text--gilroy"
                  aria-label="go to facebook"
                  to={`/`}
                >
                <span className="footer__contacts-wrapper-icon" title="to facebook">
                  <SvgIcon className="footer__contacts-icon" name="facebook"/>
                  <SvgIcon className="footer__contacts-icon is-color" name="facebook_color"/>
                </span>
                </Link>
              </li>
              <li className="footer__contacts-item">
                <Link
                  className="footer__contacts-link text text--gray text--gilroy"
                  aria-label="go to twitter"
                  to={`/`}
                >
                <span className="footer__contacts-wrapper-icon" title="to twitter">
                  <SvgIcon className="footer__contacts-icon" name="twitter"/>
                  <SvgIcon className="footer__contacts-icon is-color" name="twitter_color"/>
                </span>
                </Link>
              </li>
              <li className="footer__contacts-item">
                <Link
                  className="footer__contacts-link text text--gray text--gilroy"
                  aria-label="go to youtube"
                  to={`/`}
                >
                <span className="footer__contacts-wrapper-icon" title="to youtube">
                  <SvgIcon className="footer__contacts-icon" name="youtube"/>
                  <SvgIcon className="footer__contacts-icon is-color" name="youtube_color"/>
                </span>
                </Link>
              </li>
              <li className="footer__contacts-item">
                <Link
                  className="footer__contacts-link text text--gray text--gilroy"
                  aria-label="go to instagram"
                  to={`/`}
                >
                <span className="footer__contacts-wrapper-icon" title="to instagram">
                  <SvgIcon className="footer__contacts-icon" name="instagram"/>
                  <SvgIcon className="footer__contacts-icon is-color" name="instagram_color"/>
                </span>
                </Link>
              </li>
            </ul>
          </address>
        </div>
        <small className="footer__copy text text--gray-light text--small">
          ©2022 All rights reserved. Powered by Atla
        </small>
      </div>
    </footer>
  )
}

export default Footer