export default function Footer() {
  return (
    <footer className="w-full py-3 bg-gray-100 text-center text-sm text-gray-500 mt-8">
      <p>© עיריית נתניה — מגן אזרחי. כל הזכויות שמורות.</p>
      <p className="mt-1 text-xs text-gray-400">
        <a
          href="https://elad-s-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition-colors"
        >
          פותח ע&quot;י{' '}
          <span style={{ fontFamily: 'Glamora, serif' }}>E.S</span>
        </a>
      </p>
    </footer>
  );
}
