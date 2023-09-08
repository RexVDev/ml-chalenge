import { ReactNode } from "react";

export type ReactFunctionComponet<T = unknown> = { children?: ReactNode } & T;
export type OmitClassNameAndStyle<T> = Omit<T, 'classname'> & Omit <T, 'style'>;
export type Values<T> = T[keyof T];
