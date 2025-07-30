import React from "react";

interface CardInfoProps {
  icon: React.ReactNode;
  content: string | React.ReactNode;
  className?: string;
}

const CardInfo: React.FC<CardInfoProps> = ({
  icon,
  content,
  className = "",
}) => {
  return (
    <div
      className={`flex h-full flex-1 flex-col items-center justify-center gap-6 rounded-2xl bg-white p-4 shadow-md transition hover:shadow-lg ${className}`}
    >
      {/* <div className="flex h-full flex-col flex-1 items-center justify-center gap-6 rounded-2xl bg-white p-4 shadow-md transition hover:shadow-lg"> */}
      <div className="mt-1 text-2xl text-primary">{icon}</div>
      <div>
        <p className="text-center text-base text-primary">{content}</p>
      </div>
    </div>
  );
};

export default CardInfo;
