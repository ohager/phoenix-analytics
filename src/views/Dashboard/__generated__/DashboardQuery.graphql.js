/**
 * @flow
 * @relayHash fa60cdcee6b06ddb98dd616be78dd7d0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DashboardQueryVariables = {|
  prCount: number,
  issueCount: number,
|};
export type DashboardQueryResponse = {|
  +repository: ?{|
    +stargazers: {|
      +totalCount: number
    |},
    +pullRequests: {|
      +totalCount: number,
      +nodes: ?$ReadOnlyArray<?{|
        +title: string,
        +number: number,
        +createdAt: any,
        +mergedAt: ?any,
        +closedAt: ?any,
        +author: ?{|
          +login: string
        |},
      |}>,
    |},
    +issues: {|
      +totalCount: number,
      +nodes: ?$ReadOnlyArray<?{|
        +number: number,
        +createdAt: any,
        +closedAt: ?any,
        +labels: ?{|
          +nodes: ?$ReadOnlyArray<?{|
            +name: string
          |}>
        |},
      |}>,
    |},
    +releases: {|
      +totalCount: number,
      +nodes: ?$ReadOnlyArray<?{|
        +createdAt: any,
        +name: ?string,
        +tag: ?{|
          +id: string,
          +name: string,
        |},
        +releaseAssets: {|
          +nodes: ?$ReadOnlyArray<?{|
            +downloadCount: number,
            +name: string,
          |}>
        |},
      |}>,
    |},
  |}
|};
export type DashboardQuery = {|
  variables: DashboardQueryVariables,
  response: DashboardQueryResponse,
|};
*/


