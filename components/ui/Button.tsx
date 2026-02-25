import Link from 'next/link';

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    className?: string;
}

export default function Button({
    href,
    onClick,
    children,
    variant = 'primary',
    className = ''
}: ButtonProps) {
    const baseClass = variant === 'primary' ? 'btn' : 'btn_outline';
    const classes = `${baseClass} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
}