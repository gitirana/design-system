import '../styles/tokens-grid.css'
import { colors } from '@lions-ui/tokens'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  isSpace?: boolean
}

export function TokensGrid({
  tokens,
  hasRemValue = false,
  isSpace = false,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {isSpace && <th></th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>

            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
            {isSpace && (
              <td>
                <div
                  style={{
                    backgroundColor: colors.lions300,
                    width: value,
                    height: '1rem',
                  }}
                ></div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
