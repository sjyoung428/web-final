import React from "react";

type TitleProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const Title = ({ children, ...rest }: TitleProps) => {
  return (
    <h2 className="font-bold text-3xl" {...rest}>
      {children}
    </h2>
  );
};

export default Title;
