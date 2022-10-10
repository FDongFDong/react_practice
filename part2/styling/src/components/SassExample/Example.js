import React from 'react';
import './Example.scss';
const Example = () => {
  return (
    <div>
      <p>Example</p>
      <p className="font">Example</p>
      <nav>
        <ul>
          <li>123</li>
          <li>
            <a>456</a>
          </li>
        </ul>
      </nav>
      {/* modules */}
      <p className="base">Hello</p>
      <p className="inverse">Hello</p>
      <p className="info">Hello</p>
      <p className="alert">Hello</p>
      <p className="success">Hello</p>
      <p className="message">message</p>
      <p className="success2">success2</p>
      <p className="error">error</p>
      <p className="warning">warning</p>
    </div>
  );
};

export default Example;
