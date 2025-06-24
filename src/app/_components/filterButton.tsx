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
      className={`text-md inline-flex w-fit gap-2 rounded-[14px] border border-stroke-article px-8 py-4 font-medium transition-all duration-700 ease-in-out md:px-10 md:py-6 md:text-lg ${
        isActive
          ? "bg-gradient-to-r from-purple-300 to-purple-600 text-white"
          : "bg-gradient-to-r from-nocture to-eclipse text-white hover:bg-gradient-to-r hover:from-purple-300 hover:to-purple-600"
      } ${className} `}
    >
      {text}
    </button>
  );
}
