import { Link } from 'react-router-dom';

export default function Button({ ...props }: any) {
  if (props.href) {
    return <ExternalLinkButton {...props} />;
  } else if (props.link) {
    return <InternalLinkButton {...props} />;
  } else {
    return <RegularButton {...props} />;
  }
}

function ExternalLinkButton({ className, ...props }: any) {
  return (
    <a
      href={props.href}
      className="flex justify-center items-center py-1 px-2 rounded-full border-black border hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
    >
      {props.children}
    </a>
  );
}

function InternalLinkButton({ className, ...props }: any) {
  return (
    <Link
      to={props.link}
      className="flex justify-center items-center py-1 px-2 rounded-full border-black border hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
    >
      {props.children}
    </Link>
  );
}

function RegularButton({ className, ...props }: any) {
  return <button className="mt-10">{props.children}</button>;
}
