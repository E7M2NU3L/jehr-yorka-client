import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-dark-gold font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out active:translate-y-1 active:scale-95",
        destructive:
          "bg-gradient-to-tr from-dark-red via-other-red to-subtle-red hover:translate-x-1 hover:scale-105 active:translate-y-1 active:scale-95 hover:bg-gradient-to-br hover:from-subtle-red hover:via-other-red rounded-md hover:to-dark-red transition-all duration-300 ease-in-out font-semibold text-dark-white rounded-xl font-semibold",
        outline:
          "border rounded-xl border-dark-gold hover:translate-x-2 active:translate-y-1 active:scale-95  hover:scale-105 hover:bg-dark-gold text-subtle-gold font-normal hover:text-dark-white transition-all duration-300 ease-in-out",
        secondary:
          "border border-dark-green rounded-md hover:shadow-dark-green/40 hover:shadow-md text-dark-green hover:translate-x-1 hover:scale-105 active:translate-y-1 active:scale-95 transition-all duration-300 ease-in-out hover:bg-dark-green hover:text-dark-black",
        ghost: "border-subtle-gold border text-dark-gold hover:bg-dark-gold hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
