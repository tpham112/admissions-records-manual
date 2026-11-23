document.querySelectorAll('a[href^="http://"], a[href^="https://"], a[href^="//"]').forEach((link) => {
  const url = new URL(link.href);

  if (url.origin !== window.location.origin) {
    link.target = "_blank";
    link.relList.add("noopener", "noreferrer");
  }
});
