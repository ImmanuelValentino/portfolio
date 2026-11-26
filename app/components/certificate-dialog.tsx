"use client";

import { useEffect, useRef } from "react";
import type { Language, PortfolioCopy } from "@/app/data/translations";

type Certificate = { titleId: string; titleEn: string; tone: string };

export default function CertificateDialog({
    certificate,
    language,
    onClose,
    t,
}: {
    certificate: Certificate;
    language: Language;
    onClose: () => void;
    t: PortfolioCopy;
}) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        dialog.showModal();
        return () => {
            if (dialog.open) dialog.close();
        };
    }, []);

    return (
        <dialog className="certificate-dialog" ref={dialogRef} onClose={onClose} onClick={(event) => {
            if (event.target === event.currentTarget) event.currentTarget.close();
        }}>
            <button className="dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label={t.closeDialog} title={t.closeDialog}>×</button>
            <div className="certificate-dialog-content">
                <div className={`certificate-art certificate-art--${certificate.tone}`}>
                    <span className="certificate-art-top"><span>U.</span><span>{t.mockupLabel}</span></span>
                    <span className="certificate-overline">CERTIFICATE OF COMPLETION</span>
                    <span className="certificate-title">{language === "id" ? certificate.titleId : certificate.titleEn}</span>
                    <span className="certificate-issuer">{t.certificateIssuer}</span>
                    <span className="certificate-seal">U</span>
                </div>
                <p>{t.mockupLabel} · {language === "id" ? certificate.titleId : certificate.titleEn}</p>
            </div>
        </dialog>
    );
}