import { useState } from 'react';

export default function Item({ message }) {
  const [checked, setChecked] = useState(false);

  const text = checked ? <strike>{message}</strike> : message;

  return (
    <div className="row">
      <div className="col-md-12">
        <input type="checkbox" onClick={() => setChecked(!checked)} />&nbsp;{text}
        <hr />
      </div>
    </div>
  )
}
