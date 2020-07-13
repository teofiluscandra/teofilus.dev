import Container from './Container'
import cn from 'classnames'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white fixed w-full': preview,
        'hidden': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview && (
            <>
             ⚠️  Stay safe and healthy.
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert