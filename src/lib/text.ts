import React from 'react'

import { Property } from 'csstype';
import { ElementProps } from '@type/project';

interface TextAlignMap {
  [key: string]: string;
}

const textAlignMap: TextAlignMap = {
  start: 'left',
  middle: 'center',
  end: 'right'
};

const getFontStyle = (fontStyle: string | number) => fontStyle as Property.FontStyle;

const getFontWeight = (fontWeight: string | number) => fontWeight as Property.FontWeight;

const getLineHeight = (fontSize: string | number) => (fontSize as number) + 4 + 'px';

const getTextAlign = (textAnchor: keyof TextAlignMap) => textAlignMap[textAnchor] as Property.TextAlign;

export function convertTextPropertiesToCss(properties: ElementProps): React.CSSProperties {
  return {
    color: properties.fill,
    fontFamily: properties.fontFamily,
    fontSize: properties.fontSize + 'px',
    fontStyle: getFontStyle(properties.fontStyle),
    fontWeight: getFontWeight(properties.fontWeight),
    lineHeight: getLineHeight(properties.fontSize),
    letterSpacing: properties.letterSpacing,
    opacity: properties.opacity,
    textAlign: getTextAlign(properties.textAnchor),
    textDecoration: properties.textDecoration
  };
}
