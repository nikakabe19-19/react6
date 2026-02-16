import { useState } from "react";

function Smalldiv() {
  const [selected, setSelected] = useState(null);

  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="num_box">
      <div className="key_box">
        {numbers.map((num) => (
          <span
            key={num}
            onClick={() => setSelected(num)}
            className={selected === num ? "active" : ""}
          >
            {num}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Smalldiv;
