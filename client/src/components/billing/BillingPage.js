import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import BillingForm from './BillingForm';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_DxmfbYWW8YHJec5ESRF9n0XS002ib6dHug">
        <div className="example">
          <h1>Go Premium now!</h1>
          <Elements>
            <BillingForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;