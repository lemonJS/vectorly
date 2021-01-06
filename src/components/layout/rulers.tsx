import React from 'react';

import { range } from 'lodash';
import { css } from '@emotion/css';
import { Ruler } from '@components/layout/ruler';

interface Props {
  children: React.ReactNode;
}

const styles = css`
  align-items: center;
  background-color: #f9f9f9;
  background-image: linear-gradient(45deg, #f4f4f4 25%, transparent 25%), 
                    linear-gradient(-45deg, #f4f4f4 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #f4f4f4 75%), 
                    linear-gradient(-45deg, transparent 75%, #f4f4f4 75%);
  background-position: 0 0, 0 40px, 40px -40px, -40px 0px;
  background-size: 80px 80px;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 1.5rem 0 0 1.5rem;
  position: relative;
  width: 100%;
  
  .ruler {
    display: flex;
    overflow: hidden;
    position: absolute;
    
    &.top {
      height: 1.5rem;
      left: 1.5rem;
      top: 0;
      width: calc(100% - 1.5rem);
    }

    &.left {
      flex-direction: column;
      height: calc(100% - 1.5rem);
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
      <div className='ruler left'>
        {rules('vertical')}
      </div>
    </div>
  );
};
