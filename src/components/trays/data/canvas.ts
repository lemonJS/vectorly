export interface Preset {
  id: string;
  height: number;
  iconColor: string;
  iconName: string;
  name: string;
  width: number;
}

export const presets: Preset[] = [
  {
    id: 'cc671c3f-f567-4e6e-8a75-5e71fda4e518',
    height: 900,
    iconColor: '#3b5998',
    iconName: 'ri-facebook-circle-line',
    name: 'Facebook Post',
    width: 1200
  },
  {
    id: '190b8657-1640-4896-93e2-35ea5a6d60cb',
    height: 620,
    iconColor: '#3b5998',
    iconName: 'ri-facebook-circle-line',
    name: 'Facebook Link',
    width: 1200
  },
  {
    id: 'b3dc9617-700a-4a6a-8145-99c938ce0acc',
    height: 1080,
    iconColor: '#8134AF',
    iconName: 'ri-instagram-line',
    name: 'Instagram Post',
    width: 1080
  },
  {
    id: '3b47f239-ab77-4550-bfca-9cd6ce3d9aa6',
    height: 1920,
    iconColor: '#3b5998',
    iconName: 'ri-facebook-circle-line',
    name: 'Facebook Story',
    width: 1080
  },
  {
    id: 'a5f2dffe-c896-40a4-91e7-d97054a3a18b',
    height: 628,
    iconColor: '#0077B5',
    iconName: 'ri-linkedin-box-line',
    name: 'LinkedIn Post',
    width: 1200
  },
  {
    id: 'a109bee1-7060-4403-8226-7d075028eb2c',
    height: 1102,
    iconColor: '#BD081C',
    iconName: 'ri-pinterest-line',
    name: 'Pinterest Pin',
    width: 735
  },
  {
    id: 'a3f6262e-0164-4d57-9b71-ab4762d59cf1',
    height: 512,
    iconColor: '#00aced',
    iconName: 'ri-twitter-line',
    name: 'Twitter Post',
    width: 1024
  },
  {
    id: 'eb7fc2d1-abe9-4367-ac35-86f9318de8a9',
    height: 720,
    iconColor: '#E62117',
    iconName: 'ri-youtube-line',
    name: 'Youtube Thumbnail',
    width: 1280
  }
];
