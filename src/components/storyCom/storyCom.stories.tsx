import type { Meta, StoryObj } from '@storybook/react';

import  {storyCom}  from './storyCom';

const meta: Meta<typeof storyCom> = {
    title: 'Components/storyCom',
    component: storyCom,
    parameters: { layout: 'centered',},
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof storyCom>;


export const Primary: Story = {
  args:{
    
  }
};