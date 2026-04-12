import Image from "next/image";
import TerminalLayout from "./TerminalLayout";
import Tag from "../ui/Tag/Tag";
import LinkComponent from "../ui/Link/Link";
import { CircleArrowRight } from "lucide-react";

function TerminalCard() {
  return (
    <TerminalLayout className={"group"} rounded={false}>
      <div>
        <div>
          <Image
            src="/assets/mac_rollin.png"
            className="grayscale group-hover:grayscale-0 transition-all duration-300"
            alt="terminal"
            width={800}
            height={600}
          />
        </div>
        <div className="p-6 ">
          <div className="flex gap-2 mb-4">
            <Tag title="Terminal" index={0} />
            <Tag title="Terminal" index={1} />
            <Tag title="Terminal" index={2} />
          </div>
          <h4>PROJECT TITLE</h4>
          <p className="line-clamp-5 small-p text-secondary mt-2">
            Description Description Description DescriptionDescription DescriptionDescription
            DescriptionDescription DescriptionDescription DescriptionDescription
            DescriptionDescription DescriptionDescription DescriptionDescription
            DescriptionDescription DescriptionDescription DescriptionDescription
            DescriptionDescription DescriptionDescription DescriptionDescription
            DescriptionDescription DescriptionDescription DescriptionDescription
            DescriptionDescription DescriptionDescription DescriptionDescription
            DescriptionDescription DescriptionDescription DescriptionDescription
            DescriptionDescription Description
          </p>
          <LinkComponent
            href="https://google.com"
            variant="terminal"
            className="text-secondary-900/60 hover:text-secondary-900 flex gap-2 items-center w-fit place-self-end mt-4"
          >
            IN  TO THE CORE
            <CircleArrowRight size={16} />
          </LinkComponent>
        </div>
      </div>
    </TerminalLayout>
  );
}

export default TerminalCard;
