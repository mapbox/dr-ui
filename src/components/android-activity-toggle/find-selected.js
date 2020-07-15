export default function findSelectedCode(languages, preference) {
  return Object.keys(languages).reduce((selected, language) => {
    // check to see if the preference is available
    if (
      language === preference &&
      languages[preference] &&
      languages[language] !== undefined
    ) {
      selected = languages[language];
    }
    // if preference is not availble use any other option
    else if (!languages[preference] && languages[language] !== undefined) {
      selected = languages[language];
    }
    return selected;
  }, '');
}
