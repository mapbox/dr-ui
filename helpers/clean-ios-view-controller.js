function cleanIosViewController(content) {
  let namingPattern = /\n?NSString \*?const \*?MBXExample\w+ = @"(\w+)";\n?\s+?/;
  if (/@objc\((\w+)\)\n?\s+?/.test(content)) namingPattern = /@objc\((\w+)\)\n?\s+?/;
  if (content.match(namingPattern)) {
    const removeLine = content.replace(namingPattern, '');
    const viewControllerName = content.match(namingPattern)[1];
    const viewControllerNameRegEx = new RegExp(viewControllerName, 'g');
    const sanitizedCode = removeLine.replace(viewControllerNameRegEx, 'ViewController');
    return sanitizedCode;
  } else {
    return content;
  }
}
export { cleanIosViewController };