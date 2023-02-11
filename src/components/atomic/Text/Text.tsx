import { ElementType } from "react"
import { Props } from "./Text.types"

const Text = <T extends ElementType = "span">({
    as,
    children,
    ...htmlAttributes
}: Props<T>) => {
    const Component = as || "span"
    return <Component {...htmlAttributes}>{children}</Component>
}

export default Text
