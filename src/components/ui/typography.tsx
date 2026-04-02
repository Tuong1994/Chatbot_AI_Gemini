import { FC, forwardRef, HTMLAttributes, ReactNode, Ref } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  level?: 1 | 2 | 3 | 4;
}

const Title: FC<TitleProps> = forwardRef(
  ({ children, level = 1, className, ...restProps }, ref: Ref<HTMLHeadingElement>) => {
    const commonProps = { ref, ...restProps };

    return (
      <>
        {level === 1 && (
          <h1
            {...commonProps}
            className={`scroll-m-20 text-4xl font-extrabold tracking-tight text-balance ${className}`}
          >
            {children}
          </h1>
        )}
        {level === 2 && (
          <h2
            {...commonProps}
            className={`scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
          >
            {children}
          </h2>
        )}
        {level === 3 && (
          <h3 {...commonProps} className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
            {children}
          </h3>
        )}
        {level === 4 && (
          <h4 {...commonProps} className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
            {children}
          </h4>
        )}
      </>
    );
  }
);

export { Title };
