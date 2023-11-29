interface PropsType {
  src: string;
}

export const ActiveMap = ({ src }: PropsType) => {
  return (
    <div>
      <img src={src} alt="" width={490} height={490} />
    </div>
  );
};
