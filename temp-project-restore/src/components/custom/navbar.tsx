'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-blue-500">CLICK</span>
              <span className="text-red-500">CRAFT</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Início Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
                Início <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-green-500/20">
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-green-500/10">
                  <Link href="/exemplos" className="w-full">Exemplos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-green-500/10">
                  <a href="/#funcionamento" className="w-full">Funcionamento</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-green-500/10">
                  <a href="/#lingua" className="w-full">Língua</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Biblioteca Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
                Biblioteca <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-green-500/20">
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-green-500/10">
                  <Link href="/biblioteca" className="w-full">Meus Vídeos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-green-500/10">
                  <Link href="/biblioteca" className="w-full">Vídeos Test</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-green-500/10">
                  <Link href="/biblioteca" className="w-full">VIP Top 10</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Favoritos */}
            <Link
              href="/favoritos"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Favoritos
            </Link>

            {/* CTA Button */}
            <Button className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-semibold">
              Começar Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-green-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="px-3 py-2 text-sm font-semibold text-gray-400">
              Início
            </div>
            <Link
              href="/exemplos"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Exemplos
            </Link>
            <a
              href="/#funcionamento"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Funcionamento
            </a>
            <a
              href="/#lingua"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Língua
            </a>

            <div className="px-3 py-2 text-sm font-semibold text-gray-400 mt-4">
              Biblioteca
            </div>
            <Link
              href="/biblioteca"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Meus Vídeos
            </Link>
            <Link
              href="/biblioteca"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vídeos Test
            </Link>
            <Link
              href="/biblioteca"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              VIP Top 10
            </Link>

            <Link
              href="/favoritos"
              className="block px-3 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Favoritos
            </Link>

            <div className="px-3 pt-4">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-semibold">
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
