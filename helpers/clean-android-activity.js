function cleanAndroidActivity(content) {
  let sanitizedCode;
  if (content.match(/public class (\w+Activity) extends/)) {
    const activityName = content.match(/public class (\w+Activity) extends/)[1];
    const activityNameRegEx = new RegExp(activityName, 'g');
    sanitizedCode = content.replace(activityNameRegEx, 'MainActivity');
  }
  if (sanitizedCode && sanitizedCode.match(/R.layout.(activity[_\w]+)/)) {
    const layoutName = sanitizedCode.match(/R.layout.(activity[_\w]+)/)[1];
    const layoutNameRegEx = new RegExp(layoutName, 'g');
    sanitizedCode = sanitizedCode.replace(layoutNameRegEx, 'activity_main');
  }
  return sanitizedCode || content;
}
export { cleanAndroidActivity };