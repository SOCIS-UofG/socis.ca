"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PDFPage() {
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

  return <iframe src={file} className="min-h-screen w-screen"></iframe>;
}
