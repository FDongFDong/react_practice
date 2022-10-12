import React from 'react';

import { Progress } from 'antd';

const ProgressExample = () => {
  return (
    <>
      <Progress strokeLinecap="butt" percent={50} />
      <Progress strokeLinecap="butt" type="circle" percent={35} />
      <Progress strokeLinecap="butt" type="dashboard" percent={75} />
    </>
  );
};

export default ProgressExample;
