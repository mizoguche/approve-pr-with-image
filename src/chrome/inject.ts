export {};

const commentTextAreaQuery = "textarea[name='comment[body]']";
const pullReviewSummaryQuery = "textarea[name='pull_request_review[body]']";

chrome.runtime.onMessage.addListener((link) => {
  // PR comment
  const commentTextArea = window.document.querySelector<HTMLTextAreaElement>(
    commentTextAreaQuery,
  );
  if (commentTextArea) {
    commentTextArea.value = `${commentTextArea.value}\n${link}`;
  }

  // PR Review
  const summary = window.document.querySelector<HTMLTextAreaElement>(
    pullReviewSummaryQuery,
  );
  if (summary) {
    summary.value = `${summary.value}\n${link}`;
  }

  const approveRadioButton = window.document.querySelector<HTMLInputElement>(
    "input[name='pull_request_review[event]'][value='approve']",
  );
  if (approveRadioButton) {
    approveRadioButton.checked = true;
  }
});
