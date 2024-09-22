"use client";

import Image from "next/image";
import useVideo from "./use-video";
import { VideoProps } from "./video-player.types";
import { Button } from "../button";
import Progress from "../progress/progress";
import { secondsToHHMMSS } from "@/utils/time";

const VideoPlayer: React.FC<VideoProps> = ({ src, className, poster = "" }) => {
  const {
    currentTime,
    duration,
    isFinished,
    isPlaying,
    isVideoLoaded,
    isVideoWaited,
    videoRef,
    progress,
    pause,
    play,
    fullScreen,
  } = useVideo(src);
  return (
    <div className="relative">
      <video className="w-full" ref={videoRef} src={src} poster={poster} />
      <div
        className={`${
          !isVideoLoaded || isVideoWaited
            ? "animate-pulse opacity-40 pointer-events-none"
            : ""
        } h-12 dark:bg-base-50 rounded-lg  p-2 flex items-center mt-2 gap-5`}
        lang="en"
        dir="ltr"
      >
        <Image
          className="hidden lg:block relative top-[-0.15rem]"
          src="/images/logo-en-light.svg"
          width={100}
          height={20}
          alt="logo"
        />
        <Button
          size="tiny"
          variant={isPlaying ? undefined : "primary"}
          className="font-semibold tracking-widest w-32"
          onClick={!isPlaying ? play : pause}
        >
          {isVideoWaited ? "loading..." : !isPlaying ? "play" : "pause"}
        </Button>
        <Progress value={progress} variant="primary" />
        <div className="flex gap-1 font-semibold text-sm *:w-16">
          <span>{secondsToHHMMSS(currentTime)}</span> /
          <span>{secondsToHHMMSS(duration)}</span>
        </div>
        <Button
          size="tiny"
          className="hidden lg:inline-flex font-semibold tracking-widest w-44"
          onClick={fullScreen}
        >
          full screen
        </Button>
      </div>
    </div>
  );
};

export default VideoPlayer;
