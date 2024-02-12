import * as React from "react";
import type { SVGProps } from "react";

interface OfficeChairIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OfficeChairIcon = (props: OfficeChairIconProps) => {
  const animationName = props.animate ? 'spinAnimation' : '';

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 24 24"
        width={props.size || 24}
        height={props.size || 24}
        fill={"none"}
        {...props}
        style={{
          ...props.style,
          animation: props.animate ? `${animationName} 2s linear infinite` : undefined,
          transform: `rotate(${props.rotate || 0}deg)`,
        }}
      >
        <path d="M16 22C14.934 20.7553 13.5337 20 12 20C10.4663 20 9.06603 20.7553 8 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 13C10.7319 13 9.39109 13.2193 8.34002 13.5128C7.54859 13.7338 6.91195 14.7415 7.00999 15.5596C7.04632 15.8627 7.30731 16 7.58173 16H16.4183C16.6927 16 16.9537 15.8627 16.99 15.5596C17.0881 14.7415 16.4514 13.7338 15.66 13.5128C14.6089 13.2193 13.2681 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 10C19.8954 10 19 10.8954 19 12V13C19 14.1046 18.1046 15 17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 10C4.10457 10 5 10.8954 5 12V13C5 14.1046 5.89543 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.8197 10H11.1803C9.77811 10 9.07704 10 8.56988 9.57641C8.06272 9.15282 7.89268 8.42526 7.55261 6.97014C7.01792 4.68228 6.75058 3.53835 7.31199 2.76918C7.87341 2 8.97569 2 11.1803 2H12.8197C15.0243 2 16.1266 2 16.688 2.76918C17.2494 3.53835 16.9821 4.68228 16.4474 6.97014C16.1073 8.42526 15.9373 9.15282 15.4301 9.57641C14.923 10 14.2219 10 12.8197 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default OfficeChairIcon;