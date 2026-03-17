"use client";

import { Keyboard, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ShortcutsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "?" || (e.key === "/" && e.shiftKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const shortcuts = [
    { keys: ["⌘", "K"], description: "Open command palette" },
    { keys: ["?"], description: "Show shortcuts" },
    { keys: ["⌘", "1-5"], description: "Quick actions" },
    { keys: ["G", "D"], description: "Go to dashboard" },
    { keys: ["G", "U"], description: "Go to users" },
    { keys: ["G", "O"], description: "Go to orders" },
    { keys: ["E"], description: "Export view" },
    { keys: ["ESC"], description: "Close" },
  ];

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition"
        title="Keyboard shortcuts (?)"
      >
        <Keyboard size={18} />
      </button>

      {isOpen && createPortal(
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2147483647, // Maximum possible z-index
          pointerEvents: 'none',
        }}>
          {/* Backdrop */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              pointerEvents: 'auto',
            }}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '500px',
              maxHeight: '80vh',
              backgroundColor: '#111827',
              borderRadius: '12px',
              border: '1px solid #1f2937',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              pointerEvents: 'auto',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 2147483647,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              padding: '20px',
              borderBottom: '1px solid #1f2937',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <h3 style={{
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <Keyboard size={18} color="#c084fc" />
                Keyboard Shortcuts
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  color: '#9ca3af',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Shortcuts List */}
            <div style={{
              padding: '20px',
              overflowY: 'auto',
              maxHeight: '60vh',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {shortcuts.map((shortcut, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '8px',
                      borderBottom: index < shortcuts.length - 1 ? '1px solid #1f2937' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {shortcut.keys.map((key, i) => (
                        <span
                          key={i}
                          style={{
                            backgroundColor: '#1f2937',
                            padding: '4px 12px',
                            borderRadius: '6px',
                            fontSize: '13px',
                            fontFamily: 'monospace',
                            color: '#c084fc',
                            minWidth: '45px',
                            textAlign: 'center',
                            border: '1px solid #374151',
                          }}
                        >
                          {key}
                        </span>
                      ))}
                    </div>
                    <span style={{ color: '#d1d5db', fontSize: '14px', marginLeft: '16px' }}>
                      {shortcut.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div style={{
              padding: '16px',
              borderTop: '1px solid #1f2937',
              textAlign: 'center',
            }}>
              <p style={{ color: '#9ca3af', fontSize: '12px' }}>
                Press <span style={{
                  backgroundColor: '#1f2937',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                  color: '#c084fc',
                }}>?</span> to open this panel
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}