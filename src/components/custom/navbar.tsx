'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-500">CLICK</span>
              <span className="text-red-500">CRAFT</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Início Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
                Início <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-green-500/20">
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-green-500/10">
                  <a href="#exemplos">Exemplos</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-green-500/10">
                  <a href="#funcionamento">Funcionamento</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-green-500/10">
                  <a href="#lingua">Língua</a>
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
                  <a href="#meus">Meus Vídeos</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-green-500/10">
                  <a href="#videos-test">Vídeos Test</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-green-500/10">
                  <a href="#vip">VIP Top 10</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Favoritos */}
            <a
              href="#favoritos"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Favoritos
            </a>

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
            <a
              href="#exemplos"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
            >
              Exemplos
            </a>
            <a
              href="#funcionamento"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
            >
              Funcionamento
            </a>
            <a
              href="#lingua"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
            >
              Língua
            </a>

            <div className="px-3 py-2 text-sm font-semibold text-gray-400 mt-4">
              Biblioteca
            </div>
            <a
              href="#meus"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
            >
              Meus Vídeos
            </a>
            <a
              href="#videos-test"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
            >
              Vídeos Test
            </a>
            <a
              href="#vip"
              className="block px-6 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md"
            >
              VIP Top 10
            </a>

            <a
              href="#favoritos"
              className="block px-3 py-2 text-gray-300 hover:bg-green-500/10 hover:text-white rounded-md mt-4"
            >
              Favoritos
            </a>

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
