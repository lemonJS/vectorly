import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@components/button';

const styles = css`
  background: transparent;
  border-color: transparent;
  color: var(--primary-text-color);
  margin-right: 1.5rem;
  
  &:hover {
    border-color: var(--primary-accent-color);
  }
`;

export const Download = (): JSX.Element => {
  const handleClick = async () => {
    const svg = document.getElementById('canvas');
    const data = new XMLSerializer().serializeToString(svg);

    // Create a new canvas a 3x size
    const canvas = document.createElement('canvas');
    canvas.width = 1500;
    canvas.height = 2400;

    const ctx = canvas.getContext('2d');

    // Stuff the svg as a blob into an image
    const img = new Image();
    const blob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      // Draw the image at 3x size
      ctx.drawImage(img, 0, 0, 1500, 2400);
      URL.revokeObjectURL(url);
      const uri = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      download(uri);
    };

    img.src = url;
  };

  const download = (url: string) => {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: false
    });

    const a = document.createElement('a');
    a.setAttribute('download', 'project.png');
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    a.dispatchEvent(event);
  };

  return (
    <Button className={styles} onClick={handleClick}>
      Download
      <i className='ri-download-cloud-line' />
    </Button>
  );
};
