import React from 'react'
import classNames from 'classnames/bind'

const Growler = ({growler, hideGrowler, message}) => {
  const growlerClass = classNames('growler', growler.type, {
    'growler--hiding': growler.status === 'hide',
    'growler--hidden': growler.status === 'hidden'
  })

  return (
    <div className={growlerClass} onClick={(evt) => { evt.preventDefault(); hideGrowler(growler) }}>
      <span className="icon {growler.icon}"></span>
      {message}
    </div>
  )
}

export default Growler
