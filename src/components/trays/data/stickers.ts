import { Element } from '@type/project';

export interface StickerListItem {
  stickerId: string,
  keywords: string[],
  shape: Omit<Element, 'id'>
}

export const stickers: StickerListItem[] = [
  {
    stickerId: '2e921b5c-6672-46b9-93e2-72444a2d4c37',
    keywords: ['ball', 'basketball'],
    shape: {
      type: 'sticker',
      element: 'image',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        height: 78,
        href: `/stickers/2e921b5c-6672-46b9-93e2-72444a2d4c37.svg`,
        transform: 'translate(4, 5)',
        width: 78
      }
    }
  },
  {
    stickerId: '02d230dd-6f06-4745-9d72-e8bc430290af',
    keywords: ['record', 'vinyl'],
    shape: {
      type: 'sticker',
      element: 'image',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        height: 70,
        href: `/stickers/02d230dd-6f06-4745-9d72-e8bc430290af.svg`,
        transform: 'translate(8, 9)',
        width: 70
      }
    }
  },
  {
    stickerId: '95ba26b6-43ed-45fc-87a7-da0539372a0b',
    keywords: ['hat', 'santa', 'christmas'],
    shape: {
      type: 'sticker',
      element: 'image',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        height: 60,
        href: `/stickers/95ba26b6-43ed-45fc-87a7-da0539372a0b.svg`,
        transform: 'translate(1, 14)',
        width: 82
      }
    }
  },
  {
    stickerId: '629dbe10-a2ad-49a2-83d3-33d258ae4f89',
    keywords: ['car'],
    shape: {
      type: 'sticker',
      element: 'image',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        height: 29,
        href: `/stickers/629dbe10-a2ad-49a2-83d3-33d258ae4f89.svg`,
        transform: 'translate(2, 30)',
        width: 82
      }
    }
  },
  {
    stickerId: '7545496c-5ef6-4a39-a0c7-f258b5bd7459',
    keywords: ['coffee'],
    shape: {
      type: 'sticker',
      element: 'image',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        height: 82,
        href: `/stickers/7545496c-5ef6-4a39-a0c7-f258b5bd7459.svg`,
        transform: 'translate(6, 5)',
        width: 75
      }
    }
  },
  {
    stickerId: 'f566f515-9d12-4638-b721-5c25fa013fc7',
    keywords: ['bike', 'motorbike'],
    shape: {
      type: 'sticker',
      element: 'image',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        height: 51,
        href: `/stickers/f566f515-9d12-4638-b721-5c25fa013fc7.svg`,
        transform: 'translate(3, 22)',
        width: 82
      }
    }
  },
  {
    stickerId: '877f5cdf-6ad9-43b0-8d55-076fcea4ed73',
    keywords: ['drums'],
    shape: {
      type: 'sticker',
      element: 'image',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        height: 62,
        href: `/stickers/877f5cdf-6ad9-43b0-8d55-076fcea4ed73.svg`,
        transform: 'translate(4, 15)',
        width: 82
      }
    }
  },
  {
    stickerId: 'af4925ab-0087-441b-b1de-8ece6c0905d2',
    keywords: ['plant', 'flower'],
    shape: {
      type: 'sticker',
      element: 'image',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        height: 82,
        href: `/stickers/af4925ab-0087-441b-b1de-8ece6c0905d2.svg`,
        transform: 'translate(2, 2)',
        width: 82
      }
    }
  }
];
