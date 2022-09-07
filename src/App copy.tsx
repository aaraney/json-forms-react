import React, { useEffect, useRef, useState } from 'react';
import * as Grouped from "./GroupedSchema";
import * as Templates from "./GroupedRegistry";
import * as UiTemplate from "./UiTemplate";
// import {
//   materialRenderers,
//   materialCells,
// } from '@jsonforms/material-renderers';
import ngen_schema from "./schema.json"
import general_schema from "./General.schema.json"
import schema_merged from "./ngencal.schema.json"
import uischema from "./uischema.json"
//import { JsonForms } from '@jsonforms/react';
//import Form from "@rjsf/core";
import Form from "@rjsf/material-ui";

//import Form from "react-jsonschema-form";
const log = (type: string) => console.log.bind(console, type);
const schema_ngen: any = ngen_schema
const schema_general: any = general_schema
const schema_all: any = schema_merged
const schema_ui: any = uischema
const hidden_hack = () => <div/>
const init_data = { 
  general: {strategy: {type: "estimation"},
            target: "min",
            algorithm: "dds"
          },
  ngen:{type:"ngen",strategy:"uniform"}
}

const groups = [

  {
    "Evaluation Range": ["evaluation_start", "evaluation_stop"],
    "ui:template": "accordian"
  }
];


//schema_ui["ui:groups"] = groups
//schema_ui["ui:template"] = (props: any) => <Grouped.ObjectFieldTemplate {...props} />
//schema_ui["done"] = { "ui:template": CustomFieldTemplate}


function CustomFieldTemplate(props:any) {
  const {
    id,
    classNames,
    label,
    help,
    required,
    description,
    errors,
    children
  } = props;
  return (
    <div className={classNames}>
      <label htmlFor={id}>
        {label}
        {required ? "*" : null}
      </label>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
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
            formContext={{
              templates: Templates.GroupTemplates
            }}
            {...UiTemplate}/>
      {/* <Form schema={schema_ngen} uiSchema={schema_ui} /> */}
    </div>

  );
}

export default App;
