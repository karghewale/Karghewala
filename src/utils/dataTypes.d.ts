interface AluminiResponseType {
  id: string;
  name: string;
  image: string;
  salary: string;
  created_at: string;
  description: string;
  age: string;
  sale_rate: string;
  photos: string[];
}


declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}
