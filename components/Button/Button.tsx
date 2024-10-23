'use client';

import { useFormStatus } from 'react-dom';

export default function Button(props: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      type={props.type}
      className={`btn w-[180px] h-[60px] text-[18px] disabled:bg-zinc-500 rounded
        ${props.className}`}
    >
      {props.value}
    </button>
  );
}
