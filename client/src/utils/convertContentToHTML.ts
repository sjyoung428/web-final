export const convertContentToHTML = (content: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const convertContent = content.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  const htmlArray: string[] = [];
  convertContent.split("\n").forEach((text) => {
    const textHTML = `<p>${text}</p>`;
    htmlArray.push(textHTML);
  });

  return { __html: htmlArray };
};
