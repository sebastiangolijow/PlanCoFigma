
const Div = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'white',
    height:'5rem',
    borderTop:'solid',
    borderColor:'grey',
    marginTop:'25px',
    marginBottom:'-20px',
    width:'auto',
    paddingRight:'10px',
    paddingLeft:'10px'
}

const img = {
    height:'30%',
    width:'12%',
    alignSelf:'flex-start',
    position:'relative',
    bottom:'40%',
    paddingTop:'10px'
}

const imgA = {
    height:'36%',
    width:'20%',
    alignSelf:'flex-start',
    position:'relative',
    bottom:'40%',
    paddingTop:'10px'

}

const imgB = {
    height:'52%',
    width:'22%',
    alignSelf:'flex-start',
    position:'relative',
    bottom:'60%'
}


const imgC = {
    height:'33%',
    width:'15%',
    alignSelf:'flex-start',
    position:'relative',
    bottom:'40%',
    paddingTop:'10px'

}

const imgD = {
    height:'4rem',
    width:'60%',

}

export function downNav() {

    return (
        <div>
        <div style={Div}>
        <img style={img} src='https://image.flaticon.com/icons/png/512/126/126496.png' alt='home logo' />
        <img style={imgA} src='https://as1.ftcdn.net/v2/jpg/01/81/15/52/500_F_181155209_RbeeKxw1aoThTBV9Q6NWxeGNwsHhL1ad.jpg' alt='notification logo' />
        <img style={imgB} src='https://image.flaticon.com/icons/png/512/1828/1828817.png' alt='post logo' />
        <img style={img} src='https://image.flaticon.com/icons/png/512/1246/1246332.png' alt='message logo' />
        <img style={imgC} src='https://as1.ftcdn.net/v2/jpg/00/64/67/80/1000_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg' alt='profile logo' />
        </div>
        <img style={imgD} src='https://image.flaticon.com/icons/png/512/339/339879.png' />
        </div>
    )
}