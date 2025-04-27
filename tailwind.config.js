/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@jeiiro/react-tailwind-modal/**/*.{js,jsx}"
  ],
  safelist: [
    'fixed',
    'inset-0',
    'flex',
    'items-center',
    'justify-center',
    'bg-black/50',
    'z-50',
    'bg-white',
    'p-6',
    'rounded-lg',
    'shadow-lg',
    'max-w-md',
    'w-full',
    'mt-4',
    'bg-blue-500',
    'hover:bg-blue-600',
    'text-white',
    'py-2',
    'px-4',
    'rounded'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}