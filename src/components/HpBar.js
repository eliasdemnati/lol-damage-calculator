import React from 'react';

const HpBar = ({ currentHp, maxHp }) => (
  <div>
    {currentHp}/{maxHp}
  </div>
);

export default HpBar;
