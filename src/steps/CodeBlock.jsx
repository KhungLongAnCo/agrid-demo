import React from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const CodeBlock = ({ code, language }) => {
  const highlightedCode = Prism.highlight(
    code,
    Prism.languages[language],
    language
  );

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};

export default CodeBlock;
