import { useState } from 'react'
import '../../../styles/TabChap.css'



interface Props  {
  chapNbr: number,
  chapTtl: string,
  chapDscr: string
}



export default function TabChap({ chapNbr, chapTtl, chapDscr }: Props) {

  const [forOpen, setForOpen] = useState(false)
  
  return (
   
    <div className="tabChap" >
      <ul>
        <li>
          <h2>Chapitre {chapNbr}</h2> 
          {forOpen ?
          <button onClick={() => setForOpen(false)}>Fermer</button> : 
          <button onClick={() => setForOpen(true)}>Ouvrir</button> }
        </li>
        <li>
          {forOpen ?
          <div>
          <div>
            <h3>{chapTtl}</h3>
          </div>
          <div>{chapDscr}</div>
        </div>: null}
          
        </li>
      </ul>
      
    </div>
  ) 
}


