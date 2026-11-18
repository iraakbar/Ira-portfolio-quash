import { contact } from "@/content/site";

export default function Footer() {
  return (
    <footer id="contact" className="mt-[18vh] border-t border-line">
      <div className="page-x pb-10 pt-14">
        <h2 className="text-contact font-medium">{contact.heading}</h2>
        <p className="mt-3 text-about text-grey">{contact.subline}</p>
        <a
          href={`mailto:${contact.email}`}
          className="mt-10 inline-block break-all border-b border-ink text-contact font-medium transition-colors hover:border-grey hover:text-grey"
        >
          {contact.email}
        </a>

        <div className="mt-[72px] flex flex-col gap-6 text-[13px] text-grey md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <p>{contact.signOff}</p>
            <p>{contact.copyright}</p>
          </div>
          <ul className="flex flex-wrap gap-5 font-medium">
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
