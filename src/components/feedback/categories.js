/* eslint es/no-computed-properties: off */

import React from 'react';
import CategoryLike from './components/category-like.js';
import CategoryProblem from './components/category-problem.js';
import CategoryConfusing from './components/category-confusing.js';

// This function holds the majority of text for the Feedback component
// It returns an object:
// - The key is the category's name
// - `helpful` infers if the user found the content helpful
// - `component` returns the component for the category
// To add, remove, or change the categories, update the object and the Feedback will automatically update with your changes.
export function categories({ type, submitFeedback }) {
  const genericType = returnGenericType(type);
  return {
    [`I like this ${genericType}`]: {
      helpful: true,
      component: (
        <CategoryLike
          leadText={`Tell us what you like about this ${type}.`}
          placeholder="What did you like?"
          options={[
            'I found what I need',
            'The information is accurate',
            `The ${genericType} is easy to understand`,
            'Something else'
          ]}
          submitFeedback={submitFeedback}
        />
      )
    },
    'Report a problem': {
      helpful: false,
      component: (
        <CategoryProblem
          leadText={`Tell us more about what's happening with this ${type}.`}
          options={{
            "Something is incorrect or doesn't work": {
              question: `What is incorrect or doesn't work and where on the ${genericType} does it appear?`,
              placeholder: "Let us know what is incorrect or doesn't work."
            },
            'I see an error message': {
              question: 'What error do you see and when did you encounter it?',
              placeholder: 'Let us know about the error message you see.'
            },
            'Something is missing': {
              question: 'What information are you looking for?',
              placeholder: 'Let us know what is missing.'
            },
            'Something else': {
              question: 'Describe the problem.',
              placeholder: 'Let us know more about the problem.'
            }
          }}
          submitFeedback={submitFeedback}
        />
      )
    },
    'Something is confusing': {
      helpful: false,
      component: (
        <CategoryConfusing
          option={`What about this ${type} is confusing?`}
          placeholder="Let us know what is confusing."
          submitFeedback={submitFeedback}
        />
      )
    }
  };
}

// Returns a generic type name for sectioned feedback
export function returnGenericType(type) {
  // Safe types that we will not swap for "content" in genericType
  const allowedTypes = ['page', 'example', 'playground'];
  // Replaces sectioned feedback "type" with a generic type to make button size predictable
  return allowedTypes.includes(type) ? type : 'content';
}
