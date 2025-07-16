import { Link } from "react-router-dom";

type SeeProductButtonProps = {
    to: string;
    variant?: 'primary' | 'secondary'| 'orange';  // Added 'orange' to union type
    className?: string;
}

export function SeeProductButton({ to, variant = 'primary', className = '' }: SeeProductButtonProps) {
    const baseStyles = 'px-6 py-3 mt-4 transition-colors duration-300 uppercase';
    const variants = {
        primary: 'text-white bg-[#101010] hover:bg-[#f1f1f1] hover:text-[#101010]',
        secondary: 'text-black border-black border-2 bg-transparent hover:bg-[#101010] hover:text-[#f1f1f1]',
        orange:'text-white bg-[#D87D4A] hover:bg-[#FBAF85]'
    };

    return (
        <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
            See product
        </Link>
    );
}