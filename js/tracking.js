(() => {
  // From Google Ads: Goals → Conversions → your conversion action → Tag setup.
  // ADS_ID looks like "AW-1234567890"; the labels look like "AbC-D_efG-h12345".
  const ADS_ID = "";
  const CONVERSION_LABELS = {
    lead: "",
  };

  if (!ADS_ID) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", ADS_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
  document.head.append(script);

  if (document.body.hasAttribute("data-conversion") && CONVERSION_LABELS.lead) {
    window.gtag("event", "conversion", {
      send_to: `${ADS_ID}/${CONVERSION_LABELS.lead}`,
    });
  }
})();
