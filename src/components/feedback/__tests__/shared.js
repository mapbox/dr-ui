export function expectThankYou(feedback) {
  // After submit, expect to see the thank you message
  const thankYou = feedback.find('p').last();
  expect(thankYou.text()).toEqual(
    'Our documentation team will read your feedback. Thank you for helping us improve this page.'
  );
}
