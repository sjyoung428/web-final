const Footer = () => {
  return (
    <footer className="absolute left-[10%] text-[#808080] flex flex-col gap-3">
      <nav>
        <a
          className="text-lg"
          href="https://github.com/sjyoung428/web-final"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </nav>
      <p className="flex flex-col text-sm">
        <span>Made by sjyoung428</span>
        <span>Email : sjy8267@naver.com</span>
      </p>
    </footer>
  );
};

export default Footer;
