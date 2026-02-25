interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function Card({ children, className = '', onClick }: CardProps) {
    return (
        <div
            className={`bg-white dark:bg-darklight rounded-22 shadow-lg p-8 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}