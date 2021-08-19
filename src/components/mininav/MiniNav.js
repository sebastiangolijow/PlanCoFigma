import styles from './mininav.module.scss'



export function MiniNav() {
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
    return (
        <div className={styles.Div}>
           <h3 className={styles.time}><strong>{hour + ':' + minutes}</strong></h3>  
            <div style={{display:'flex', flexDirection:'row'}}> 
           <img className={styles.Img} src='https://image.flaticon.com/icons/png/512/633/633977.png' alt='img'/>
           <img className={styles.Img} src='https://image.flaticon.com/icons/png/512/254/254613.png' alt='img'/>
           <img className={styles.Img} src='https://image.flaticon.com/icons/png/512/1176/1176900.png' alt='img'/>
           </div>
        </div>
    )
}