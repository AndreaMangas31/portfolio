interface GradientTitleProps {
  text: string;
}
export const GradientTitle = ({ text }: GradientTitleProps) => {
  return (
    <h1
      className="
            text-5xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r 
            from-green-600 from-40% to-black 
            dark:from-green-300  dark:to-white
          "
    >
      {text}
    </h1>
  );
};
