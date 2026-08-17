import { Link, useRouterState } from "@tanstack/react-router";
import { X, Send, RefreshCw } from "lucide-react";
import { useEffect, useState, useRef, FormEvent } from "react";
import { useV, type VReaction } from "./VContext";
import { VAvatar } from "./VAvatar";
import { getVMessageForPath, V_STARTER_PROMPTS, matchVResponse } from "@/lib/v-guide";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  sender: "v" | "user";
  text: string;
  timestamp: Date;
  reaction?: VReaction;
};

function VMascotPanel({
  className,
  onClose,
}: {
  className?: string;
  onClose?: () => void;
}) {
  const { message, reaction, setMessage, setReaction } = useV();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial",
      sender: "v",
      text: message,
      timestamp: new Date(),
      reaction: reaction,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastGlobalMsg = useRef(message);

  // Auto-scroll to the bottom of the chat list
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Sync route changes or map building clicks into the chat log
  useEffect(() => {
    if (message !== lastGlobalMsg.current) {
      lastGlobalMsg.current = message;
      setMessages((prev) => [
        ...prev,
        {
          id: `global-${Date.now()}`,
          sender: "v",
          text: message,
          timestamp: new Date(),
          reaction: reaction,
        },
      ]);
    }
  }, [message, reaction]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // 1. Add user message to history
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    setReaction("think"); // pose: thinking

    // 2. Simulate AI thinking delay and add reply
    setTimeout(() => {
      const response = matchVResponse(text);
      const vMsg: ChatMessage = {
        id: `v-${Date.now()}`,
        sender: "v",
        text: response.message,
        timestamp: new Date(),
        reaction: response.reaction,
      };
      setMessages((prev) => [...prev, vMsg]);
      setIsTyping(false);
      
      // Update global context so map avatar matches chatbot
      setMessage(response.message, true, response.reaction);
    }, 1100);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend(inputValue);
  };

  const handleReset = () => {
    setMessages([
      {
        id: `reset-${Date.now()}`,
        sender: "v",
        text: "Hi! How can I help you navigate the Certcia campus today?",
        timestamp: new Date(),
        reaction: "hi",
      },
    ]);
    setMessage("Hi! How can I help you navigate the Certcia campus today?", true, "hi");
  };

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_24px_64px_-20px_rgba(15,14,26,0.35)]",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-[#5B4CF5] to-[#7C6FF7] px-4 py-3 text-white">
        <div className="flex items-center gap-2.5">
          <VAvatar size="sm" reaction={isTyping ? "think" : reaction} className="bg-[#0F1533] p-0.5 rounded-full" />
          <div>
            <p className="font-display text-sm font-semibold tracking-wide">V</p>
            <p className="text-[10px] text-white/80">Interactive AI Guide</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg p-1.5 text-white/80 hover:bg-white/15 transition-colors"
            title="Reset conversation"
            aria-label="Reset chat history"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-white/80 hover:bg-white/15 transition-colors"
              aria-label="Close V"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-[#F8F9FD] p-4 min-h-[260px] max-h-[340px] space-y-3 scrollbar-thin">
        {messages.map((msg) => {
          const isUser = msg.sender === "user";
          return (
            <div
              key={msg.id}
              className={cn("flex gap-2 max-w-[85%]", isUser ? "ml-auto flex-row-reverse" : "mr-auto")}
            >
              {!isUser && (
                <VAvatar
                  size="sm"
                  reaction={msg.reaction || "stand"}
                  className="mt-0.5 h-7 w-7 bg-[#0F1533] p-0.5 rounded-full shrink-0"
                />
              )}
              <div
                className={cn(
                  "rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm",
                  isUser
                    ? "bg-gradient-to-br from-[#5B4CF5] to-[#7C6FF7] text-white rounded-tr-sm"
                    : "bg-white text-foreground border border-border/40 rounded-tl-sm"
                )}
              >
                {msg.text}
              </div>
            </div>
          );
        })}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-2 max-w-[85%] mr-auto">
            <VAvatar
              size="sm"
              reaction="think"
              className="mt-0.5 h-7 w-7 bg-[#0F1533] p-0.5 rounded-full shrink-0"
            />
            <div className="flex gap-1 items-center px-4 py-3 bg-white border border-border/40 rounded-2xl rounded-tl-sm w-16">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5B4CF5] animate-bounce [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#5B4CF5] animate-bounce [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#5B4CF5] animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips */}
      <div className="flex gap-1.5 overflow-x-auto px-3 py-2 border-t border-border/50 bg-white scrollbar-none">
        {V_STARTER_PROMPTS.map((prompt) => (
          <button
            key={prompt.id}
            type="button"
            onClick={() => handleSend(prompt.label)}
            className="shrink-0 rounded-full border border-border/80 bg-[#FAFBFE] px-3 py-1 text-[11px] font-medium text-foreground/80 hover:border-[#5B4CF5]/40 hover:bg-[#5B4CF5]/5 hover:text-[#5B4CF5] transition-all"
          >
            {prompt.label}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-border/60 px-3 py-2.5 bg-white">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me about pathways, map buildings..."
          className="flex-1 rounded-xl border border-border/70 px-3 py-2 text-xs focus:border-[#5B4CF5] focus:outline-none placeholder:text-muted-foreground/75"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isTyping}
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#5B4CF5] text-white transition-all hover:bg-[#7C6FF7] disabled:bg-muted disabled:text-muted-foreground"
          aria-label="Send message"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
}

export function VChatFloating() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { floatingOpen, setFloatingOpen, setMessage } = useV();

  useEffect(() => {
    setMessage(getVMessageForPath(pathname), true);
  }, [pathname, setMessage]);

  useEffect(() => {
    if (!floatingOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFloatingOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [floatingOpen, setFloatingOpen]);

  // Expose function globally to focus chatbot from other areas (e.g. map clicks)
  useEffect(() => {
    (window as Window & { focusVChat?: () => void }).focusVChat = () => {
      setFloatingOpen(true);
    };
    return () => {
      delete (window as Window & { focusVChat?: () => void }).focusVChat;
    };
  }, [setFloatingOpen]);

  if (!floatingOpen) {
    return (
      <button
        type="button"
        onClick={() => setFloatingOpen(true)}
        className="group fixed bottom-6 right-6 z-[90]"
        aria-label="Open V guide"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#5B4CF5]/30 animate-ping"
          style={{ animationDuration: "4s" }}
          aria-hidden
        />
        <span className="relative flex items-center gap-2.5 rounded-full border border-[#E4E2F0] bg-white py-1.5 pl-1.5 pr-5 shadow-[0_12px_40px_-12px_rgba(91,76,245,0.35)] transition-all group-hover:scale-[1.03]">
          <VAvatar size="sm" reaction="hi" className="bg-[#0F1533] p-0.5 rounded-full shrink-0" />
          <span className="font-display text-sm font-semibold tracking-wide text-[#5B4CF5]">
            V
          </span>
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[90] w-[min(calc(100vw-1.5rem),21rem)]">
      <VMascotPanel className="w-full" onClose={() => setFloatingOpen(false)} />
    </div>
  );
}
