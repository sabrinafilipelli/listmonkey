import React from 'react'

const FirebaseContext = React.createContext(null)

/**
 * @function withFirebase
 * @param {*} Component
 * @param {Object} props
 * @description  HOC which generates a new component with access to the firebase context properties.
 */

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)

export { FirebaseContext as default, withFirebase }
