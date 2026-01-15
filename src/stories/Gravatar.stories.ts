import type { Meta, StoryObj } from '@storybook/sveltekit';
import Gravatar from '$lib/components/Gravatar/Gravatar.svelte';

const meta = {
  title: 'Components/Gravatar',
  component: Gravatar,
  tags: ['autodocs'],
  argTypes: {
    email: { control: 'text' },
    size: { control: { type: 'number', min: 16, max: 512, step: 8 } },
    defaultImage: {
      control: 'select',
      options: ['mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash', 'blank']
    },
    rating: {
      control: 'select',
      options: ['g', 'pg', 'r', 'x']
    },
    className: { control: 'text' }
  }
} satisfies Meta<Gravatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic example with default settings
export const Default: Story = {
  args: {
    email: 'skamansam@gmail.com',
    size: 80
  }
};

// Example with different default image
export const WithIdenticon: Story = {
  args: {
    email: 'nonexistent@example.com',
    size: 80,
    defaultImage: 'identicon'
  }
};

// Example with custom styling
export const WithCustomStyling: Story = {
  args: {
    email: 'skamansam@gmail.com',
    size: 120,
    className: 'rounded-lg border-4 border-primary-500'
  }
};

// Example with different sizes
export const SizeVariants: Story = {
  render: () => ({
    Component: Gravatar,
    slots: {},
    props: {}
  }),
  decorators: [
    () => ({
      template: `
        <div class="flex items-center gap-4">
          <Gravatar email="skamansam@gmail.com" size={32} className="rounded-full" />
          <Gravatar email="skamansam@gmail.com" size={48} className="rounded-full" />
          <Gravatar email="skamansam@gmail.com" size={64} className="rounded-full" />
          <Gravatar email="skamansam@gmail.com" size={96} className="rounded-full" />
        </div>
      `
    })
  ]
};

// Example with different default images
export const DefaultImageVariants: Story = {
  render: () => ({
    Component: Gravatar,
    slots: {},
    props: {}
  }),
  decorators: [
    () => ({
      template: `
        <div class="grid grid-cols-3 gap-4">
          <div class="flex flex-col items-center gap-2">
            <Gravatar email="test1@example.com" size={80} defaultImage="mp" className="rounded-full" />
            <span class="text-sm">Mystery Person</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Gravatar email="test2@example.com" size={80} defaultImage="identicon" className="rounded-full" />
            <span class="text-sm">Identicon</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Gravatar email="test3@example.com" size={80} defaultImage="monsterid" className="rounded-full" />
            <span class="text-sm">Monster ID</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Gravatar email="test4@example.com" size={80} defaultImage="wavatar" className="rounded-full" />
            <span class="text-sm">Wavatar</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Gravatar email="test5@example.com" size={80} defaultImage="retro" className="rounded-full" />
            <span class="text-sm">Retro</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <Gravatar email="test6@example.com" size={80} defaultImage="robohash" className="rounded-full" />
            <span class="text-sm">Robohash</span>
          </div>
        </div>
      `
    })
  ]
};
