import { FC, useEffect, useState } from 'react';
import { CookieConsent, SetCookieConsent } from '../hooks/use-cookie-consent';

type CookieConsentBannerProps = {
  consetCookie: CookieConsent;
  setConsetCookie: SetCookieConsent;
};

const CookieConsentBanner: FC<CookieConsentBannerProps> = ({
  consetCookie,
  setConsetCookie,
}: CookieConsentBannerProps) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, [setIsClient]);

  if (!isClient || consetCookie) {
    return null;
  }

  const agree = () => {
    setConsetCookie({ tracking: true });
  };

  const decline = () => {
    setConsetCookie({ tracking: false });
  };

  return (
    <div > <button onClick={agree}>
      accept
    </button>
      <button onClick={decline}>
        reject
      </button>
    </div>
  );
};

export default CookieConsentBanner;
