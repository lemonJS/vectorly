import React from 'react';

import { range } from 'lodash';
import { css } from '@emotion/css';
import { Ruler } from '@components/layout/ruler';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  background: #e9e9e9;
  height: 100%;
  padding: 1.5rem;
  position: relative;
  width: 100%;
  
  .ruler {
    display: flex;
    overflow: hidden;
    position: absolute;
    
    &.left,
    &.right {
      flex-direction: column;
    }
    
    &.top {
      height: 1.5rem;
      left: 1.5rem;
      top: 0;
      width: calc(100% - 3rem);
    }
    
    &.right {
      flex-direction: column;
      height: calc(100% - 3rem);
      right: 0;
      top: 1.5rem;
      width: 1.5rem;
    }
    
    &.bottom {
      bottom: 0;
      height: 1.5rem;
      left: 1.5rem;
      width: calc(100% - 3rem);
    }

    &.left {
      flex-direction: column;
      height: calc(100% - 3rem);
      left: 0;
      top: 1.5rem;
      width: 1.5rem;
    }
  }
`;

export const Rulers = (props: Props): JSX.Element => {
  const rules = (direction: 'vertical' | 'horizontal') => range(100).map(i => (
    <Ruler key={i} className={direction} value={i * 100} />
  ));

  return (
    <div className={styles}>
      {props.children}
      <div className='ruler top'>
        {rules('horizontal')}
      </div>
      <div className='ruler right'>
        {rules('vertical')}
      </div>
      <div className='ruler bottom'>
        {rules('horizontal')}
      </div>
      <div className='ruler left'>
        {rules('vertical')}
      </div>
    </div>
  );
};
