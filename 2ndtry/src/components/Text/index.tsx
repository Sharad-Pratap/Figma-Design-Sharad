import React from "react";

const sizeClasses = {
  txtWorkSansRomanRegular16WhiteA700: "font-normal font-worksans",
  txtWorkSansRomanRegular260: "font-normal font-worksans",
  txtWorkSansRomanSemiBold22: "font-semibold font-worksans",
  txtWorkSansRomanSemiBold68: "font-semibold font-worksans",
  txtInterSemiBold39: "font-inter font-semibold",
  txtWorkSansRomanRegular18: "font-normal font-worksans",
  txtWorkSansRomanSemiBold48: "font-semibold font-worksans",
  txtWorkSansRomanSemiBold26: "font-semibold font-worksans",
  txtWorkSansRomanMedium16Bluegray100: "font-medium font-worksans",
  txtWorkSansRomanRegular16: "font-normal font-worksans",
  txtWorkSansRomanSemiBold18: "font-semibold font-worksans",
  txtWorkSansRomanRegular32: "font-normal font-worksans",
  txtWorkSansRomanMedium16: "font-medium font-worksans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
