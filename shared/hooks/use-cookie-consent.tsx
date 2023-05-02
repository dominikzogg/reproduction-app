import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

export type CookieConsent = { tracking: boolean; };
export type SetCookieConsent = (consetCookie: CookieConsent) => void;

const cookieName = 'consent';

export const useCookieConsent = (): [CookieConsent, SetCookieConsent] => {
  const [consetCookie, setConsetCookie] = useState<CookieConsent>(undefined);

  useEffect(() => {
    try {
      setConsetCookie(JSON.parse(getCookie(cookieName) as string));
    } catch (e) { }
  }, [setConsetCookie]);

  useEffect(() => {
    if (consetCookie) {
      setCookie(cookieName, JSON.stringify(consetCookie), { maxAge: 60 * 60 * 24 * 365 });
    } else {
      deleteCookie(cookieName);
    }
  }, [consetCookie, setConsetCookie]);

  return [consetCookie, setConsetCookie];
};
