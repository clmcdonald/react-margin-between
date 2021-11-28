import React, { CSSProperties, PropsWithChildren } from 'react';

interface StyleProp {
  style?: CSSProperties;
}

interface MarginBetweenProps {
  marginHorizontal?: string;
  marginVertical?: string;
}

const MarginBetween: React.FC<MarginBetweenProps> = (props) => {
  const getChildrenWithMargins = (): React.ReactNode => {
    return React.Children.map(props.children, (child, i) => {
      const item = child as React.ReactElement<
        React.PropsWithChildren<StyleProp>
      >;
      const itemStyle: CSSProperties = item.props.style || {};
      const childProps: Partial<PropsWithChildren<StyleProp>> = {};
      childProps.style = itemStyle;
      if (i < React.Children.count(props.children) - 1) {
        if (props.marginHorizontal)
          childProps.style.marginRight = props.marginHorizontal;
        if (props.marginVertical)
          childProps.style.marginBottom = props.marginVertical;
      }
      if (i > 0) {
        if (props.marginHorizontal)
          childProps.style.marginLeft = props.marginHorizontal;
        if (props.marginVertical)
          childProps.style.marginTop = props.marginVertical;
      }

      return React.cloneElement(item, childProps);
    });
  };

  return <React.Fragment>{getChildrenWithMargins()}</React.Fragment>;
};

export default MarginBetween;
