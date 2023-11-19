"use client";

import type { ReactElement } from "react";
import { gql, useQuery } from "@apollo/client";
import type { Link } from "database";
import { AwesomeLink } from "./awesome-link.tsx";

const AllLinksQuery = gql`
    query allLinksQuery($first: Int, $after: ID) {
        links(first: $first, after: $after) {
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                cursor
                node {
                    imageUrl
                    url
                    title
                    category
                    description
                    id
                }
            }
        }
    }
`;

interface AllLinksQueryResult {
  links: {
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
    };
    edges: {
      cursor: string;
      node: Link;
    }[];
  };
}

export default function Links(): ReactElement {
  const { data, loading, error, fetchMore } = useQuery<AllLinksQueryResult>(AllLinksQuery, {
    variables: { first: 2 },
  });

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const { endCursor, hasNextPage } = data.links.pageInfo;

  return (
    <div className="container mx-auto max-w-5xl my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.links.edges.map(({ node }: { node: Link }) => (
          <AwesomeLink
            category={node.category}
            description={node.description}
            id={node.id}
            imageUrl={node.imageUrl}
            key={node.id}
            title={node.title}
            url={node.url}
          />
        ))}
      </div>
      {hasNextPage ? (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded my-10"
          onClick={async () => {
            await fetchMore({
              variables: { after: endCursor },
              updateQuery: (prevResult, { fetchMoreResult }) => {
                fetchMoreResult.links.edges = [
                  ...prevResult.links.edges,
                  ...fetchMoreResult.links.edges,
                ];
                return fetchMoreResult;
              },
            });
          }}
          type="button"
        >
          more
        </button>
      ) : (
        <p className="my-10 text-center font-medium">
          You&apos;ve reached the end!{" "}
        </p>
      )}
    </div>
  );
}
