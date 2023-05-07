export type NativeDomEvent = {
  target: {
    id: string;
  };
  preventDefault: () => void;
};

export type GenericType = {
  [key: string]: any;
};

export type HTMLInputEvent = React.ChangeEvent<HTMLInputElement>;
export type HTMLTextAreaEvent = React.ChangeEvent<HTMLTextAreaElement>;
export type HTMLSelectEvent = React.ChangeEvent<HTMLSelectElement>;
export type HTMLFormEvent = React.FormEvent<HTMLFormElement>;
export type HTMLButtonEvent = React.MouseEvent<HTMLButtonElement>;
export type HTMLAnchorEvent = React.MouseEvent<HTMLAnchorElement>;
export type HTMLImageEvent = React.MouseEvent<HTMLImageElement>;
export type HTMLDivElement = React.MouseEvent<HTMLDivElement>;
export type HTMLSpanElement = React.MouseEvent<HTMLSpanElement>;
export type HTMLUListElement = React.MouseEvent<HTMLUListElement>;
