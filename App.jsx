import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

class Example extends React.Component {
  render() {
    return (
      <Form>
        <legend>Title</legend>
        <Input hint="Input 1" />
        <Input hint="Input 2" />
        <Textarea hint="Textarea" />
        <Button variant="raised">Submit</Button>
      </Form>
    );
  }
}

export default Example;
