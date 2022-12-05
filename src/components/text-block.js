// this Component will be used to return any type of text
// please add a new case and add on text-editor.js  new number option 

const TextBlock = ({ option, text, index }) => {
  let content;
  switch (option) {
    case 1:
      content = <h1 key={index} className="heading1">{text}</h1>;
      break;
    default:
      content = (<p key={index}>{text}</p>);
      break;
  }

  return (content);
};

export default TextBlock;
