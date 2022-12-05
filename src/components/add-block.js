import { RxText } from 'react-icons/rx';
const typeBlocks = [
  ['option 1', 'Shortcut: type # + space', <RxText className="headers-icon"/>],
  ['expendable option 1', 'Shortcut: type >># + space', <RxText className="headers-icon"/>],
]

const AddBlock = () => (
  <div id="add-block">
    <h2 className="add-block-title">Add blocks</h2>
    <p className="add-block-description">Keep typing to filter, or scape to exit</p>
    <ul className='add-block-ul'>
      {typeBlocks.map((option, index) => {
        return (<li key={index} className="container-flex">
          {option[2]}
          <div className="add-block-li-information container-flex">
            <p className="li-information-title">{option[0]}</p>
            <p className="li-information-shortcut">{option[1]}</p>
          </div>
        </li>)
      })}
    </ul>
  </div>
)

export default AddBlock