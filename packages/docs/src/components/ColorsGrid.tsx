import { colors } from '@lions-ui/tokens'
import { getContrast } from 'polished'
import { Copy, CopyCheck } from 'lucide-react'
import { useState } from 'react'

export function ColorsGrid() {
  const [copiedColor, setCopiedColor] = useState('')

  function handleClick(color: string) {
    navigator.clipboard.writeText(color.toUpperCase()).then(() => {
      setCopiedColor(color)
      setTimeout(() => {
        setCopiedColor('')
      }, 2000)
    })
  }

  return Object.entries(colors).map(([key, color]) => {
    return (
      <div
        onClick={() => handleClick(color)}
        key={key}
        style={{ backgroundColor: color, padding: '2rem', cursor: 'pointer' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#fff') > 3.5 ? '#fff' : '#000',
          }}
        >
          <strong>${key}</strong>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span>{color.toUpperCase()}</span>
            {copiedColor === color ? (
              <CopyCheck size={16} />
            ) : (
              <Copy size={16} />
            )}
          </div>
        </div>
      </div>
    )
  })
}
