import styles from './botonera.module.scss'

const Div = {
    display: 'flex',
    flexDirection:'column'
}




const img = {
    height:'20%',
    border:'solid',
    borderRadius:'999px',
    borderWidth:'1px',
    width:'15%',
    marginTop:'10px',
    marginRight:'8px',
    margin:'10px',
    borderColor:'grey',
    padding:'5px',
}

export function Botonera() {

    return (
        <div style={Div}>
            <h1 style={{fontWeight:'200'}}>Erkuden</h1>
            <div style={{display:'flex', justifyContent:'space-around'}}>
            <img style={img} src='https://as1.ftcdn.net/v2/jpg/01/34/24/64/500_F_134246472_FjDPQqpdoWp2uO6hRanQUSuu1tlUwy92.jpg' alt='img'/>
            <img style={img} src='https://as1.ftcdn.net/v2/jpg/01/43/07/06/1000_F_143070629_tL0MTuYnwdF63iQaQfLDHWOQ5WR5ANYu.jpg' alt='img'/>
            <img style={img} src='https://as2.ftcdn.net/v2/jpg/02/43/75/35/1000_F_243753566_ebJOhdoEoxwnMvvWVaQBWq5aqDIBdDT8.jpg' alt='img'/>
            <img style={img} src='https://as2.ftcdn.net/v2/jpg/01/87/04/35/1000_F_187043565_Kb7QpjEdTOks2ptQK7P1XD4ebqlyC5bM.jpg' alt='img'/>

            </div>
        </div>
    )
}