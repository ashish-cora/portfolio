import styles from './cards.module.css'
interface ExperienceType{
    experience: {
        name: string,
        role: string,
        description: string,
        techStack: string
    }
}

const Cards = (props: ExperienceType) => {
    console.log("props=>>>>>", props.experience);
    
  return (
    <div className={styles.cardDiv}>
        <h4>Company: {props.experience.name}</h4>
        <h5>Role: {props.experience.role}</h5>
        <p>Description: {props.experience.description}</p>
        <h6>Technology used: {props.experience.techStack}</h6>
    </div>
  )
}
export default Cards;