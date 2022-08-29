import React, { FC } from "react";
import { Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TitleIcon from "@mui/icons-material/Title";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <div className="footer__inner">
          <div className="footer__img">
            <img
              height="130px"
              width="220px"
              src="https://gamerwall.pro/uploads/posts/2021-11/1637889849_1-gamerwall-pro-p-marvel-studiya-logotip-oboi-na-rabochii-st-1.jpg"
              alt="@"
            />
          </div>
          <div className="footer__follow">
            <p>Follow Marvel</p>
            <div className="footer__icons">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <TitleIcon />
              <YouTubeIcon />
              <TelegramIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div className="footer__info">
          <p className="footer__info-text">Terms of Use</p>
          <p className="footer__info-text">Privacy Policy</p>
          <p className="footer__info-text">Your California Privacy Rights</p>
          <p className="footer__info-text">
            Do Not Sell My Personal Information
          </p>
          <p className="footer__info-text">Children's Online Privacy Policy</p>
          <p className="footer__info-text">License Agreement</p>
          <p className="footer__info-text">Interest-Based Ads</p>
          <p className="footer__info-text">Marvel Insider Terms</p>
          <p className="footer__info-text">@2022 MARVEL</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
