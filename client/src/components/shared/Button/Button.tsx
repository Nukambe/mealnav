export default function Button({ className, ...props }: any) {
  return props.href ? (
    <a
      href={props.href}
      className="flex justify-center items-center py-1 px-2 rounded-full border-black border hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
    >
      {props.children}
    </a>
  ) : (
    <button className="mt-10">{props.children}</button>
  );
}
