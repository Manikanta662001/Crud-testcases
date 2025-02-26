import React from "react";
import DOMPurify from "dompurify";

const DangerouslySetInnerHtmlCompo = () => {
  const rawHtml = { __html: "<h2 style='color: red;'>Hello, World!</h2>" };
  const dirtyString =
    "<script>alert('Hacked!')</script><p>Safe Content</p><img src=x onerror=alert(1)//><svg><script>alert('SVG XSS')</script></svg>";
  // DOMPurify.sanitize method is used to remove harmful HTML elements and attributes that can be used for Cross-Site Scripting (XSS) attacks
  const userInput = {
    __html: DOMPurify.sanitize(dirtyString),
  };
  console.log("HTML:::::", userInput);
  return (
    <div>
      <div dangerouslySetInnerHTML={rawHtml} />
      <div dangerouslySetInnerHTML={userInput} />
    </div>
  );
};

export default DangerouslySetInnerHtmlCompo;
