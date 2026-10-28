import { useState, useEffect } from "react";
import "../styles/home.css";
import bilde from "../assets/bilde.jpg";
import SocialLinkData from "../data/socials.json";
import linkSectionsData from "../data/home-links.json";

type LinkSection = {
  left: {
    title: string;
    href: string;
  };
  right: {
    title: string;
    href: string;
    date?: string;
    descriptionLines: string[];
  };
};
const linkSections: LinkSection[] = linkSectionsData;

type SocialLink = {
  href: string;
  label: string;
  iconClass: string;
  title?: string;
  id?: string;
  targetBlank?: boolean;
};
const socialLinks: SocialLink[] = SocialLinkData;

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Close on Escape key when popup is open
  useEffect(() => {
    if (!isPopupOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsPopupOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPopupOpen]);

  return (
    <>
      <div id="content">
        <div id="left">
          <div className="half-circle-photo">
            <img src={bilde} id="photo" alt="Dan Thanh Ngu" />
          </div>
        </div>

        <div id="right">
          <b id="name-title">Dan Thanh Ngu</b>
          <p id="intro">
            Hello! This is my personal website. Here you can find my blog,
            projects, and my contact information. I am currently a master
            student at UiO studying programming and systemarchitecture
          </p>

          {linkSections.map((section, idx) => (
            <div id="link-section" key={idx}>
              <a
                className="icon"
                title={section.left.title}
                href={section.left.href}
              >
                <span>{section.left.title}</span>
              </a>

              <a
                className="right-link"
                title={section.right.title}
                href={section.right.href}
              >
                <h2>{section.right.title}</h2>
                {section.right.date && (
                  <p style={{ color: "#fcfbf8" }}>{section.right.date}</p>
                )}
                {section.right.descriptionLines.map((line, i) => (
                  <p key={i} style={{ color: "#fcfbf8" }}>
                    {line}
                  </p>
                ))}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

{
  /*
  <div id="link-section single">
            <a
              className="icon"
              id="socials-button"
              title="Socials-icon"
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setIsPopupOpen(true);
              }}
            >
              <span>Socials</span>
            </a>
          </div>

          {isPopupOpen && (
            <div
              id="popup-overlay"
              className="popup-overlay active"
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  setIsPopupOpen(false);
                }
              }}
            >
              <div id="popup-card">
                <div className="popup-header">
                  <span className="popup-title">Socials</span>
                  <button
                    className="popup-close"
                    aria-label="Close"
                    onClick={() => setIsPopupOpen(false)}
                  >
                    &times;
                  </button>
                </div>

                <div className="popup-links-grid">
                  {socialLinks.map((social) => (
                    <a
                      key={social.href}
                      className="icon popup-icon"
                      href={social.href}
                      id={social.id}
                      title={social.title}
                      target={social.targetBlank ? "_blank" : undefined}
                      rel={social.targetBlank ? "noreferrer" : undefined}
                    >
                      <i className={social.iconClass}></i>
                      <span
                        id={
                          social.id === "discord-copy"
                            ? "discord-label"
                            : undefined
                        }
                      >
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
  */
}
