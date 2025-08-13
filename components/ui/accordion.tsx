import * as React from 'react';
import { cn } from '@/lib/utils';

// Implementación mínima sin Radix para desbloquear el build.
// Exponemos la misma API típica: Accordion, AccordionItem, AccordionTrigger, AccordionContent.

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
};

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const AccordionContext = React.createContext<{
  open: string[];
  toggle: (val: string) => void;
  type: 'single' | 'multiple';
}>({ open: [], toggle: () => {}, type: 'single' });

export function Accordion({
  className,
  type = 'single',
  defaultValue,
  value,
  onValueChange,
  ...props
}: AccordionProps) {
  const isControlled = value !== undefined;
  const [open, setOpen] = React.useState<string[]>(
    Array.isArray(defaultValue)
      ? defaultValue
      : defaultValue
      ? [defaultValue]
      : []
  );

  const openState = isControlled
    ? Array.isArray(value)
      ? value
      : value
      ? [value]
      : []
    : open;

  const toggle = (val: string) => {
    const next =
      type === 'single'
        ? openState.includes(val)
          ? []
          : [val]
        : openState.includes(val)
        ? openState.filter((v) => v !== val)
        : [...openState, val];

    if (isControlled) {
      onValueChange?.(type === 'single' ? (next[0] ?? '') : next);
    } else {
      setOpen(next);
      onValueChange?.(type === 'single' ? (next[0] ?? '') : next);
    }
  };

  return (
    <AccordionContext.Provider value={{ open: openState, toggle, type }}>
      <div className={cn('w-full', className)} {...props} />
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ className, value, ...props }: AccordionItemProps) {
  return <div data-value={value} className={cn('border-b', className)} {...props} />;
}

export function AccordionTrigger({ className, ...props }: AccordionTriggerProps) {
  return (
    <button
      type="button"
      className={cn(
        'flex w-full items-center justify-between py-3 text-left font-medium',
        className
      )}
      {...props}
    />
  );
}

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  // Leemos el valor del Item padre para saber si está abierto
  const ctx = React.useContext(AccordionContext);
  // Buscamos el value a partir del DOM (simplificación)
  const ref = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // sube hasta el AccordionItem
    const item = el.closest('[data-value]') as HTMLDivElement | null;
    const val = item?.getAttribute('data-value') || '';
    setIsOpen(ctx.open.includes(val));
  }, [ctx.open]);

  return (
    <div
      ref={ref}
      className={cn(
        'grid transition-all duration-200',
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        className
      )}
      {...props}
    >
      <div className="overflow-hidden pb-3 text-sm text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}
