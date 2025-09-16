import React, { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";

export default function Modal({ resumeHref = "/Resume.pdf", contactHref = "mailto:markjoshuaurbano@gmail.com" }) {
  const dialogRef = useRef(null);
  const primaryBtnRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function handleKey(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    function handleBackdropClick(e) {
      if (e.target === dialog) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKey);
    dialog.addEventListener("click", handleBackdropClick);

    return () => {
      document.removeEventListener("keydown", handleKey);
      dialog.removeEventListener("click", handleBackdropClick);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
      requestAnimationFrame(() => primaryBtnRef.current?.focus());
    } else {
      if (dialog.open) dialog.close();
    }
  }, [open]);

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="modal-title" aria-describedby="modal-desc">
      <div className={styles.container}>
        <button
          className={styles.close}
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <h2 id="modal-title" className={styles.title}>
          A quick note — my portfolio is a work in progress
        </h2>

        <p id="modal-desc" className={styles.message}>
        Hi — thanks for stopping by. I’m actively applying to roles right now and wanted to share this portfolio even though it’s still being finished.
        I added this link so I don’t miss opportunities while I continue building and polishing the site.
        </p>

        <p className={styles.message}>
        While the site isn’t complete yet, some sections like the <strong>landing page</strong>, <strong>about</strong>, 
        and <strong>projects</strong> are partially finished. I’m currently building the projects section with a feature 
        where hovering over buttons changes the preview image.{" "}
        <a href="#projects" className={styles.inlineLink} onClick={() => setOpen(false)}>Check it out</a>.
        </p>

        <p className={styles.sub}>
        If you’re hiring, you can view my resume or contact me directly — I’d love to discuss how I can help your team.
        </p>

        <div className={styles.actions}>
          <a
            ref={primaryBtnRef}
            href={resumeHref}
            className={styles.primary}
            rel="noopener noreferrer"
          >
            View Resume
          </a>


          <button className={styles.ghost} onClick={() => setOpen(false)}>
            Continue to site
          </button>
        </div>

        <small className={styles.note}>
          Thanks for your understanding — I update the portfolio regularly and can share a tailored portfolio or code samples on request.
        </small>
      </div>
    </dialog>
  );
}
