import { useState } from "react";

type Props = {};

export const Transcripts = (_props: Props) => {
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks: BlobPart[] = [];

        mediaRecorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
          const url = URL.createObjectURL(audioBlob);
          setAudioUrl(url);

          sendAudioToAPI(audioBlob)
        };

        mediaRecorder.start();
        setRecorder(mediaRecorder);
        setIsRecording(true);
      } catch (error) {
        console.error("Error accessing the microphone", error);
      }
    }
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stop();
      setIsRecording(false);
    }
  };
  const sendAudioToAPI = async (audioBlob: Blob) => {
    try {
      const formData = new FormData();
      formData.append("file", audioBlob, "audio.mp3");
      formData.append("langu","en-IN");

      const response = await fetch("http://127.0.0.1:8000/voicetotext/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Response from API:", data);
    } catch (error) {
      console.error("Failed to send audio:", error);
    }
  };
  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      {audioUrl && <audio src={audioUrl} controls />}
    </div>
  );
};
