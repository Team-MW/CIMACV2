import { NextResponse } from 'next/server';

const locales = ['fr', 'en', 'ru'];
const defaultLocale = 'fr';

function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  const lower = acceptLanguage.toLowerCase();
  if (lower.startsWith('ru') || lower.includes(',ru')) return 'ru';
  if (lower.startsWith('en') || lower.includes(',en')) return 'en';
  return defaultLocale;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Ignore static assets and metadata
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check if pathname already starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // If no locale in pathname, redirect to the appropriate locale
  const locale = getLocale(request);
  const targetPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  const url = request.nextUrl.clone();
  url.pathname = targetPath;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)',
  ],
};
