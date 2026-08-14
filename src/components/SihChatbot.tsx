"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, MessageCircle, Trash2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "Show me healthcare problem statements from SIH 2024",
  "Which teams won in the Smart Automation theme?",
  "What problem statements did ISRO submit?",
];

export default function SihChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim(), history }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          data.response ||
          data.error ||
          "Sorry, I couldn't process that request.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const clearChat = () => {
    setMessages([]);
  };

  // Format markdown-like content for display
  const formatContent = (content: string) => {
    // Split by double newlines for paragraphs
    const parts = content.split(/\n\n+/);
    return parts.map((part, i) => {
      // Handle bullet points
      if (part.includes("\n- ") || part.startsWith("- ")) {
        const items = part.split("\n").filter((line) => line.startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside space-y-1 my-1">
            {items.map((item, j) => (
              <li key={j} className="text-[13px] leading-relaxed">
                {formatInline(item.replace(/^-\s*/, ""))}
              </li>
            ))}
          </ul>
        );
      }
      // Handle bold headers (lines starting with **)
      if (part.startsWith("**")) {
        return (
          <p key={i} className="text-[13px] leading-relaxed my-1 font-semibold">
            {formatInline(part)}
          </p>
        );
      }
      return (
        <p key={i} className="text-[13px] leading-relaxed my-1">
          {formatInline(part)}
        </p>
      );
    });
  };

  // Handle inline formatting (**bold**)
  const formatInline = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-cyan-300">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-violet-500 to-cyan-500 shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.5)] hover:scale-110 focus:outline-none"
            aria-label="Open SIH Assistant"
          >
            <Bot className="h-7 w-7 text-white" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-cyan-400/20" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-[60] flex h-[520px] w-[380px] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a14]/95 shadow-[0_8px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(139,92,246,0.15)] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-purple-900/40 to-cyan-900/30 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-cyan-400/20 border border-white/10">
                  <Bot className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    SIH Assistant
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Your SIH knowledge companion
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
                  aria-label="Clear chat"
                  title="Clear chat"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {/* Welcome message when empty */}
              {messages.length === 0 && (
                <div className="flex flex-col items-center pt-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-400/15 border border-white/10 mb-4">
                    <Sparkles className="h-7 w-7 text-cyan-300" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    How can I help you?
                  </h4>
                  <p className="text-xs text-slate-400 text-center mb-5 px-4">
                    Ask me anything about SIH problem statements, winners, or
                    how to participate.
                  </p>
                  <div className="w-full space-y-2">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(q)}
                        className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-left text-xs text-slate-300 transition hover:bg-white/[0.08] hover:border-cyan-300/30 hover:text-white"
                      >
                        <MessageCircle className="h-4 w-4 flex-none text-purple-300" />
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat messages */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-purple-600/80 to-violet-600/70 text-white rounded-br-md"
                        : "bg-white/[0.07] border border-white/10 text-slate-200 rounded-bl-md"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="space-y-0.5">{formatContent(msg.content)}</div>
                    ) : (
                      <p className="text-[13px] leading-relaxed">{msg.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-md bg-white/[0.07] border border-white/10 px-4 py-3">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0ms]" />
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:150ms]" />
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:300ms]" />
                    </div>
                    <span className="text-xs text-slate-400">Thinking...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-white/10 bg-black/30 px-3 py-3">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.08] disabled:opacity-50"
                  maxLength={500}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg transition hover:shadow-cyan-500/25 disabled:opacity-30 disabled:shadow-none"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-1.5 text-center text-[10px] text-slate-500">
                AI can make mistakes. Verify important information.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
