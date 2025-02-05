import { FC } from 'react';

type MarkpromptIconProps = {
  className?: string;
};

export const MarkpromptIcon: FC<MarkpromptIconProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 176 123" fill="none">
      <rect
        x={1.5}
        y={1.5}
        width={173}
        height={120}
        rx={28.5}
        fill="#fff"
        fillOpacity={0}
        stroke="currentColor"
        strokeOpacity={0.3}
        strokeWidth={3}
      />
      <path
        d="M123.492 37.603a4.206 4.206 0 014.206-4.206h8.413a4.206 4.206 0 014.206 4.206v21.032a4.206 4.206 0 01-4.206 4.206h-8.413a4.206 4.206 0 01-4.206-4.206V37.603zM142 80.508c0 5.575-4.52 10.095-10.095 10.095-5.576 0-10.095-4.52-10.095-10.095 0-5.575 4.519-10.095 10.095-10.095 5.575 0 10.095 4.52 10.095 10.095zM40.206 90.603A4.206 4.206 0 0136 86.397V37.603a4.206 4.206 0 014.206-4.206h10.598c1.277 0 2.486.58 3.284 1.578l12.278 15.348a4.206 4.206 0 006.57 0l12.277-15.348a4.206 4.206 0 013.285-1.578h10.597a4.207 4.207 0 014.207 4.206v48.794a4.207 4.207 0 01-4.207 4.206h-8.412a4.206 4.206 0 01-4.207-4.206V69.785c0-3.976-5.007-5.733-7.49-2.628l-6.05 7.563a4.206 4.206 0 01-6.57 0l-6.05-7.563c-2.483-3.105-7.49-1.348-7.49 2.628v16.612a4.206 4.206 0 01-4.207 4.206h-8.413z"
        fill="currentColor"
      />
    </svg>
  );
};

/* <svg className={className} viewBox="0 0 184 128" fill="none">
<g clipPath="url(#prefix__clip0_5685_199803)" fill="currentColor">
  <path d="M134 30h20v35h-20V30zM156 86c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z" />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M13.788 10C12.283 10 10 11.612 10 15v98c0 3.388 2.283 5 3.788 5h156.424c1.505 0 3.788-1.612 3.788-5V15c0-3.388-2.283-5-3.788-5H13.788zM0 15C0 7.342 5.586 0 13.788 0h156.424C178.414 0 184 7.342 184 15v98c0 7.658-5.586 15-13.788 15H13.788C5.586 128 0 120.658 0 113V15z"
  />
  <path d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39H30z" />
</g>
<defs>
  <clipPath id="prefix__clip0_5685_199803">
    <path fill="#fff" d="M0 0h184v128H0z" />
  </clipPath>
</defs>
</svg>
}
*/
