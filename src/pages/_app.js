import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import "../../styles/globals.css";

const client = new ApolloClient({
  uri: "https://polar-caverns-79930.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
