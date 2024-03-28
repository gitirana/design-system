import { ComponentProps } from '@stitches/react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$blue300',
  borderRadius: '$sm',
  fontWeight: '$medium',
  color: '$white',
  border: 'none',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'big',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
