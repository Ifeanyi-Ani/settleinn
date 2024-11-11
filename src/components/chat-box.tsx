import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export const ChatBox = ({
  tawkMessengerRef,
}: {
  tawkMessengerRef: React.RefObject<TawkMessengerReact>;
}) => {
  return (
    <>
      <TawkMessengerReact
        onLoad={() => {
          tawkMessengerRef.current?.hideWidget();
        }}
        propertyId={import.meta.env.VITE_TAWKTO_PROPERTYID}
        widgetId={import.meta.env.VITE_TAWKTO_WIDGETID}
        ref={tawkMessengerRef}
      />
    </>
  );
};
