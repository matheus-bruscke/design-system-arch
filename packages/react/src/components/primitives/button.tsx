import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const variants = cva(
  "rounded-ds-radii-lg flex items-center justify-center gap-3 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-ds-primary text-ds-bg hover:bg-ds-primary/90",
      },
      size: {
        lg: "px-4 py-2 h-10 text-base font-medium",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

export const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={cn(variants({ variant, size }), className)}>
      {children}
    </button>
  );
};
