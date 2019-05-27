import graphql from "babel-plugin-relay/macro";

export default graphql`
  query DashboardQuery($prCount: Int!) {
    repository(owner:"burst-apps-team",name:"phoenix") {
      stargazers(last:1){
        totalCount
      }
      pullRequests(last:$prCount, orderBy: {field: CREATED_AT, direction: ASC} ){
        totalCount
        nodes {
          title
          number
          createdAt
          mergedAt
          closedAt
          author {
            login
          }
        }
      }
      issues(last: 100, orderBy: {field: CREATED_AT, direction: ASC}){
        totalCount
        nodes{
          number
          createdAt
          closedAt
          labels(first:10) {
            nodes{
              name
            }
          }
        }
      }
      releases(last:100,  orderBy: {field: CREATED_AT, direction: ASC}){
        totalCount
        nodes{
          createdAt
          name
          tag {
            id
            name
          }
          releaseAssets(last:100){
            nodes{
              downloadCount
              name
            }
          }
        }
      }
    }
  }
`;
