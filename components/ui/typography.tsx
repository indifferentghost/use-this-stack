// import { fixedForwardRef as forwardRef } from "@/lib/utils";
import {
	ElementRef,
	ComponentPropsWithoutRef,
	forwardRef,
} from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const headingVariants = cva("scroll-m-20 tracking-tight", {
	variants: {
		variant: {
			h1: "text-4xl font-extrabold lg:text-5xl",
			h2: "border-b pb-2 text-3xl font-semibold first:mt-0",
			h3: "text-2xl font-semibold",
			h4: "text-xl font-semibold",
		},
	},
});

type NotNullable<T> = { [P in keyof T]: Exclude<T[P], null> };

type HeadingVariants = NotNullable<
	Required<VariantProps<typeof headingVariants>>
>;

const headingFactory = <T extends HeadingVariants["variant"]>(variant: T) => {
	const Comp = variant;
	const headingStyles = headingVariants({ variant });

	const heading = forwardRef<ElementRef<T>, ComponentPropsWithoutRef<T>>(
		({ className, children, ...props }, ref) => (
			// @ts-expect-error https://stackoverflow.com/questions/76198766/react-typescript-generics-how-to-resolve-not-assignable-to-type-intrinsicatt
			<Comp ref={ref} className={cn(headingStyles, className)} {...props}>
				{children}
			</Comp>
		),
	);

	heading.displayName = variant;
	return heading;
};

export const H1 = headingFactory('h1');

export const H2 = headingFactory('h2');

export const H3 = headingFactory('h3');

export const H4 = headingFactory('h4');

export const P = forwardRef<ElementRef<"p">, ComponentPropsWithoutRef<"p">>(
	({ className, children, ...props }, ref) => (
		<p
			ref={ref}
			className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
			{...props}
		>
			{children}
		</p>
	),
);
P.displayName = "P";

export const List = forwardRef<
	ElementRef<"ul">,
	ComponentPropsWithoutRef<"ul">
>(({ className, children, ...props }, ref) => (
	<ul
		ref={ref}
		className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
		{...props}
	>
		{children}
	</ul>
));
List.displayName = "List";
