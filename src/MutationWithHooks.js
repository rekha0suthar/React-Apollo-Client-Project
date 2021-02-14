import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { gql } from "apollo-boost";

const LOGIN_MUTATION = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      username
      email
      id
      token
    }
  }
`;

export function MutationWithHook() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { data, error }] = useMutation(LOGIN_MUTATION);

  if (error) {
    alert("Error Logging In User");
  }

  if (data) {
    alert("Successfully Logged In");
  }
  console.log(data);
  return (
    <form
      id="signinForm"
      className="text-center  p-4"
      onSubmit={(e) => {
        e.preventDefault();
        loginUser({ variables: { email, password } });
      }}
    >
      <p className="h4 mb-4 f-1">Sign In</p>
      Email:
      <br />
      <input
        title="Email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
      />
      <br />
      <br />
      Password:
      <br />
      <input
        title="Password"
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <br />
      <div className="form-group my-4">
        <button
          className="btn btn-block"
          type="submit"
          onSubmit={() => alert("Login succesful")}
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

export default MutationWithHook;
