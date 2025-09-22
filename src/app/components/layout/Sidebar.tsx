'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Home, 
  BookOpen, 
  Book, 
  BookText, 
  BookMarked, 
  ChevronDown, 
  ChevronUp,
  Star,
  Award,
  Trophy,
  Lightbulb,
  Menu,
  X
} from 'lucide-react';

type SubmenuItem = {
  name: string;
  href: string;
  icon?: string;
};

type MenuItem = {
  name: string;
  icon: any;
  href: string;
  submenu?: SubmenuItem[];
};

const menuItems: MenuItem[] = [
  { 
    name: 'Home', 
    icon: Home, 
    href: '/',
  },
  { 
    name: 'Math', 
    icon: BookOpen, 
    href: '/math',
    submenu: [
      { name: 'Grade 1', href: '/math/grade/1', icon: '1️⃣' },
      { name: 'Grade 2', href: '/math/grade/2', icon: '2️⃣' },
      { name: 'Grade 3', href: '/math/grade/3', icon: '3️⃣' },
      { name: 'Grade 4', href: '/math/grade/4', icon: '4️⃣' },
      { name: 'Grade 5', href: '/math/grade/5', icon: '5️⃣' },
      { name: 'Grade 6', href: '/math/grade/6', icon: '6️⃣' },
    ],
  },
  { 
    name: 'English', 
    icon: Book, 
    href: '/english',
    submenu: [
      { name: 'Grade 1', href: '/english/grade/1', icon: '1️⃣' },
      { name: 'Grade 2', href: '/coming-soon', icon: '2️⃣' },
      { name: 'Grade 3', href: '/coming-soon', icon: '3️⃣' },
      { name: 'Grade 4', href: '/coming-soon', icon: '4️⃣' },
      { name: 'Grade 5', href: '/coming-soon', icon: '5️⃣' },
    ],
  },
  { 
    name: 'Science', 
    icon: BookText, 
    href: '/science',
    submenu: [
      { name: 'Grade 1', href: '/coming-soon', icon: '1️⃣' },
      { name: 'Grade 2', href: '/coming-soon', icon: '2️⃣' },
      { name: 'Grade 3', href: '/coming-soon', icon: '3️⃣' },
    ],
  },
  { 
    name: 'History', 
    icon: BookMarked, 
    href: '/history',
    submenu: [
      { name: 'Grade 4', href: '/coming-soon', icon: '4️⃣' },
      { name: 'Grade 5', href: '/coming-soon', icon: '5️⃣' },
      { name: 'Grade 6', href: '/coming-soon', icon: '6️⃣' },
    ],
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-xl bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-blue-600 to-purple-600 text-white z-50 
                   transform transition-transform duration-300 ease-in-out shadow-2xl
                   ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="h-full flex flex-col">
          {/* Logo and close button */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <BookOpen size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
              Kids Learning Center
              </h1>
            </Link>
            <button 
              className="md:hidden text-white/70 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.name} className="mb-2">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={`flex items-center w-full p-3 rounded-xl text-left transition-colors
                                ${
                                  item.submenu && openSubmenu === item.name
                                    ? 'bg-white/20 text-white'
                                    : 'text-white/90 hover:bg-white/10'
                                }`}
                      onClick={(e) => {
                        if (item.submenu) {
                          e.preventDefault();
                          toggleSubmenu(item.name);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                    >
                      <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="font-medium">{item.name}</span>
                      {item.submenu && (
                        <span className="ml-auto">
                          {openSubmenu === item.name ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </span>
                      )}
                    </Link>
                  </div>

                  {item.submenu && openSubmenu === item.name && (
                    <div className="mt-1 ml-8 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center py-2.5 px-4 text-sm rounded-lg hover:bg-white/10 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.icon && (
                            <span className="mr-2 text-yellow-300" aria-hidden="true">
                              {subItem.icon}
                            </span>
                          )}
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="px-3 text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Link
                  href="/coming-soon"
                  className="flex items-center p-3 rounded-xl text-white/90 hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Star className="w-5 h-5 mr-3 text-yellow-300" />
                  <span>Favorites</span>
                </Link>
                <Link
                  href="/coming-soon"
                  className="flex items-center p-3 rounded-xl text-white/90 hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Trophy className="w-5 h-5 mr-3 text-blue-300" />
                  <span>My Progress</span>
                </Link>
                <Link
                  href="/coming-soon"
                  className="flex items-center p-3 rounded-xl text-white/90 hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Award className="w-5 h-5 mr-3 text-purple-300" />
                  <span>Daily Challenges</span>
                </Link>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <div className="text-center text-sm text-white/60">
              <p>Made with ❤️ for young learners</p>
              <p className="mt-1 text-xs">© {new Date().getFullYear()} Kids Learning Center</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Add padding to the main content when sidebar is open on mobile */}
      <div className={`md:ml-72 transition-all duration-300 ${isOpen ? 'ml-72' : 'ml-0'}`}>
        {/* Add a semi-transparent overlay when sidebar is open on mobile */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
}