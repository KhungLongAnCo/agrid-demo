import React from "react";
import SimpleDemo from "../demo/SimpleDemo";

function Config(props) {
  return (
    <div>
      <h3>Install</h3>
      <code className="command">
        npm install --save ag-grid-community || npm install --save
        ag-grid-enterprise{" "}
      </code>
      <br />
      <code className="command">npm install --save ag-grid-react</code>
      <br />
      <h3>Styles</h3>
      <code className="command">
        import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always
        needed
      </code>
      <br />
      <code className="command">
        import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme
      </code>
    </div>
  );
}

export default Config;
