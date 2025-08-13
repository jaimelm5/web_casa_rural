import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type AccordionItem = {
  id: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  className?: string;
};

export function Accordion({ items, type = 'single', className }: AccordionProps) {
  const [open, setOpen] = React.useState<string[]>([]);

  const toggle = (id: string) => {
    setOpen((prev) =>
      type === 'single'
        ? prev.includes(id) ? [] : [id]
        : prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className={cn('w-full', className)}>
      {items.map((it) => {
        const isOpen = open.includes(it.id);
        return (
          <div key={it.id} className="border-b border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={() => toggle(it.id)}
              className="flex w-full items-center justify-between py-3 text-left"
            >
              <div className="font-medium">{it.trigger}</div>
              <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
            </button>
            <div
              className={cn(
                'grid transition-all duration-200',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden pb-3 text-sm text-gray-600 dark:text-gray-300">
                {it.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
