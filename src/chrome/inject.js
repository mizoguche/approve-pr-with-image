import jQuery from 'jquery';

const pullCommentQuery = "textarea[name='comment[body]']";
const pullReviewSummaryQuery = "textarea[name='pull_request_review[body]']";

chrome.runtime.onMessage.addListener((link) => {
  const pullComment = `${jQuery(pullCommentQuery).val()}\n${link}`;
  jQuery(pullCommentQuery).val(pullComment);
  jQuery(pullReviewSummaryQuery).val(pullComment);
  jQuery("input[name='pull_request_review[event]'][value='approve']").prop('checked', true);
});
