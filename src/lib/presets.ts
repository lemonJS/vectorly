import { Preset } from '@type/project';

export interface PresetItem extends Preset {
  category: string;
  name: string;
}

export const presets: PresetItem[] = [
  {
    id: 'facebook-post-1200-900',
    category: 'Facebook',
    height: 900,
    name: 'Post',
    width: 1200
  },
  {
    id: 'facebook-story-1200-900',
    category: 'Facebook',
    height: 900,
    name: 'Story',
    width: 1200
  },
  {
    id: 'facebook-cover-820-312',
    category: 'Facebook',
    height: 312,
    name: 'Cover',
    width: 820
  },
  {
    id: 'facebook-profile-512-512',
    category: 'Facebook',
    height: 512,
    name: 'Profile',
    width: 512
  },
  {
    id: 'twitter-post-1200-900',
    category: 'Twitter',
    height: 900,
    name: 'Post',
    width: 1200
  },
  {
    id: 'twitter-fleet-1200-900',
    category: 'Twitter',
    height: 900,
    name: 'Fleet',
    width: 1200
  },
  {
    id: 'twitter-cover-820-312',
    category: 'Twitter',
    height: 312,
    name: 'Cover',
    width: 820
  },
  {
    id: 'twitter-profile-512-512',
    category: 'Twitter',
    height: 512,
    name: 'Profile',
    width: 512
  }
];