/*
query DashboardQuery(
  $prCount: Int!
  $issueCount: Int!
) {
  repository(owner: "burst-apps-team", name: "phoenix") {
    stargazers(last: 1) {
      totalCount
    }
    pullRequests(last: $prCount, orderBy: {field: CREATED_AT, direction: ASC}) {
      totalCount
      nodes {
        title
        number
        createdAt
        mergedAt
        closedAt
        author {
          __typename
          login
          ... on Node {
            id
          }
        }
        id
      }
    }
    issues(last: $issueCount, orderBy: {field: CREATED_AT, direction: ASC}, states: [OPEN]) {
      totalCount
      nodes {
        number
        createdAt
        closedAt
        labels(first: 10) {
          nodes {
            name
            id
          }
        }
        id
      }
    }
    releases(last: 100, orderBy: {field: CREATED_AT, direction: ASC}) {
      totalCount
      nodes {
        createdAt
        name
        tag {
          id
          name
        }
        releaseAssets(last: 100) {
          nodes {
            downloadCount
            name
            id
          }
        }
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "prCount",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "issueCount",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "phoenix"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "burst-apps-team"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalCount",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "stargazers",
  "storageKey": "stargazers(last:1)",
  "args": [
    {
      "kind": "Literal",
      "name": "last",
      "value": 1
    }
  ],
  "concreteType": "StargazerConnection",
  "plural": false,
  "selections": [
    (v2/*: any*/)
  ]
},
v4 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "ASC",
    "field": "CREATED_AT"
  }
},
v5 = [
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "prCount"
  },
  (v4/*: any*/)
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "number",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mergedAt",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "closedAt",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
},
v12 = [
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "issueCount"
  },
  (v4/*: any*/),
  {
    "kind": "Literal",
    "name": "states",
    "value": [
      "OPEN"
    ]
  }
],
v13 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "Literal",
  "name": "last",
  "value": 100
},
v16 = [
  (v15/*: any*/),
  (v4/*: any*/)
],
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "tag",
  "storageKey": null,
  "args": null,
  "concreteType": "Ref",
  "plural": false,
  "selections": [
    (v17/*: any*/),
    (v14/*: any*/)
  ]
},
v19 = [
  (v15/*: any*/)
],
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "downloadCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DashboardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": "repository(name:\"phoenix\",owner:\"burst-apps-team\")",
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pullRequests",
            "storageKey": null,
            "args": (v5/*: any*/),
            "concreteType": "PullRequestConnection",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "PullRequest",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "author",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      (v11/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "issues",
            "storageKey": null,
            "args": (v12/*: any*/),
            "concreteType": "IssueConnection",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "Issue",
                "plural": true,
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v10/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "labels",
                    "storageKey": "labels(first:10)",
                    "args": (v13/*: any*/),
                    "concreteType": "LabelConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "nodes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Label",
                        "plural": true,
                        "selections": [
                          (v14/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "releases",
            "storageKey": "releases(last:100,orderBy:{\"direction\":\"ASC\",\"field\":\"CREATED_AT\"})",
            "args": (v16/*: any*/),
            "concreteType": "ReleaseConnection",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "Release",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
                  (v14/*: any*/),
                  (v18/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "releaseAssets",
                    "storageKey": "releaseAssets(last:100)",
                    "args": (v19/*: any*/),
                    "concreteType": "ReleaseAssetConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "nodes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ReleaseAsset",
                        "plural": true,
                        "selections": [
                          (v20/*: any*/),
                          (v14/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DashboardQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": "repository(name:\"phoenix\",owner:\"burst-apps-team\")",
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pullRequests",
            "storageKey": null,
            "args": (v5/*: any*/),
            "concreteType": "PullRequestConnection",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "PullRequest",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "author",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      },
                      (v11/*: any*/),
                      (v17/*: any*/)
                    ]
                  },
                  (v17/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "issues",
            "storageKey": null,
            "args": (v12/*: any*/),
            "concreteType": "IssueConnection",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "Issue",
                "plural": true,
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v10/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "labels",
                    "storageKey": "labels(first:10)",
                    "args": (v13/*: any*/),
                    "concreteType": "LabelConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "nodes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Label",
                        "plural": true,
                        "selections": [
                          (v14/*: any*/),
                          (v17/*: any*/)
                        ]
                      }
                    ]
                  },
                  (v17/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "releases",
            "storageKey": "releases(last:100,orderBy:{\"direction\":\"ASC\",\"field\":\"CREATED_AT\"})",
            "args": (v16/*: any*/),
            "concreteType": "ReleaseConnection",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "Release",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
                  (v14/*: any*/),
                  (v18/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "releaseAssets",
                    "storageKey": "releaseAssets(last:100)",
                    "args": (v19/*: any*/),
                    "concreteType": "ReleaseAssetConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "nodes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ReleaseAsset",
                        "plural": true,
                        "selections": [
                          (v20/*: any*/),
                          (v14/*: any*/),
                          (v17/*: any*/)
                        ]
                      }
                    ]
                  },
                  (v17/*: any*/)
                ]
              }
            ]
          },
          (v17/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DashboardQuery",
    "id": null,
    "text": "query DashboardQuery(\n  $prCount: Int!\n  $issueCount: Int!\n) {\n  repository(owner: \"burst-apps-team\", name: \"phoenix\") {\n    stargazers(last: 1) {\n      totalCount\n    }\n    pullRequests(last: $prCount, orderBy: {field: CREATED_AT, direction: ASC}) {\n      totalCount\n      nodes {\n        title\n        number\n        createdAt\n        mergedAt\n        closedAt\n        author {\n          __typename\n          login\n          ... on Node {\n            id\n          }\n        }\n        id\n      }\n    }\n    issues(last: $issueCount, orderBy: {field: CREATED_AT, direction: ASC}, states: [OPEN]) {\n      totalCount\n      nodes {\n        number\n        createdAt\n        closedAt\n        labels(first: 10) {\n          nodes {\n            name\n            id\n          }\n        }\n        id\n      }\n    }\n    releases(last: 100, orderBy: {field: CREATED_AT, direction: ASC}) {\n      totalCount\n      nodes {\n        createdAt\n        name\n        tag {\n          id\n          name\n        }\n        releaseAssets(last: 100) {\n          nodes {\n            downloadCount\n            name\n            id\n          }\n        }\n        id\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '454561865613fcb8effcb61fd3a9f375';
module.exports = node;
