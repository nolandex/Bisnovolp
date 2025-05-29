"use client";

import { Button } from "@/components/ui/button";
import { RocketIcon, MessageCircle } from "lucide-react"; // Tambahkan ikon untuk WhatsApp
import { useRouter } from "next/navigation"; // Menggunakan next/navigation untuk App Router

interface CTAButtonProps {
  locale: {
    title: string;
  };
}

export default function CTAButton({ locale }: CTAButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    // Ubah path ini ke halaman tujuan Anda
    router.push("/second-page"); // Mengarahkan ke halaman '/second-page'
  };

  return (
    <div className="flex flex-col items-center gap-4"> {/* Wrap tombol dalam div untuk tata letak vertikal */}
      <Button
        onClick={handleClick}
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
      >
        <RocketIcon className="w-4 h-4" />
        {locale.title}
      </Button>
      <a
        href="https://wa.me/6285156779923?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda!" // Ganti nomor dan teks sesuai kebutuhan
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="default"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white" // Warna hijau untuk WhatsApp
        >
          <MessageCircle className="w-4 h-4" /> {/* Ikon WhatsApp */}
          Hubungi via WhatsApp
        </Button>
      </a>
    </div>
  );
}
