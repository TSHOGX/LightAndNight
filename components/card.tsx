import { Item } from "../lib/types";

export default function Card({ item }: { item: Item }) {
  return (
    <a
      href={item.href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`mb-3 text-2xl font-semibold`}>{item.title}</div>
    </a>
  );
}
