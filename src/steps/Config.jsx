import React from "react";
import CodeBlock from "./CodeBlock";
import SimpleDemo from "../demo/SimpleDemo";

function Config(props) {
  return (
    <div>
      <h3>Install Community</h3>
      <code className="command">npm install --save ag-grid-community</code>
      <br />
      <code className="command">npm install --save ag-grid-react</code>
      <h3>Install Enterprise</h3>
      <code className="command">npm install --save ag-grid-enterprise </code>
      <CodeBlock
        code={`
        import { LicenseManager } from '@ag-grid-enterprise/core'
        LicenseManager.setLicenseKey("your license key")
        `}
        language="javascript"
      />
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
