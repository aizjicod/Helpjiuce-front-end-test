import { useEffect, useState } from "react"
import AddBlock from "./add-block"
import TextBlock from "./text-block"

const TextEditor = () => {
  // states: para, list of paragraphs, options, dictate which text block the user wants to write in
  const [para, setPara] = useState([])
  const [options, setoptions] = useState(0)

  // functions
  const resetInput = (input) => {
    input.className = ''
    input.placeholder = 'Type / for blocks, @ to link docs or people'
    document.getElementById('add-block').classList.remove('active');
  }

  const handleOnKeyPress = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault()
      setPara(prev => [...prev, [e.target.value, options]])
      setoptions(0)
      resetInput(e.target)
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
        setoptions(1)
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

  return (
    <div id="text-editor" className="container-flex">
      <div id="text" className="container-flex">
        {para.map((text, index) => <TextBlock option={text[1]} text={text[0]} index={index} />
        )
        }
      </div>
      <textarea type="text" id="input-editor" placeholder="Type / for blocks, @ to link docs or people" onKeyDown={handleOnKeyPress} onChange={handleOnChange} />
      <AddBlock />
    </div>
  )
}

export default TextEditor