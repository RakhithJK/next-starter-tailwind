function Footer() {
  return (
    <footer className="bg-blue-700">
      <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white md:p-8">
        <li>
          Created by{" "}
          <a
            className="font-bold"
            href="https://bryant.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            Taylor Bryant
          </a>
        </li>

        <li>
          <a
            className="font-bold"
            href="https://github.com/oddstronaut/tailwind-next"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
