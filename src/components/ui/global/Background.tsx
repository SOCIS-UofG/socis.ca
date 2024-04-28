import { cn } from "@/lib/utils";
import {
  type JSX,
  type FC,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from "react";

/**
 * CustomBackgroundProps
 */
interface _BackgroundProps {
  text: string;
  animated?: boolean;
}

export type BackgroundProps = _BackgroundProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * Background Component
 *
 * @returns JSX.Element
 */
const Background: FC<BackgroundProps> = (props): JSX.Element => {
  return (
    <div className={cn("relative", props.className)}>
      <h1
        className={cn(
          "fixed -top-80 left-1/2 -translate-x-1/2 transform text-[40rem] font-black",
          props.animated ? "animate-pulse-emerald" : "text-outline-secondary",
        )}
      >
        {props.text}
      </h1>
      <h1
        className={cn(
          "fixed left-1/2 top-8 -translate-x-1/2 transform text-[40rem] font-black",
          props.animated ? "animate-pulse-emerald" : "text-outline-secondary",
        )}
      >
        {props.text}
      </h1>
      <h1
        className={cn(
          "fixed left-1/2 top-96 -translate-x-1/2 transform text-[40rem] font-black",
          props.animated ? "animate-pulse-emerald" : "text-outline-secondary",
        )}
      >
        {props.text}
      </h1>
    </div>
  );
};

/**
 * Export the component by default
 */
export default Background;
