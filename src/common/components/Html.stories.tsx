import React from "react";

import { Html } from "./Html";

export default {
  title: "Html",
  component: Html,
};

export const html = () => (
  <Html
    html={`
  <pre><strong>This</strong> is <em>some</em></pre>
  <h2>HTML</h2>
  <p><small>Pretty neat, huh?</small></p>
`}
  ></Html>
);
