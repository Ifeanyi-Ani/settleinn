/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SERVICE_ID: string;
  readonly VITE_CONTACT_TEMPLATE: string;
  readonly VITE_NEWS_TEMPLATE: string;
  readonly VITE_PUBLIC_KEY: string;

  readonly VITE_TAWKTO_PROPERTYID: string;
  readonly VITE_TAWKTO_WIDGETID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
