interface ButtonGradientProps {
  buttonText: string;
}

export default function ButtonGradient({ buttonText }: ButtonGradientProps) {
  return (
    <div className="flex items-center justify-center py-2 sm:py-3 w-full">
      <button className="bg-primary-pink text-white font-semibold px-8 py-2  md:px-9 md:py-2 sm:py-2 rounded text-base sm:text-base  transition duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-primary-pink hover:to-secondary-pink hover:scale-105">
        {buttonText}
      </button>
    </div>
  );
}
