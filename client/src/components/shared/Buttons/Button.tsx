import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export default function Button({
  ...props
}: React.HTMLProps<HTMLButtonElement | HTMLAnchorElement> | LinkProps) {
  if ('href' in props && props.href) {
    return (
      <ExternalLinkButton {...(props as React.HTMLProps<HTMLAnchorElement>)} />
    );
  } else if ('to' in props && props.to) {
    return <InternalLinkButton {...(props as LinkProps)} />;
  } else {
    return <RegularButton {...props} />;
  }
}

function ExternalLinkButton({ ...props }: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className="flex justify-center items-center py-1 px-2 rounded-full border-black border hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
    >
      {props.children}
    </a>
  );
}

function InternalLinkButton({ ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className="flex justify-center items-center py-1 px-2 rounded-full border-black border hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
    />
  );
}

function RegularButton({ ...props }: any) {
  return <button {...props} className="" />;
}
