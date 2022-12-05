import { RxText } from 'react-icons/rx';
const typeHeadings = [
  ['heading 1', 'Shortcut: type # + space', <RxText className="headers-icon"/>],
  ['expendable heading 1', 'Shortcut: type >># + space', <RxText className="headers-icon"/>],
]

const AddBlock = () => (
  <div id="add-block">
    <h2 className="add-block-title">Add blocks</h2>
    <p className="add-block-description">Keep typing to filter, or scape to exit</p>
    <ul className='add-block-ul'>
      {typeHeadings.map((heading, index) => {
        return (<li key={index} className="container-flex">
          {heading[2]}
          <div className="add-block-li-information container-flex">
            <p className="li-information-title">{heading[0]}</p>
            <p className="li-information-shortcut">{heading[1]}</p>
          </div>
        </li>)
      })}
    </ul>
  </div>
)

export default AddBlock