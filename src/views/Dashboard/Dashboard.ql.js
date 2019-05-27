import graphql from "babel-plugin-relay/macro";

export default graphql`
  query DashboardQuery($prCount: Int!) {
    repository(owner: "burst-apps-team", name: "phoenix") {
      pullRequests(last: $prCount) {
        nodes {
          number
          createdAt
          mergedAt
          closedAt
        }
      }
    }
  }
`;
