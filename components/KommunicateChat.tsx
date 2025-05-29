'use client';

import { useEffect } from 'react';

const KommunicateChat = () => {
  useEffect(() => {
    (function(d, m) {
      var kommunicateSettings = {
        "appId": "179e53dcdeedc204a1a18830571da49d8",
        "popupWidget": true,
        "automaticChatOpenOnNavigation": true
      };
      
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      //@ts-ignore
      window.kommunicate = m;
      m._globals = kommunicateSettings;//@ts-ignore
    })(document, window.kommunicate || {});
  }, []);

  return (
    <div>
      <div className="fixed bottom-20 right-6 flex flex-col gap-3 z-50">
          <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-bounce">
              Need Help?
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white rotate-45"></div>
          </div>
      </div>
    </div>
  );
};

export default KommunicateChat;