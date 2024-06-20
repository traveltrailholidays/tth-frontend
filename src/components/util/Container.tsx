"use client";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} max-w-[1850px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4`}
    >
      {children}
    </div>
  );
};

export default Container;
