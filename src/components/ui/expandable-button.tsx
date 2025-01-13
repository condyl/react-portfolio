import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const expandableButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-[background,opacity,colors,box-shadow] duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/90",
        secondary: "bg-foreground text-background hover:bg-foreground/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-12 [&_svg]:h-6 [&_svg]:w-6",
        sm: "h-10 [&_svg]:h-5 [&_svg]:w-5",
        lg: "h-14 [&_svg]:h-7 [&_svg]:w-7",
        xs: "h-6 [&_svg]:h-3 [&_svg]:w-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ExpandableButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof expandableButtonVariants> {
  icon: React.ReactNode
  text: string
}

export function ExpandableButton({
  className,
  variant,
  size,
  icon,
  text,
  ...props
}: ExpandableButtonProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout>()
  const textRef = React.useRef<HTMLSpanElement>(null)
  const [width, setWidth] = React.useState<number>(0)

  React.useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.scrollWidth)
    }
  }, [text])

  const handleMouseEnter = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsExpanded(true)
  }, [])

  const handleMouseLeave = React.useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false)
    }, 100)
  }, [])

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const isExtraSmall = size === "xs"
  const buttonWidth = isExpanded 
    ? width + (isExtraSmall ? 28 : 56)
    : isExtraSmall ? 24 : 48

  return (
    <button
      className={cn(
        expandableButtonVariants({ variant, size }),
        "transition-[width] duration-300 ease-out",
        isExpanded ? `w-[${buttonWidth}px]` : isExtraSmall ? "w-6" : "w-12",
        "overflow-hidden",
        className
      )}
      style={{
        width: buttonWidth,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="relative flex h-full w-full items-center">
        <div className={cn(
          "absolute",
          isExtraSmall ? "left-1.5" : "left-3"
        )}>
          {icon}
        </div>
        <span
          ref={textRef}
          className={cn(
            "absolute whitespace-nowrap transition-all duration-300 ease-out",
            isExtraSmall ? "text-[10px] left-[calc(6px+14px)]" : "text-base left-[calc(12px+28px)]",
            isExpanded 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 -translate-x-4 pointer-events-none"
          )}
        >
          {text}
        </span>
      </div>
    </button>
  )
} 