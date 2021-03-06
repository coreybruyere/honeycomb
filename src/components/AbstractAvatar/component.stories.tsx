import React from 'react';

import { Sections } from '../../modules/sections';

import { AbstractAvatar } from '.';

export default {
  title: `${Sections.Elements}/AbstractAvatar`,
};

export const Default = () => (
  <div style={{ fontSize: '5em' }}>
    <AbstractAvatar value="some random text here" />
    <AbstractAvatar value="some random text here" initial="鲁" />
    <AbstractAvatar value="a different random test" initial="A" />
    <AbstractAvatar value="tbnb1zqs84eg34kur74uhs6x6m0ketawgtf4nqcj27j" />
    <AbstractAvatar value="tbnb157dxmw9jz5emuf0apj4d6p3ee42ck0uwksxfff" />
    <AbstractAvatar value="0x77f2f5db2f2195b5461a0a7504b3acbac7ff9bad" />
    <AbstractAvatar value="0x99beb1775f23c13beb019a3dd1b6971017638511" />
  </div>
);
