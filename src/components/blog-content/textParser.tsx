export const textParser = (text: string) => {
  const splittedText = text.split('*');
  return splittedText.map((item: any, index: number) => (
    <p key={Math.random()} style={{ lineHeight: 2, textAlign: 'justify' }}>
      {item}
      {index === splittedText.length - 1 ? null : <br />}
    </p>
  ));
};
