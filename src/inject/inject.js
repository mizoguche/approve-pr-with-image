import $ from 'jquery';

const pullCommentQuery = "textarea[name='comment[body]']";
const pullReviewSummaryQuery = "textarea[name='pull_request_review[body]']";

chrome.runtime.onMessage.addListener((link) => {
  const pullComment = `${$(pullCommentQuery).val()}\n${link}`;
  $(pullCommentQuery).val(pullComment);
  $(pullReviewSummaryQuery).val(pullComment);
  $("input[name='pull_request_review[event]'][value='approve']").prop('checked', true);
});
