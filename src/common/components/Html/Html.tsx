import React from "react";

type HtmlProps = { html: string };

export const Html: React.FC<HtmlProps> = ({ html }: HtmlProps) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);
