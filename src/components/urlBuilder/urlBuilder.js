const urlBuilder = (link) => {
  const username = "theweak1";
  if (link.url.includes("http")) {
    return link.url;
  }
  if (link.url.includes("mailto")) {
    return link.url;
  }
  return "https://" + link.url + username;
};
export default urlBuilder;
