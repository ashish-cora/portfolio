import styles from './About.module.css';
// import catCoderImage from '../../assets/coderCat1.webp';
// import catCoderImage from '../../assets/catcoder1.png';
// import catCoderImage from '../../assets/catcoder1_optimized_1000.png';
import catCoderImage from '../../assets/catcoder_smallSize.png';


const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.imageTitle}>
        <div className={styles.imageDiv}>
          <img src={catCoderImage} alt="Glowing Image" />
        </div>
        <div className={styles.titleDiv}>
          <h3>Hello! I am <br/> Ashish Maharjan. </h3>
          <h5>I'm a Frontend Developer</h5>
        </div>
      </div>
      <div className={styles.imageDescription}>
        <p>I'm a UI & UX focused developer who translates complex design mockups into pixel-perfect, interactive web applications. I bridge the gap between design and functionality, using JavaScript, HTML, and CSS to create accessible, fast, and delightful digital experiences.</p>
      </div>
    </div>
  )
}
export default About