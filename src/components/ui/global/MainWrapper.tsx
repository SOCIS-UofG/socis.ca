import {
  type JSX,
  type FC,
  type PropsWithChildren,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from "react";

// import { cn } from "@/lib/utils";

const MainWrapper: FC<
  PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>>
> = (props): JSX.Element => <main {...props}>{props.children}</main>;

export default MainWrapper;
