import PropTypes from 'prop-types'
import '../../../styles/TabChap.css'


interface Props  {
  chapNbr: number,
  chapTtl: string,
  chapDscr: string
}



export default function TabChap({ chapNbr, chapTtl, chapDscr }: Props) {
  return (
    <div>
      <ul>
        <li>
          <h2>Chapitre {chapNbr}</h2>
        </li>

        <li>
          <div className="tabChap">
            <div>
              <h3>{chapTtl}</h3>
            </div>
            <div>{chapDscr}</div>
          </div>
        </li>
      </ul>
    </div>
  )
}


