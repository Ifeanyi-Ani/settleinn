declare module "@tawk.to/tawk-messenger-react" {
  import { Component } from "react";

  interface TawkMessengerProps {
    propertyId: string;
    widgetId: string;
    customStyle?: {
      zIndex?: number;
      visibility?: {
        desktop?: {
          xOffset?: string | number;
          yOffset?: string | number;
          position?: "br" | "bl" | "cr" | "cl" | "tr" | "tl";
        };
        mobile?: {
          xOffset?: string | number;
          yOffset?: string | number;
          position?: "br" | "bl" | "cr" | "cl" | "tr" | "tl";
        };
      };
    };
    onLoad?: () => void;
    onStatusChange?: (status: string) => void;
    onChatMaximized?: () => void;
    onChatMinimized?: () => void;
    onChatHidden?: () => void;
    onChatStarted?: () => void;
    onChatEnded?: () => void;
    onPrechatSubmit?: (data: any) => void;
    onOfflineSubmit?: (data: any) => void;
    onChatMessageVisitor?: (message: string) => void;
    onChatMessageAgent?: (message: string) => void;
    onChatMessageSystem?: (message: string) => void;
    onAgentJoinChat?: (data: any) => void;
    onAgentLeaveChat?: (data: any) => void;
    onChatSatisfaction?: (satisfaction: string) => void;
    onVisitorNameChanged?: (visitorName: string) => void;
    onFileUpload?: (link: string) => void;
    onTagsUpdated?: (tags: string[]) => void;
  }

  class TawkMessengerReact extends Component<TawkMessengerProps> {
    setAttributes(
      attributes: Record<string, string>,
      callback?: (error: Error | null) => void,
    ): void;
    maximize(): void;
    minimize(): void;
    toggle(): void;
    popup(): void;
    showWidget(): void;
    hideWidget(): void;
    toggleVisibility(): void;
    endChat(): void;
    sendMessage(message: string): void;
  }

  export default TawkMessengerReact;
}
