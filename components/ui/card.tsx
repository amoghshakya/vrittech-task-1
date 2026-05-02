import clsx from "clsx";

type CardProps = React.ComponentProps<"div">;

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={clsx("rounded-[30px] w-full h-full px-8 py-16", className)}
      {...props}
    >
      {children}
    </div>
  );
}
