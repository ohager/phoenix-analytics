import _ from "lodash";
import {
  format,
  parse
} from "date-fns";

export const isOpen = issue => issue.closedAt === null;
export const isBug = issue => _.some(issue.labels.nodes, { name: 'bug'} );
export const isFeature = issue => !isBug(issue);

const _countOpenIssues = ({nodes}) => nodes.filter(isOpen);

const _getOldestIssue = (nodes) => {
  const sorted = _.sortBy(nodes, ['createdAt']);
  return sorted.length > 0 ? format(parse(sorted[0].createdAt), "MMM Do") : " - ";
};


const _getIssueStats = issues => {
  const openIssues = _countOpenIssues(issues);
  const openBugCount = openIssues.reduce( (p, i) => isBug(i) ? p+1 : p, 0);
  const totalIssues = issues.totalCount;

  const oldestOpen = _getOldestIssue(openIssues);

  return {
    totalIssues,
    oldestOpen,
    openBugs: openBugCount,
    openFeatureRequests: openIssues.length - openBugCount
  }
};

export const getIssueStats = _.memoize(_getIssueStats);
