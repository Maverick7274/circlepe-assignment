import { cn } from "./utils";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={cn(
        "min-h-screen flex items-center justify-center",
        className,
      )}
      {...restProps}
    >
      {
        children
      }
    </Comp>
  );
}