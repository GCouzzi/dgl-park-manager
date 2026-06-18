interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = '' }: IconProps) {
  return <i className={`bi ${name} ${className}`.trim()}></i>;
}
