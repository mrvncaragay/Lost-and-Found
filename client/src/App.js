import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Checkbox, Form } from 'semantic-ui-react';

function App() {
  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default App;
