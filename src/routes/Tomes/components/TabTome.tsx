import '../../../styles/TabTome.css'
import { Link } from 'react-router-dom'

interface Props {
  id: number, 
  numTome: string, 
  titreTome: string, 
  publiFr: string, 
  publiJp: string
}

export default function TabTome({ id, numTome, titreTome, publiFr, publiJp }:Props) {
  const tomeId = id

  return (
    <div className="listTome">
      <div className="infoTome">
        <h1>Tome {numTome}</h1>
        <ul>
          <li>Titre : {titreTome}</li>
          <li>
            Publication Japonaise : {!publiJp ? 'Non parut en France' : publiJp}
          </li>
          <li>
            Publication Française : {!publiFr ? 'Non parut en France' : publiFr}
          </li>
        </ul>
        <div className='linkto'>
          <Link to={`/chapitres/${tomeId}`}>Voir les Chapitres</Link>
        </div>
        
      </div>
    </div>
  )
}