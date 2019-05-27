/**
 * @flow
 * @relayHash e20a426faa9868a4a080a795355a7ea7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DashboardQueryVariables = {|
  prCount: number
|};
export type DashboardQueryResponse = {|
  +repository: ?{|
    +pullRequests: {|
      +nodes: ?$ReadOnlyArray<?{|
        +number: number,
        +createdAt: any,
        +mergedAt: ?any,
        +closedAt: ?any,
      |}>
    |}
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
) {
  repository(owner: "burst-apps-team", name: "phoenix") {
    pullRequests(last: $prCount) {
      nodes {
        number
        createdAt
        mergedAt
        closedAt
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
v2 = [
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "prCount"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "number",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mergedAt",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "closedAt",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pullRequests",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "PullRequestConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "PullRequest",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pullRequests",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "PullRequestConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "PullRequest",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/)
                ]
              }
            ]
          },
          (v7/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DashboardQuery",
    "id": null,
    "text": "query DashboardQuery(\n  $prCount: Int!\n) {\n  repository(owner: \"burst-apps-team\", name: \"phoenix\") {\n    pullRequests(last: $prCount) {\n      nodes {\n        number\n        createdAt\n        mergedAt\n        closedAt\n        id\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c571b53f7a99ed69e3355facd047dab0';
module.exports = node;
