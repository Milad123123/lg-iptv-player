import React from "react";
import VideoPlayer from "./VideoPlayer";
import { Tv } from "lucide-react";

export default function App() {
  const channelUrl = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"; // لینک تست

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <Tv size={128} color="#A50034" className="mb-6" />
      <h1 className="text-5xl font-bold text-white mb-4">تلویزیون فعال شد!</h1>
      <VideoPlayer src={channelUrl} />
    </div>
  );
}
