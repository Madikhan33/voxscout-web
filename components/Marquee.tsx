import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
    children: React.ReactNode;
    className?: string;
    reverse?: boolean;
}

export function Marquee({ children, className, reverse = false }: MarqueeProps) {
    return (
        <div className={cn("flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={cn("flex min-w-full shrink-0 gap-8 py-4 animate-scroll", reverse && "direction-reverse")}>
                {children}
                {children}
            </div>
        </div>
    );
}
