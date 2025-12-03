import Cards from '../../components/Cards'
import styles from './Experience.module.css'
import techStackOriginal from '../../assets/techStackOriginal.png'
import Cv from '../../components/Cv';

const Experience = () => {
  const smtmCapital = {
    name: 'SMTM Capital',
    role: 'Frontend Developer',
    description : 'first job description',
    techStack: 'React, Next.js, Html, Css'
  };
  const miracleInterface = {
    name: 'Miracle Interface',
    role: 'Frontend Developer',
    description : 'second job description',
    techStack: 'Angular, Laravel, Postgres'
  }; 

  return (
    <div className={styles.experienceWrapper}>
        <h3>Experience</h3>
        <div className={styles.cardsContainer}>
          <Cards experience = {miracleInterface}/>
          <Cards experience = {smtmCapital}/>
          <div className={styles.hiddenGlowDiv}></div>
        </div>

        <div className={styles.hireMeWrapper}>
          <p className={styles.highlightedHireMe}> 
            I am actively seeking a full-time role
          </p>
          <p className={styles.hireMe}>
            where I can leverage my skills and drive tangible results. I am highly motivated and eager to be hired by a forward-thinking team. Let's connect and discuss how I can help your team succeed.
          </p>

          <div className={styles.techImageDiv}>
            <img src={techStackOriginal} alt="techStackImage" />
          </div>
        </div>

        <div className={styles.cvWrapper}>
          <Cv />
        </div>
    </div>
  )
}
export default Experience