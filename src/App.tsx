import React, { useEffect, useRef, useState } from 'react';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import schema from "./schema.json"
import { JsonForms } from '@jsonforms/react';

function App() {
  const [data, setData] = useState({});
  const [s, setS] = useState<object>({})

  const [url, setUrl] = useState<string | undefined>(undefined)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log(url)
    const f = async () => {
      if (url === undefined) {
        return
      }
      const res = await fetch(url)
      const r = await res.json()
      setS(r)
    }
    f()
  }, [url, setS])


  return (
    <div>
      <div>
        <input type="url" name="Enter schema url" id="url" ref={ref} />
        <input type="button" onClick={() => { setUrl(ref.current?.value); console.log(ref.current?.value) }} />

      </div>
      <JsonForms
        schema={s}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
      />

    </div>

  );
}

export default App;
