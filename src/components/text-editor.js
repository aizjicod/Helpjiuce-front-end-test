import { useEffect, useState } from "react"

const TextEditor = () => {
  // this is a list of paragraph that is going to be used for the creation of the text
  const [para, setPara] = useState([])

  // function for adding text on press enter
  const handleOnKeyPress = (e) => {
    if (e.code === 'Enter') {
      setPara(prev => [...prev, e.target.value])
      e.preventDefault()
    }
  }

  // this useEffect will be oncharge of reseting the input value in order to not cause any other side effect
  useEffect(() => {
    document.getElementById('input-editor').value = ''.trim();
  }, [para])

  const handleOnChange = (e) => {
    return
  }

  return (
    <div id="text-editor" className="container-flex">
      <div id="text" className="container-flex">
        {
          para.map((text, index) => {
            if (text[1] === true) return <h1>{text}</h1>
            return (<p key={index}>{text}</p>)
          })
        }
      </div>


      <textarea type="text" id="input-editor" placeholder="Type / for blocks, @ to link docs or people" onKeyDown={handleOnKeyPress} onChange={handleOnChange} />
    </div>
  )
}

export default TextEditor