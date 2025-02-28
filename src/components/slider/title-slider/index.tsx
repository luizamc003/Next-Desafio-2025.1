interface TitleSliderProps {
  title: string;
}

export default function TitleSlider({ title }: TitleSliderProps) {
  return (
    <div className="w-full flex justify-center my-2">
      <div className="w-[85%] border-b-2 border-danger">
        <span className="font-semibold text-2xl px-4">{title}</span>
      </div>
    </div>
  );
}
