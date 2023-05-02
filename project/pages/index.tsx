import { useEffect } from "react";
import { useCookieConsent } from "shared/hooks/use-cookie-consent";
import { useRouter } from "next/router";
import CookieConsentBanner from "shared/components/cookie-banner";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const [consetCookie, setConsetCookie] = useCookieConsent();

  const router = useRouter();

  useEffect(() => {
    if (!consetCookie?.tracking) {
      return;
    }

    console.log('initialize tag manager');
  }, [consetCookie, router]);

  return (
    <CookieConsentBanner
      consetCookie={consetCookie}
      setConsetCookie={setConsetCookie}
    />
  );
}
