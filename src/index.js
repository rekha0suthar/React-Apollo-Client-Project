import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import App from "./App";
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/" //URL of the GraphQL server
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
