import jQuery from 'jquery';

const pullCommentQuery = "textarea[name='comment[body]']";
const pullReviewSummaryQuery = "textarea[name='pull_request_review[body]']";

chrome.runtime.onMessage.addListener((link) => {
  // PR comment
  const pullComment = `${jQuery(pullCommentQuery).val()}\n${link}`;
  jQuery(pullCommentQuery).val(pullComment);

  // PR Review
  const pullReviewComment = `${jQuery(pullReviewSummaryQuery).val()}\n${link}`;
  jQuery(pullReviewSummaryQuery).val(pullReviewComment);
  jQuery("input[name='pull_request_review[event]'][value='approve']").prop('checked', true);
});
