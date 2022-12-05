import { useEffect, useState } from "react"
import AddBlock from "./add-block"
import Heading from "./headinds"

const TextEditor = () => {
  // states: para, list of paragraphs, headings, dictate which heading the user wants to write in
  const [para, setPara] = useState([])
  const [headings, setheadings] = useState(0)

  // functions
  const resetInput = (input) => {
    input.className = ''
    input.placeholder = 'Type / for blocks, @ to link docs or people'
    document.getElementById('add-block').classList.toggle('active');
  }

  const handleOnKeyPress = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault()
      if (headings !== 0) {
        setPara(prev => [...prev, [e.target.value, headings]])
        setheadings(0)
        resetInput(e.target)
        return
      }
      setPara(prev => [...prev, e.target.value])
      setheadings(0)
      return
    }
    if (e.code === 'Escape') {
      document.getElementById('input-editor').value = ''.trim();
      resetInput(e.target)
    }
  }

  const handleOnChange = (e) => {
    const target = e.target
    const input = document.getElementById('input-editor')
    if (target.value[0] === '/') {
      document.getElementById('add-block').classList.add('active');
      if (target.value[1] === '1') {
        setheadings(1)
        input.placeholder = 'Heading 1';
        input.classList.add("header1");
        input.value = '';
      }
    }
  }


  // this useEffect will be on charge of reseting the input value in order to not cause any other side effect
  useEffect(() => {
    document.getElementById('input-editor').value = ''.trim();
  }, [para])

  // input whill change depending ont the type of text or heading the users wants

  return (
    <div id="text-editor" className="container-flex">
      <div id="text" className="container-flex">
        {para.map((text, index) => {
          if (text[1] !== 0 && typeof text[1] === 'number') {
            return <Heading heading={text[1]} text={text[0]} index={index} />
          }
          return (<p key={index}>{text}</p>)
        })
        }
      </div>
      <textarea type="text" id="input-editor" placeholder="Type / for blocks, @ to link docs or people" onKeyDown={handleOnKeyPress} onChange={handleOnChange} />
      <AddBlock />
    </div>
  )
}

export default TextEditor