import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  id?: string;
  containerClassName?: string;
}

export function Section({
  as: Component = "section",
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <Component id={id} className={cn("py-16 md:py-24", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
}
