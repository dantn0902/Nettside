import { useEffect } from "react";

type SocialsPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SocialsPopup({ isOpen, onClose }: SocialsPopupProps) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="popup-overlay"
      className="popup-overlay active"
      onClick={(event) => {
        // close when clicking outside card
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="popup-card">
        <button
          className="popup-close"
          onClick={onClose}
          aria-label="Close socials popup"
        >
          ×
        </button>

        {/* your popup content here */}
        <h2>Socials</h2>
        {/* ... */}
      </div>
    </div>
  );
}
