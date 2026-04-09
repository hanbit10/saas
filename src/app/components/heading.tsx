import { HTMLAttributes, ReactNode } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    children?: ReactNode
    
}

export const Heading = ({children, className, ...props}: HeadingProps) => {

}