/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.svg?inline' {
  const content: any
  export default content
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

/// <reference types="react-scripts" />
