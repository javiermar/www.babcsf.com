import type { ReactNode, SVGProps } from "react";

type IconProps = Readonly<Omit<SVGProps<SVGSVGElement>, "children">>;
type BaseIconProps = IconProps & Readonly<{ children: ReactNode }>;

function BaseIcon({ children, ...props }: BaseIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {children}
    </svg>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12.5v4.2c2.1 2.1 9.9 2.1 12 0v-4.2"/><path d="M22 10v6"/></BaseIcon>;
}

export function HeartIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6a5.5 5.5 0 0 0 1-8.8Z"/></BaseIcon>;
}

export function UsersIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></BaseIcon>;
}

export function MenuIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="M4 7h16M4 12h16M4 17h16"/></BaseIcon>;
}

export function ChevronLeftIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="m15 18-6-6 6-6"/></BaseIcon>;
}

export function ChevronRightIcon(props: IconProps) {
  return <BaseIcon {...props}><path d="m9 18 6-6-6-6"/></BaseIcon>;
}
