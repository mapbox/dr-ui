export function expectThankYou(feedback) {
  // After submit, expect to see the thank you message
  const thankYou = feedback.find('p').last();
  expect(thankYou.text()).toEqual(
    'Our documentation team will read your feedback. Thank you for helping us improve this page.'
  );
}

// Asserts that the textarea will show an error message when the character limit is met
// and the submit button becomes disabled
export function testTextArea(feedback) {
  const textarea = feedback.find('textarea');
  // Add too much text
  textarea.simulate('change', {
    target: {
      value: `${"I found a sandwich and I want to know why there isn't any mayonnaise.".repeat(
        30
      )}`
    }
  });
  const feedbackLength = feedback.find('#feedback-length');
  expect(feedbackLength.text()).toEqual('-1070');
  const overLimit = feedback.find('#feedback-overlimit');
  expect(overLimit.text()).toEqual(
    ' Your message is over the 1000 character limit.'
  );
  // Submit button is disabled when user enters too long text
  expect(
    feedback.find('#dr-ui--feedback-submit-button').props().disabled
  ).toBeTruthy();
  textarea.simulate('change', {
    target: {
      value:
        "I found a sandwich and I want to know why there isn't any mayonnaise."
    }
  });
  // Button is enabled now that user submitted feedback
  expect(
    feedback.find('#dr-ui--feedback-submit-button').props().disabled
  ).toBeFalsy();
  expect(feedback.find('#feedback-length').text()).toEqual('931');
}
