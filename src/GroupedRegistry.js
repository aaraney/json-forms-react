import React from "react";
import { Tabs, Tab, Table, Accordion} from "react-bootstrap";

export const GroupTemplates = {
  hideshow: props => (
    <div style={{ background: "grey" }}>
      Hide/show{props.properties.map(p => p.children)}
    </div>
  ),
  grid: props => (
    <Table striped bordered condensed hover>
      <tbody>
        {props.properties.map(p => (
          <tr>
            <td>{p.name}</td>
            {p.children.map(c => <td>{c}</td>)}
          </tr>
        ))}
      </tbody>
    </Table>
  ),
  table: props => (
    <Table striped bordered condensed hover>
      <tbody>
        {props.properties.map(p => (
          <tr>
            <th>{p.name}</th>
            <td>{p.children}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  ),
  //accordion: props => props.properties.map(p => <Accordion>{p.children}</Accordion>),
  tabs: props => {
    return (
      <Tabs defaultActiveKey={0} id="uncontrolled-tab-example">
        {props.properties.map((p, idx) => (
          <Tab eventKey={idx} title={p.name}>
            {p.children}
          </Tab>
        ))}
      </Tabs>
    );
  }
};
