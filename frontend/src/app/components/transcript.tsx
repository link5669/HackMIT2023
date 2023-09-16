export const Transcript = ({ transcript }) => {
  transcript = " - " + transcript;
  const formattedTranscript = transcript.replace(/-/g, "<br /> - ");

  return (
    <div className="px-5">
      <p dangerouslySetInnerHTML={{ __html: formattedTranscript }} />
    </div>
  );
};
