import styles from "./Footer.module.css";
import YoutubeIcon from "./../UI/icons/YoutubeIcon";
import VKIcon from "./../UI/icons/VKIcon";
import TelegramIcon from "./../UI/icons/TelegramIcon";

const Footer = () => {
   return (
      <footer className={[styles.footer, "wrapper"].join(" ")}>
         <div className={styles.content}>
            <div className={styles.info}>
               <p>{"8 (800) 100-00-24"}</p>
               <p>post@vsuet.ru</p>
            </div>
            <div className={styles.socials}>
               <a href="https://vk.com/vsuet_official" target="_blank">
                  <VKIcon />
               </a>
               <a href="https://t.me/vsuet_official" target="_blank">
                  <TelegramIcon />
               </a>
               <a
                  href="https://www.youtube.com/channel/UC05dQrTQn-Utpl77I7euY0Q/videos"
                  target="_blank"
               >
                  <YoutubeIcon />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
