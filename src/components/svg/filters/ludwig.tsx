import React from 'react';

export const Ludwig = (): JSX.Element => (
  <defs>
    <filter id='ludwig' colorInterpolationFilters='sRGB' filterUnits='objectBoundingBox' primitiveUnits='objectBoundingBox' x='0' y='0' width='100%' height='100%'>
      <feColorMatrix result='scbs' type='saturate' values='.8'/>
      <feComponentTransfer>
        <feFuncR type='linear' slope='1.15' intercept='-0.075'/>
        <feFuncG type='linear' slope='1.15' intercept='-0.075'/>
        <feFuncB type='linear' slope='1.15' intercept='-0.075'/>
      </feComponentTransfer>
      <feColorMatrix type='matrix' values='0.80315 0.1788 0.01805 0 0 0.05315 0.9288 0.01805 0 0 0.05315 0.1788 0.76805 0 0 0 0 0 1 0' />
    </filter>
  </defs>
);
