import {
  FaFacebook,
  FaTwitter,
  FaXTwitter,
  FaPinterest,
  FaGithub,
  FaTiktok,
  FaYoutube,
  FaVimeo,
  FaLink,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaSnapchat,
} from "react-icons/fa6";

interface SocialIconProps {
  url: string;
}

export default function SocialIcon({ url }: SocialIconProps) {
  if (url.includes("facebook")) {
    return <FaFacebook />;
  } else if (url.includes("twitter")) {
    return <FaTwitter />;
  } else if (url.includes("github")) {
    return <FaGithub />;
  } else if (url.includes("x.com")) {
    return <FaXTwitter />;
  } else if (url.includes("pinterest")) {
    return <FaPinterest />;
  } else if (url.includes("youtube")) {
    return <FaYoutube />;
  } else if (url.includes("vimeo")) {
    return <FaVimeo />;
  } else if (url.includes("tiktok")) {
    return <FaTiktok />;
  } else if (url.includes("linkedin")) {
    return <FaLinkedin />;
  } else if (url.includes("t.me")) {
    return <FaTelegram />;
  } else if (url.includes("wa.me")) {
    return <FaWhatsapp />;
  } else if (url.includes("instagram")) {
    return <FaInstagram />;
  } else if (url.includes("snapchat")) {
    return <FaSnapchat />;
  } else {
    return <FaLink />;
  }
}
