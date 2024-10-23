'use client';

import { useFormStatus } from 'react-dom';

interface Props {
  value: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  className: string | undefined;
}

export default function Button(props: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      type={props.type}
      // disabled={pending}
      className={`btn w-[180px] h-[60px] text-[18px] disabled:bg-zinc-500 rounded
        ${props.className}`}
      //     bg-zinc-900
      //     disabled:bg-zinc-500
      //     transition text-white
      // rounded
      //     py-2 px-3"
    >
      {props.value}
    </button>
  );
}
