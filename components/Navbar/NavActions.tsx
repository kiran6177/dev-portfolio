import LinkComponent from "../ui/Link/Link";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import Button from "../ui/Button/Button";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants/socialLinks";

function NavActions() {
  return (
    <div className="flex gap-8 items-center">
      <LinkComponent external href={LINKEDIN_URL}>
        <LinkedinIcon size={20} />
      </LinkComponent>
      <LinkComponent external href={GITHUB_URL}>
        <GithubIcon size={20} />
      </LinkComponent>
      <Button variant="gradient">RESUME</Button>
    </div>
  );
}

export default NavActions;
