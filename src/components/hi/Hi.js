import styles from './styles.module.scss'






export function Hi() {

    return (
        <div className={styles.Div}>
        <img  style={styles.img} src='https://image.flaticon.com/icons/png/512/4305/4305696.png' alt='img' />
        <div style={{dispaly:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
            <h1 className={styles.h1}>Hi Maria!</h1>
            <text style={styles.text}>Vervollstandige dein Profil und erhalte deine ersten PlanCo </text>
            <text style={styles.text}>Punkte!</text>
        </div>
        </div>
    )
}