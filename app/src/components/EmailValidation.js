import React from 'react'

class Validation extends React.Component {
  render () {
    return (
      <section className="Validation">
        Your account is being validated, you will be redirected when the process is over
      </section>
    )
  }

  componentDidMount () {
    const { email, token, emailValidate } = this.props
    emailValidate({
      email,
      token
    })
  }
}

export default Validation