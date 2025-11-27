"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/operador")) {
    return null;
  }

  return (
    <footer className="text-white py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <p className="text-xs font-semibold mb-2 uppercase tracking-wider">NEWSLETTER</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 font-[family-name:var(--font-rajdhani)]">
                Join Our Newsletter
              </h3>
              <p className="text-white/80 text-sm mb-6 font-[family-name:var(--font-nunito-sans)]">
                Eget nulla phasellus odio sit porttitor enatibus aliquam
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="E-mail address"
                  className="bg-white text-gray-900 border-0 placeholder:text-gray-500"
                />
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
                  Subscribe →
                </Button>
              </div>
            </div>

            <div className="md:col-span-1 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold mb-4">
                <span className="font-[family-name:var(--font-rajdhani)]">Navega Afuá</span>
              </div>
              <p className="text-white/80 text-sm text-center max-w-xs font-[family-name:var(--font-nunito-sans)]">
                Eget nulla phasellus odio sit porttitor enatibus aliquam blandit gravida ultricies eleifend varius tempor
              </p>
              <div className="flex gap-4 mt-6">
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white/80 transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-lg font-bold mb-4 font-[family-name:var(--font-montserrat)]">Quick Menu</h4>
              <ul className="space-y-2 font-[family-name:var(--font-nunito-sans)]">
                <li>
                  <Link href="/sobre" className="text-white/80 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/passagens" className="text-white/80 hover:text-white transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/suporte" className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm font-[family-name:var(--font-nunito-sans)]">
            Copyright © Navega Afuá | All rights reserved
          </p>
          <div className="flex gap-6 text-sm font-[family-name:var(--font-nunito-sans)]">
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              Cookies
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
