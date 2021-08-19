import {Nav} from './Nav'
import {Hi} from './hi/Hi'
import { Botonera } from './botonera/Botonera'
import { VonElise } from './VonElise/VonElise'

export function Home() {

    return (
        <div style={{display:'flex', flexDirection:'column'}}>
         <Nav />
         <Hi />
         <Botonera/>
         <VonElise />
        </div>
    )
}