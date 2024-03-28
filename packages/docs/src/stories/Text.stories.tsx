import { Text, TextProps } from '@lions-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quibusdam accusamus et animi aliquam neque expedita repudiandae corporis sit quia totam modi dicta, itaque voluptate delectus cupiditate atque! Excepturi, officia.',
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
