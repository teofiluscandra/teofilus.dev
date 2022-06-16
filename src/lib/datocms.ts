import { GraphQLClient } from "graphql-request";

type Variables = { [key: string]: any }

export function request(obj: {query: string, variables?: Variables | Variables[]}) {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient('https://graphql.datocms.com', { headers });
  return client.request(obj.query, obj.variables);
}
