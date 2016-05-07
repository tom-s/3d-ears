import React, { Component } from 'react'
import GrowlerContent from './GrowlerContent'

class Growler extends Component {

  getMessage () {
    const lang = this.props.currentLocale || 'enUS'
    let message = this.props.growler.text
    if (this.props.messages && this.props.messages[lang]) {
      return this.props.messages[lang][message] || message
    }
    return message
  }

  render () {
    const message = this.getMessage()
    this.props.hideTimeOutGrowler(this.props.growler, this.props.showFor)
    return <GrowlerContent {...this.props} message={message} />
  }
}

export default Growler
