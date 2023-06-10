import { CSSProperties, useEffect, useRef } from 'react';
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';
import 'video.js/dist/video-js.css';
import './videojs.css';

export interface VideoJSPlayerProp {
  options: VideoJsPlayerOptions;
  onReady?: (player: VideoJsPlayer) => void;
  className?: string;
  style?: CSSProperties;
}
export const VideoJSPlayer = ({ options, onReady, className, style }: VideoJSPlayerProp) => {
  const videoRef = useRef(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);
  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElment = videoRef.current;
      if (!videoElment) return;
      const player = playerRef.current = videojs(videoElment, options, () => {
        videojs.log('player is ready');
        onReady?.(player);
      })
    } else {
      const player = playerRef.current;

      player?.autoplay(options.autoplay ?? 'any');
      player?.src(options.sources ?? '');
    }
  }, [options, videoRef]);
  return (
        <div style={style} className="video-js-container-x">
            <video ref={videoRef} className={`video-js vjs-big-play-centered ${className ?? ''}`} />
        </div>
  )
}
