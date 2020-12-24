import React from 'react'

import { ElementProps } from '@type/project';

const textAlignMap = {
  start: 'left',
  middle: 'center',
  end: 'right'
};

const getFontStyle = (fontStyle: string | number) => fontStyle as string;

const getFontWeight = (fontWeight: string | number) => fontWeight as any;

const getLineHeight = (fontSize: string | number) => (fontSize as number) + 4 + 'px';

const getTextAlign = (textAnchor: string) => textAlignMap[textAnchor];

export function convertTextPropertiesToCss(properties: ElementProps): React.CSSProperties {
  return {
    color: properties.fill,
    fontFamily: properties.fontFamily,
    fontSize: properties.fontSize + 'px',
    fontStyle: getFontStyle(properties.fontStyle),
    fontWeight: getFontWeight(properties.fontWeight),
    lineHeight: getLineHeight(properties.fontSize),
    letterSpacing: properties.letterSpacing,
    textAlign: getTextAlign(properties.textAnchor),
    textDecoration: properties.textDecoration
  };
}
