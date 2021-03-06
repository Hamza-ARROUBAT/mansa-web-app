import * as React from 'react';

function SvgLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g width={80} height={80}>
        <path fill="#0019ff" d="M0 0h183.44v52.48H0z" />
        <path
          fill="#fff"
          d="M44.96 40.001H36.2v-9.92q0-1.84.14-3.78.14-1.94.3-3.26.16-1.32.2-1.68h-.16l-5.08 18.64h-6.92l-5.12-18.6h-.16q.04.36.22 1.66.18 1.3.34 3.24.16 1.94.16 3.78v9.92H12v-27.52h12.48l4.16 15.88h.16l4.12-15.88h12.04v27.52zm33.16 0h-9.36l-1.16-3.88h-9.64l-1.16 3.88h-9.04l10.04-27.52h10.28l10.04 27.52zm-15.4-19.84l-2.92 9.8h5.96l-2.88-9.8h-.16zm46.12 19.84h-7.72l-11.56-13.36v13.36h-8.12v-27.52h7.72l11.56 13.56v-13.56h8.12v27.52zm17.48-28q5.28 0 8.68 2.14 3.4 2.14 3.48 6.34v.48h-8.28v-.16q0-1.2-.88-2t-2.68-.8q-1.76 0-2.7.52-.94.52-.94 1.28 0 1.08 1.28 1.6t4.12 1.08q3.32.68 5.46 1.42 2.14.74 3.74 2.42t1.64 4.56q0 4.88-3.3 7.24-3.3 2.36-8.82 2.36-6.44 0-10.02-2.16-3.58-2.16-3.58-7.64h8.36q0 2.08 1.08 2.78 1.08.7 3.36.7 1.68 0 2.78-.36 1.1-.36 1.1-1.48 0-1-1.22-1.5t-3.98-1.06q-3.36-.72-5.56-1.5-2.2-.78-3.84-2.58-1.64-1.8-1.64-4.88 0-4.52 3.5-6.66 3.5-2.14 8.86-2.14zm45.12 28h-9.36l-1.16-3.88h-9.64l-1.16 3.88h-9.04l10.04-27.52h10.28l10.04 27.52zm-15.4-19.84l-2.92 9.8h5.96l-2.88-9.8h-.16z"
        />
      </g>
    </svg>
  );
}

export default SvgLogo;
