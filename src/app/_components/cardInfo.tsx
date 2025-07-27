import React from "react";

interface CardInfoProps {
  icon: React.ReactNode;
  content: string | React.ReactNode;
}

const CardInfo: React.FC<CardInfoProps> = ({ icon, content }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 rounded-2xl bg-gradient-to-r from-bg-gradient-dark-start to-bg-gradient-dark-end p-4 shadow-sm transition hover:shadow-md">
      <div className="mt-1 text-2xl text-purple-600">{icon}</div>
      <div>
        <p className="text-center text-base text-white">{content}</p>
      </div>
    </div>
  );
};

export default CardInfo;
