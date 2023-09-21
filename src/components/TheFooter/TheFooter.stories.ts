import type { Meta, StoryObj } from '@storybook/react';

import { TheFooter } from './TheFooter';

const meta = {
  title: 'Example/TheFooter',
  component: TheFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TheFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

  },
};

