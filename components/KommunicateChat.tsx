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
      <h1>Hello</h1>
    </div>
  );
};

export default KommunicateChat;