export default function Footer() {
  return (
    <footer className="py-10 bg-slate-900 text-center border-t border-slate-800">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} pawan Mishra. This is my personal portfolio website built with React and Tailwind CSS. 
        All rights reserved.
        Thank you for visiting!
      </p>
    </footer>
  );
}