function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
/**
 * A component to show content inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Content>
 *       <Text variant="titleLarge">Card title</Text>
 *       <Text variant="bodyMedium">Card content</Text>
 *     </Card.Content>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
const CardContent = _ref => {
  let {
    index,
    total,
    siblings,
    style,
    ...rest
  } = _ref;
  const cover = 'withInternalTheme(CardCover)';
  const title = 'withInternalTheme(CardTitle)';
  let contentStyle, prev, next;
  if (typeof index === 'number' && siblings) {
    prev = siblings[index - 1];
    next = siblings[index + 1];
  }
  if (prev === cover && next === cover || prev === title && next === title || total === 1) {
    contentStyle = styles.only;
  } else if (index === 0) {
    if (next === cover || next === title) {
      contentStyle = styles.only;
    } else {
      contentStyle = styles.first;
    }
  } else if (typeof total === 'number' && index === total - 1) {
    if (prev === cover || prev === title) {
      contentStyle = styles.only;
    } else {
      contentStyle = styles.last;
    }
  } else if (prev === cover || prev === title) {
    contentStyle = styles.first;
  } else if (next === cover || next === title) {
    contentStyle = styles.last;
  }
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [styles.container, contentStyle, style]
  }));
};
CardContent.displayName = 'Card.Content';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  },
  first: {
    paddingTop: 16
  },
  last: {
    paddingBottom: 16
  },
  only: {
    paddingVertical: 16
  }
});
export default CardContent;
//# sourceMappingURL=CardContent.js.map