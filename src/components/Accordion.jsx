function Accordion({ item, number, curOpen, setCurOpen }) {
  function handleToggle() {
    setCurOpen(number);
  }

  return (
    <div
      className={`item ${curOpen === number ? 'open' : ''}`}
      onClick={handleToggle}
    >
      <p className="number">{number < 10 ? `0${number}` : number}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{curOpen === number ? '-' : '+'}</p>

      {curOpen === number && <div className="content-box">{item.text}</div>}
    </div>
  );
}

export default Accordion;
