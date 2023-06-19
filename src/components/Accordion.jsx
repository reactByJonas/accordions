import { useState } from 'react';

function Accordion({ item, number }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{number < 10 ? `0${number}` : number}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>

      {isOpen && <div className="content-box">{item.text}</div>}
    </div>
  );
}

export default Accordion;
