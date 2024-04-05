import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface IconButtonProps extends ComponentProps<'button'> {
    transparent?: boolean
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
    return (
        <button
            {...props}
            // className={transparent
            //     ? 'hover:bg-white/10 bg-black/20 border border-white/10 rounded-md p-1.5'
            //     : 'hover:bg-white/20 bg-white/5 border border-white/10 rounded-md p-1.5'
            // }
            className={twMerge(
                'border border-white/10 rounded-md p-1.5',
                transparent ? 'hover:bg-white/10 bg-black/20' : 'hover:bg-white/20 bg-white/5 border',
                props.disabled ? 'opacity-50 hover:bg-white/5' : null
            )}
        />
    )
}