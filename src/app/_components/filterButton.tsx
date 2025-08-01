type FilterProps = {
  text: string | React.ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function FilterButton({
  text,
  className = "",
  isActive = false,
  onClick,
}: FilterProps) {
  return (
    <button
      onClick={onClick}
      className={`text-md group inline-flex w-fit gap-2 rounded-[14px] border px-8 py-4 font-medium transition-all duration-100 ease-in-out hover:text-white md:px-10 md:py-6 md:text-lg ${
        isActive
          ? "bg-gradient-to-r from-accent-light via-accent to-accent-dark text-white"
          : "bg-white text-primary hover:bg-gradient-to-r hover:from-accent-light hover:via-accent hover:to-accent-dark"
      } ${className} `}
    >
      {text}
    </button>
  );
}
