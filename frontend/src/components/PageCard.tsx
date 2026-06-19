import type { ReactNode } from 'react';

interface PageCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

export default function PageCard({ title, children, className = '', bodyClassName = 'card-body' }: PageCardProps) {
  return (
    <div className={`card shadow-sm ${className}`.trim()}>
      <div className="card-header p-4 bg-primary text-white">
        <h1 className="display-6">{title}</h1>
      </div>
      <div className={bodyClassName}>
        {children}
      </div>
    </div>
  );
}
