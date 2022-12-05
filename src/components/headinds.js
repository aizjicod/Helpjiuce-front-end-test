const Heading = ({heading, text, index}) => {
let content;
switch (heading) {
  case 1:
    content = <h1 key={index} className="heading1">{text}</h1>
    break;
  default:
    content = (<p key={index}>{text}</p>)
    break;
}

return (content)
}

export default Heading