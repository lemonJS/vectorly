import { Element } from '@type/project';

export interface ShapeListItem {
  shapeId: string,
  keywords: string[],
  shape: Omit<Element, 'id'>
}

export const shapes: ShapeListItem[] = [
  {
    shapeId: '979b0b3d-7216-425d-a1b2-b3f11a1cf95f',
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
        cx: 36,
        cy: 36,
        fill: 'transparent',
        paintOrder: 'stroke',
        r: 36,
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(8, 8)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    shapeId: '4d8244d0-6aed-4ac7-9fe4-b2ee939243e6',
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
        fill: 'transparent',
        height: 70,
        paintOrder: 'stroke',
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(9, 9)',
        vectorEffect: 'non-scaling-stroke',
        width: 70,
      }
    }
  },
  {
    shapeId: '6a5c4abc-bc36-4d06-8338-ecdcfc09e13f',
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
        fill: 'transparent',
        paintOrder: 'stroke',
        points: '35,0 70,70 0,70',
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(9, 8)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    shapeId: '4f59ea51-d9fc-413c-b5fa-0978e50913ed',
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
        fill: 'transparent',
        paintOrder: 'stroke',
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(8, 14)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    shapeId: '9e3fd3fd-f8fd-402b-8e1c-6d2101e18773',
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
        fill: 'transparent',
        paintOrder: 'stroke',
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(9, 10)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    shapeId: '8b8fd7aa-8f2c-4142-8cc0-ce800569c7ce',
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
        fill: 'transparent',
        paintOrder: 'stroke',
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(9, 10)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    shapeId: 'bf7ff284-71ce-4c3b-89f6-290b1adf95c3',
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
        fill: 'transparent',
        paintOrder: 'stroke',
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(9, 9)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    shapeId: 'b2ac4521-b9ae-45a9-8390-26bd0dbe4b72',
    keywords: ['heart', 'love'],
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
        d: 'M 39.027746,63.052555 37.702592,62.148996 C 37.408113,61.940483 6.3406077,40.533096 1.7761878,29.968412 -3.009091,19.056206 2.2179058,6.4063868 13.334478,1.7495848 c 9.12884,-3.822747 19.656455,-1.18157602 25.619649,5.977387 6.036814,-7.15896302 16.490808,-9.73063 25.619647,-5.977387 11.116574,4.656802 16.343571,17.3066212 11.631912,28.2188272 v 0 c -4.269942,9.73063 -30.625788,28.496846 -35.926405,32.11108 z M 22.0216,4.1822428',
        fill: 'transparent',
        paintOrder: 'stroke',
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(5, 14)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    shapeId: 'c6475cd6-29cf-4425-a0c4-c11dd5c9b9e3',
    keywords: ['drop', 'water'],
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
        d: 'M 26,68.170732 C 11.668293,68.170732 0,56.692683 0,42.678049 0,29.043902 23.590244,2.726829 24.604878,1.585366 L 26,0 27.395122,1.585366 C 28.409756,2.726829 52,29.043902 52,42.678049 52,56.692683 40.331707,68.170732 26,68.170732 Z M 26,5.7707314 C',
        fill: 'transparent',
        paintOrder: 'stroke',
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(19, 12)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    shapeId: 'a45b9e79-6969-49d7-9b82-ccbacc25c570',
    keywords: ['diamond'],
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
        d: 'M 22.433334,67.3 0,33.650001 22.433334,0 44.866669,33.650001 Z',
        fill: 'transparent',
        paintOrder: 'stroke',
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(20, 12)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    shapeId: 'e3665123-0205-4a7b-baaa-f398e72d7fa2',
    keywords: ['moon'],
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
        d: 'M 34.93396,69.990083 C 21.660376,69.990083 8.9150935,62.461782 2.9056602,49.7165 L 0,43.508953 5.7452826,47.207066 c 1.2547167,0.792453 2.5754713,1.518868 3.9622637,2.04717 C 21.924527,54.008952 35.79245,47.999519 40.679242,35.848576 42.990563,30.037256 42.858487,23.499521 40.283016,17.622162 37.641507,11.612729 32.88679,6.9900873 26.943394,4.6787667 L 20.867923,2.3014084 27.207545,0.84857844 c 6.801886,-1.5188679 13.867924,-0.990566 20.339621,1.51886776 18.094338,6.9999995 27.075472,27.3396208 20.075469,45.4339598 -3.367923,8.386791 -9.641507,15.056602 -17.764148,18.886791 -4.820755,2.245282 -9.90566,3.301886 -14.924527,3.301886 z',
        fill: 'transparent',
        paintOrder: 'stroke',
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(10, 10)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  },
  {
    shapeId: 'c188c557-f0fb-47a2-b38e-b344e32921c3',
    keywords: ['shield'],
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
        d: 'M 34.901223,70 34.374412,69.868296 C 21.533396,66.378173 11.58984,57.158984 5.6632174,43.066792 1.1853245,32.464722 0,21.401693 0,16.528692 0,14.816557 0.1317027,13.104421 0.39510815,11.392286 L 0.59266224,10.14111 34.967075,0 l 34.374412,10.14111 0.197554,1.251176 c 0.263405,1.712135 0.329257,3.424271 0.395108,5.070555 0,4.873001 -1.185325,15.93603 -5.663217,26.5381 -5.926623,14.02634 -15.870179,23.311381 -28.711195,26.801503 z',
        fill: 'transparent',
        paintOrder: 'stroke',
        stroke: 'white',
        strokeDasharray: 'none',
        strokeWidth: 2,
        transform: 'translate(9, 9)',
        vectorEffect: 'non-scaling-stroke'
      }
    }
  }
];

