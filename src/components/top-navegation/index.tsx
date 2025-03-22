import Link from "next/link";

interface LinkItem {
  name: string;
  href: string;
}

interface TopNavegationProps {
  links: LinkItem[];
}

export default function TopNavegation({ links }: TopNavegationProps) {
  return (
    <div className="text-sm text-gray px-3 py-4">
      {links.map((link, index) => (
        <span key={index}>
          <Link href={link.href}>{link.name}</Link>
          {index < links.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}
