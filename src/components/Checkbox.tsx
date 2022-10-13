import * as CheckboxPremitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

import { clsx } from "clsx";

export type CheckboxProps = {} & CheckboxPremitive.CheckboxProps;

export function Checkbox({ ...rest }: CheckboxProps) {
  return (
    <CheckboxPremitive.Root
      className={clsx("w-6 h-6 p-[2px] bg-gray-800 rounded", {})}
      {...rest}
    >
      <CheckboxPremitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPremitive.Indicator>
    </CheckboxPremitive.Root>
  );
}
