import { ComponentPropsWithoutRef, ElementType } from "react"

// Reference: https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript
export type TextProps<T extends ElementType> = {
    as?: T
}

export type Props<T extends ElementType> = React.PropsWithChildren<
    TextProps<T>
> &
    Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>
