"use client";

import { Keyboard, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function ShortcutsPanel() {
  const [isOpen, setIsOpen] = useState(false);

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

  // When panel opens, disable body scroll
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

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition"
        title="Keyboard shortcuts (?)"
      >
        <Keyboard size={18} />
      </button>

      {/* Backdrop - extremely high z-index */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 999999,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Panel - even higher z-index */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '320px',
          backgroundColor: '#111827',
          borderLeft: '1px solid #1f2937',
          boxShadow: '-10px 0 25px -5px rgba(0, 0, 0, 0.5)',
          zIndex: 1000000,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
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
          flex: 1,
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
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        color: '#c084fc',
                        minWidth: '40px',
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
          backgroundColor: '#111827',
        }}>
          <p style={{ color: '#9ca3af', fontSize: '12px' }}>
            Press <span style={{
              backgroundColor: '#1f2937',
              padding: '4px 8px',
              borderRadius: '4px',
              fontFamily: 'monospace',
              color: '#c084fc',
            }}>?</span> to toggle
          </p>
        </div>
      </div>
    </>
  );
}