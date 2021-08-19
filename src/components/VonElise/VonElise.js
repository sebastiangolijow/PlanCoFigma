import styles from './vonelise.module.scss'

const styleDiv = {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    margin:'20px',
    alignSelf:'flex-start',
}

const styleDivB = {
    display:'flex',
    flexDirection: 'column',
    borderRadius:'9px',
    border:'solid',
    borderWidth:'0.5px',

    borderColor:'gray',
    marginRight:'10px',
    marginLeft:'10px',
    height:'15rem',
    width:'80%',
    alignSelf:'center'
}

const imgB = {
    height:'40%',
    width:'20%',
    padding:'10px',
    alignSelf:'flex-start'
}

const img = {
    height:'20%',
    width:'20%',
    borderRadius:'999px',
    alignSelf:'flex-start'
}
const vonH = {
    color:'grey',
    fontWeight:'50',
    marginTop:'-10px'
}


export function VonElise() {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <img style={img} src='https://image.flaticon.com/icons/png/512/3011/3011278.png' alt='img' />
                <div style={{display:'flex', flexDirection:'column', position:'relative', bottom:'3.5rem'}}>
                    <h3 style={vonH}>von Elise</h3>
                    <h3 style={vonH}>vor 3 Stunden</h3>
                </div>
            </div>
            <div style={styleDivB}>
                <h1> Suche Mathe Nachhilfe </h1>
                <text>
                   Fur meinem Sohn (8. Klasse). Hat jemand eine Empfehlung?
                </text>
                <button className={styles.styleButton}>Helfen</button>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', borderTop:'solid', borderColor:'grey'}}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <h4  className={styles.h4}>1 Antwort</h4>
               
                <div>
                <img className={styles.imga} src='https://as2.ftcdn.net/v2/jpg/01/25/83/03/500_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg' alt="img heart" />
                <img className={styles.imga} src='https://as2.ftcdn.net/v2/jpg/03/67/93/63/500_F_367936349_4H14BmKX3KqIhqvkpjAdm8HFo0LQcXQX.jpg' alt="img heart" />
                </div>
                </div>           
                </div>
            </div>
      
            <div style={styleDiv}>
                <img style={img} src='https://image.flaticon.com/icons/png/512/3011/3011536.png' alt='img' />
                <div style={{display:'flex', flexDirection:'column', position:'relative', top:'2rem', marginLeft:'2rem'}}>
                <h3 style={vonH}>von Elise</h3>
                <h3 style={vonH}>vor 3 Stunden</h3>
                </div>
            </div>
            <div style={styleDivB}>
                <h1> Suche Mathe Nachhilfe </h1>
                <text>
                   Fur meinem Sohn (8. Klasse). Hat jemand eine Empfehlung?
                </text>
                <button className={styles.styleButton}>Helfen</button>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', borderTop:'solid', borderColor:'grey'}}>
                <h4  className={styles.h4}>1 Antwort</h4>
               
               <div>
               <img className={styles.imga} src='https://as2.ftcdn.net/v2/jpg/01/25/83/03/500_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg' alt="img heart" />
               <img className={styles.imga} src='https://as2.ftcdn.net/v2/jpg/03/67/93/63/500_F_367936349_4H14BmKX3KqIhqvkpjAdm8HFo0LQcXQX.jpg' alt="img heart" />
               </div>
               </div>           
               </div>

        </div>
    )
}