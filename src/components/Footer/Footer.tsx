import styles from './Footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.openLink}>
        <a 
          href="https://github.com/ashish-cora" 
          target="_blank" 
          rel="noopener noreferrer"
          >
          <GitHubIcon/>
        </a>

        <a 
          href="https://www.linkedin.com/in/ashish-maharjan-521121277/" 
          target="_blank" 
          rel="noopener noreferrer"
          >
          <LinkedInIcon />
        </a>
      </div>

      <div className='info'> 
        <MailIcon />
        <PhoneIcon />
      </div>
    </div>
  )
}
export default Footer;