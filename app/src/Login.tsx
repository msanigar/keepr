import React, { useState } from 'react';
import fire from './fire';

type EmailAndPassword = {
  email: string;
  password: string;
};

const Login = () => {
  const [values, setValues] = React.useState<EmailAndPassword>({
    email: '',
    password: '',
  });

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .catch((error) => {
        console.error('Incorrect username or password');
      });
  };

  const handleChange = (fieldName: keyof EmailAndPassword) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues({ ...values, [fieldName]: e.currentTarget.value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange('email')}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          onChange={handleChange('password')}
          placeholder="Password"
        />
        <br />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
export default Login;
