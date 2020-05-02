"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commentTextAreaQuery = "textarea[name='comment[body]']";
const pullReviewSummaryQuery = "textarea[name='pull_request_review[body]']";
chrome.runtime.onMessage.addListener((link) => {
    // PR comment
    const commentTextArea = window.document.querySelector(commentTextAreaQuery);
    if (commentTextArea) {
        commentTextArea.value = `${commentTextArea.value}\n${link}`;
    }
    // PR Review
    const summary = window.document.querySelector(pullReviewSummaryQuery);
    if (summary) {
        summary.value = `${summary.value}\n${link}`;
    }
    const approveRadioButton = window.document.querySelector("input[name='pull_request_review[event]'][value='approve']");
    if (approveRadioButton) {
        approveRadioButton.checked = true;
    }
});
