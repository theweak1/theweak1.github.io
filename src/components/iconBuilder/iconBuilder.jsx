const IconBuilder = (link) => {
  return `
        <span class='${link.icon}' style='color: ${link.color};'></span>
    `;
};

export default IconBuilder;
