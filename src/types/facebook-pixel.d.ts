export {};

declare global {
  type MetaEvent =
    | "PageView"
    | "Lead"
    | "Contact"
    | "Schedule"
    | "CompleteRegistration"
    | "ViewContent"
    | "Search"
    | "AddToCart"
    | "InitiateCheckout"
    | "Purchase";

  type MetaPixel = {
    (command: "init", pixelId: string): void;

    (
      command: "track",
      event: MetaEvent,
      parameters?: Record<string, unknown>,
    ): void;

    (
      command: "trackCustom",
      event: string,
      parameters?: Record<string, unknown>,
    ): void;
  };

  interface Window {
    fbq?: MetaPixel;
  }
}
