import React, { useState } from 'react';
import schema_merged from "./ngencal.schema.json"
import uischema from "./uischema.json"

import Form from "@rjsf/material-ui";

const log = (type: string) => console.log.bind(console, type);

const schema_all: any = schema_merged
const schema_ui: any = uischema

const init_data = { 
  general: {strategy: {type: "estimation", "algorithm":"dds", "objective":"kling_gupta"},
            target: "min",
            algorithm: "dds"
          },
  ngen:{type:"ngen",strategy:"uniform"}
}

const POST_URL = "https://test.gov"
async function handleClick(data: any) {
  const result = await fetch(POST_URL, { method: "POST" })
  if (!result.ok) {
    // do something
  }
}

function App() {
  const [data, setData] = useState({});
  const [s, setS] = useState<object>({})

  return (
    <div>
      <div>

      </div>
      {/* <JsonForms
        schema={schema}
        
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
      /> */}
      <Form schema={schema_all} 
            uiSchema={schema_ui} 
            formData={init_data} 
            onSubmit={log("submitted")}
            />
      {/* <Form schema={schema_ngen} uiSchema={schema_ui} /> */}
    </div>

  );
}

export default App;
