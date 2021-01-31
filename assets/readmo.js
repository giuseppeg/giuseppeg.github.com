(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define("readmo", factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.ReadMo = factory();
  }
})(typeof self !== "undefined" ? self : this, function() {
  const version = "0.1.0";

  function isBrowserSupported() {
    try {
      // Chromium browsers that support extensions.
      if (window.chrome) {
        return true;
      }
    } catch (e) {}
    return false;
  }

  function embed({
    selector = "[data-readmoapp]",
    meta = {},
    promptInstall = ({ extensionUrl }) => {
      const confirm = window.confirm(
        "In order to open this link you need to install the official ReadMo browser extension.\n\n" +
          "Do you want to go to the Chrome Web Store?"
      );

      if (confirm) {
        window.location.href = extensionUrl;
      }
    },
  }) {
    if (!isBrowserSupported()) {
      return;
    }
    document.addEventListener("click", (event) => {
      const target = event.target.closest(selector);
      if (!target || !target.href) {
        return;
      }
      const isExtensionIntalled = Boolean(
        document.querySelector("[data-readmoappenabled]")
      );
      if (!isExtensionIntalled) {
        event.preventDefault();
        promptInstall({
          extensionUrl:
            "https://chrome.google.com/webstore/detail/readmoapp/gpdnlknekkniebhjbflbcglgibnfcaah",
        });
        return;
      }
      event.preventDefault();
      window.dispatchEvent(
        new CustomEvent("ReadMo", {
          detail: {
            type: "embed",
            payload: {
              meta: {
                ...meta,
                partner: {
                  url: target.href,
                  name: location.hostname,
                  round: true,
                  ...meta.partner,
                },
              },
              url: target.href,
            },
          },
        })
      );
    });
  }

  return { embed, isBrowserSupported, version };
});
