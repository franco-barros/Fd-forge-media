type MetaParameters = Record<string, unknown>;

const isBrowser = (): boolean => typeof window !== "undefined";

const isMetaReady = (): boolean =>
  isBrowser() && typeof window.fbq === "function";

const track = (event: MetaEvent, parameters?: MetaParameters): void => {
  if (!isMetaReady()) return;

  window.fbq?.("track", event, parameters);
};

export const pageView = (): void => {
  track("PageView");
};

export const lead = (parameters?: MetaParameters): void => {
  track("Lead", parameters);
};

export const contact = (parameters?: MetaParameters): void => {
  track("Contact", parameters);
};

export const schedule = (parameters?: MetaParameters): void => {
  track("Schedule", parameters);
};

export const completeRegistration = (parameters?: MetaParameters): void => {
  track("CompleteRegistration", parameters);
};

export const viewContent = (parameters?: MetaParameters): void => {
  track("ViewContent", parameters);
};

export const search = (parameters?: MetaParameters): void => {
  track("Search", parameters);
};

export const purchase = (parameters?: MetaParameters): void => {
  track("Purchase", parameters);
};

export const initiateCheckout = (parameters?: MetaParameters): void => {
  track("InitiateCheckout", parameters);
};

export const addToCart = (parameters?: MetaParameters): void => {
  track("AddToCart", parameters);
};

export const customEvent = (
  event: string,
  parameters?: MetaParameters,
): void => {
  if (!isMetaReady()) return;

  window.fbq?.("trackCustom", event, parameters);
};
