import React from "react";
import {
  DefaultObjectFieldTemplate,
  DefaultFieldTemplate,
  DefaultArrayItem
} from "./DefaultTemplates";

/**
 * TODO: Use FormContext to enable string-based templates
 */
export function FieldTemplate(props) {
  const Template = props.uiSchema["ui:template"];
  if (
    Template &&
    // TODO: LV: Seems strange that this is required to be plugged in... oh well
    props.schema.type !== "object" &&
    props.schema.type !== "array"
  ) {
    return <Template {...props} />;
  } else {
    return <DefaultFieldTemplate {...props} />;
  }
}

export const ObjectFieldTemplate = defaultOrComponent(
  DefaultObjectFieldTemplate
);
export const ArrayFieldTemplate = defaultOrComponent(DefaultArrayItem);

function defaultOrComponent(DefaultTemplate) {
  return function (props) {
    const Template = props.uiSchema["ui:template"];
    if (Template) {
      
      return <Template {...props} />;
    } else {

      return <DefaultTemplate {...props} />;
    }
  };
}
