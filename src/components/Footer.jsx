import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { site, navLinks, YEAR } from "../content.js";
import { InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from "./SocialIcon.jsx";

const socialItems = [
  { label: "Instagram", Icon: InstagramIcon, url: site.social.instagram },
  { label: "Facebook", Icon: FacebookIcon, url: site.social.facebook },
  { label: "Twitter", Icon: TwitterIcon, url: site.social.twitter },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      {/* Decorative orbit dots + logo watermark */}
      <img
        src="/logo-mark-white.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -bottom-16 h-80 w-auto opacity-[0.07]"
      />
      <span aria-hidden="true" className="orbit-dot absolute left-[8%] top-10 opacity-40" />
      <span aria-hidden="true" className="orbit-dot absolute right-[12%] top-24 opacity-30" />
      <span aria-hidden="true" className="orbit-dot-ring absolute bottom-16 left-[45%] opacity-25" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          {/* Column 1: logo + blurb */}
          <div>
            <Link to="/" className="inline-flex items-center gap-4" aria-label={`${site.orgName} — home`}>
              <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-md">
                <img
                  src="/logo.png"
                  alt="Schrödinger's Cat Think Tank logo"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-heading text-lg font-bold leading-tight">
                Schrödinger&apos;s Cat
                <span className="mt-0.5 block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/80">
                  Think Tank · Unboxing the possibilities
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">{site.footerBlurb}</p>
          </div>

          {/* Column 2: links */}
          <nav aria-label="Footer">
            <p className="eyebrow text-white/70">Links</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: social media */}
          <div>
            <p className="eyebrow text-white/70">Social Media</p>
            <ul className="mt-4 space-y-2">
              {socialItems.map(({ label, Icon, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-white/85 transition-colors hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-white/85 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: address */}
          <div>
            <p className="eyebrow text-white/70">Address</p>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-white/85">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {site.addressLine}
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${site.phoneNumber.replace(/\s/g, "")}`} className="hover:text-white">
                  {site.phoneNumber}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/15">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/70 sm:flex-row md:px-10">
          <p>
            © {YEAR} {site.orgName}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            <LinkedinIcon className="h-3.5 w-3.5" />
            <span>Follow our work</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
