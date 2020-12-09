import type { Element } from '../../../types/project';

export interface ShapeListItem {
  id: string,
  keywords: string[],
  shape: Omit<Element, 'id'>
}

export const shapes: ShapeListItem[] = [
  {
    id: '979b0b3d-7216-425d-a1b2-b3f11a1cf95f',
    keywords: ['circle'],
    shape: {
      type: 'shape',
      element: 'circle',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        strokeWidth: 2,
        r: 36,
        fill: 'transparent',
        cx: 36,
        stroke: 'white',
        strokeDasharray: 'none',
        cy: 44,
        transform: 'translate(8, 0)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    id: '4d8244d0-6aed-4ac7-9fe4-b2ee939243e6',
    keywords: ['square', 'rectangle', 'box'],
    shape: {
      type: 'shape',
      element: 'rect',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        strokeWidth: 2,
        fill: 'transparent',
        stroke: 'white',
        strokeDasharray: 'none',
        width: 70,
        height: 70,
        transform: 'translate(9, 9)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    id: '6a5c4abc-bc36-4d06-8338-ecdcfc09e13f',
    keywords: ['triangle'],
    shape: {
      type: 'shape',
      element: 'polygon',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        strokeWidth: 2,
        stroke: 'white',
        strokeDasharray: 'none',
        fill: 'transparent',
        points: '35,0 70,70 0,70',
        transform: 'translate(9, 8)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    id: '4f59ea51-d9fc-413c-b5fa-0978e50913ed',
    keywords: ['hexagon'],
    shape: {
      type: 'shape',
      element: 'path',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        d: 'M 17.523145,59.737172 C 17.185697,59.210186 1.1306998,31.385786 0.77122546,30.704956 0.56949637,30.32289 1.6121546,28.412877 9.1307468,15.391409 L 17.720744,0.51437322 h 17.287164 17.287165 l 8.590111,14.88122978 8.590108,14.88123 -0.776991,1.388989 c -0.427346,0.763944 -4.292856,7.493729 -8.590025,14.955079 l -7.813034,13.566092 -17.23596,0.0095 -17.235958,0.0095 z',
        strokeWidth: 2,
        stroke: 'white',
        strokeDasharray: 'none',
        fill: 'transparent',
        transform: 'translate(8, 14)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    id: '9e3fd3fd-f8fd-402b-8e1c-6d2101e18773',
    keywords: ['star'],
    shape: {
      type: 'shape',
      element: 'path',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        d: 'm 14.14519,64.82936 c 0.104648,-0.481017 1.030603,-5.761931 2.057678,-11.735363 L 18.070277,42.233211 16.433065,40.671452 C 15.532599,39.812484 11.72993,36.108697 7.9826909,32.440815 L 1.1695286,25.77194 3.2985117,25.455953 C 4.4694523,25.28216 9.7161998,24.52358 14.95795,23.770219 L 24.488406,22.400472 29.754812,11.82251 35.021218,1.2445488 40.161996,11.665108 c 2.827425,5.731307 5.1821,10.478922 5.232607,10.550257 0.08006,0.113065 22.403847,3.462282 23.232972,3.48562 0.173143,0.0049 -3.50549,3.735347 -8.174741,8.289941 l -8.489545,8.281079 1.94822,11.453879 c 1.071519,6.299637 1.889544,11.512556 1.817831,11.584272 -0.07172,0.07171 -4.758677,-2.302462 -10.415472,-5.275944 L 35.028786,54.62788 32.782454,55.79504 c -4.83219,2.510733 -14.940295,7.816167 -16.83304,8.835145 l -1.994493,1.073751 z',
        strokeWidth: 2,
        stroke: 'white',
        strokeDasharray: 'none',
        fill: 'transparent',
        transform: 'translate(9, 10)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    id: '8b8fd7aa-8f2c-4142-8cc0-ce800569c7ce',
    keywords: ['pentagon'],
    shape: {
      type: 'shape',
      element: 'path',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        d: 'M 7.2120428,46.178155 C 3.6502937,35.211392 0.69812538,26.093338 0.65166902,25.915813 0.59004777,25.68034 5.1884034,22.235644 17.653524,13.179473 27.051001,6.3520111 34.82511,0.74027012 34.929326,0.70893811 35.145871,0.64383351 69.559376,25.58169 69.46743,25.737088 69.411545,25.831541 56.777173,64.672435 56.478505,65.66796 L 56.34357,66.117724 H 35.015761 13.687951 Z',
        strokeWidth: 2,
        stroke: 'white',
        strokeDasharray: 'none',
        fill: 'transparent',
        transform: 'translate(9, 10)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    id: 'bf7ff284-71ce-4c3b-89f6-290b1adf95c3',
    keywords: ['octagon'],
    shape: {
      type: 'shape',
      element: 'path',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        d: 'M 10.564754,59.47349 0.3968254,49.304125 V 35.018403 20.732683 L 10.566192,10.564754 20.735558,0.3968254 H 35.02128 49.307 L 59.474929,10.566192 69.642857,20.735558 V 34.922065 49.108573 L 59.374292,59.375716 49.105726,69.642857 H 34.919204 20.732683 Z',
        strokeWidth: 2,
        stroke: 'white',
        strokeDasharray: 'none',
        fill: 'transparent',
        transform: 'translate(9, 9)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  }
];

