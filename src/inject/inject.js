var pullCommentQuery = "textarea[name='comment[body]']";
var pullReviewSummaryQuery = "textarea[name='pull_request_review[body]']";
chrome.runtime.onMessage.addListener((link, sender, sendResponse) => {
    $(pullCommentQuery).val($(pullCommentQuery).val() + "\n" + link);
    $(pullReviewSummaryQuery).val($(pullReviewSummaryQuery).val() + "\n" + link);
    $("input[name='pull_request_review[event]'][value='approve']").prop("checked", true);
});
