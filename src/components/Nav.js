

const Div = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#00a0a0',
    height:'5rem',
    paddingBottom:'5px',
    paddingTop:'25px'
}

const styleInput = {
    border:'none',
    borderRadius:'10px',
    padding:'20px',
    width:'80%',
    alignSelf:'center'
}



export function Nav() {

    return (
        <div style={Div}>
          <input style={styleInput} placeholder='Suche'></input>
        </div>
    )
}