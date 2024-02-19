"use client";

import { useCallback, useEffect, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { usePathname } from "next/navigation";
import { LoadingSpinnerCenter } from "socis-components";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};
const maxWidth = 800;

export default function Sample() {
  const pathname = usePathname();
  const [file, setFile] = useState<string>(
    "/pdfs/ClubSpacePolicy.6b8a2123ff7ecd9faae0.pdf",
  );
  useEffect(() => {
    const file = pathname.split("/").pop();
    if (file) {
      setFile(`/pdfs/${file}`);
    }
  }, [pathname]);

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: PDFDocumentProxy) => setNumPages(numPages),
    [],
  );

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  return (
    <main className="flex h-full w-screen flex-col items-center justify-center gap-4">
      <div className="flex w-screen flex-col items-start justify-between gap-4 bg-[#323639] px-10 py-7 text-white shadow-md md:flex-row">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-base font-semibold">
            {file.split("/").pop() ?? ""}
          </h1>
          <p className="text-sm font-light">
            Page {pageNumber} of {numPages}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <a
            href={file}
            download
            className="rounded-5 cursor-pointer rounded-lg border-none bg-[#25282a] px-10 py-3 text-sm text-white"
          >
            Download
          </a>
          <Link
            href="/policies"
            className="rounded-5 cursor-pointer rounded-lg border-none bg-[#25282a] px-10 py-3 text-sm text-white"
          >
            Back
          </Link>
        </div>
      </div>

      <div
        className="mb-10 flex w-[80vw] flex-col items-center justify-center gap-4 sm:w-[70vw]"
        ref={setContainerRef}
      >
        <Document
          file={file}
          options={options}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<LoadingSpinnerCenter />}
        >
          <Page
            key={`page_${file}_${pageNumber}`}
            pageNumber={pageNumber}
            width={
              containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
            }
          />
        </Document>
        <div className="mt-4 flex flex-row items-center justify-between gap-4">
          <button
            disabled={pageNumber === 1}
            className="cursor-pointer rounded-lg border-none bg-[#323639] px-7 py-3 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => setPageNumber((prev) => prev - 1)}
          >
            Previous Page
          </button>
          <button
            disabled={pageNumber === numPages}
            className="cursor-pointer rounded-lg border-none bg-[#323639] px-7 py-3 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => setPageNumber((prev) => prev + 1)}
          >
            Next Page
          </button>
        </div>
      </div>
    </main>
  );
}
