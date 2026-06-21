import { Fragment } from "react";

/**
 * Faint line-art construction skyline used as the hero watermark.
 * Pure SVG (currentColor stroke) so colour/opacity are controlled by the parent.
 */
function windows(
  x: number,
  y: number,
  cols: number,
  rows: number,
  key: string,
  gx = 28,
  gy = 40,
  w = 14,
  h = 22,
) {
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push(
        <rect
          key={`${key}-${r}-${c}`}
          x={x + c * gx}
          y={y + r * gy}
          width={w}
          height={h}
        />,
      );
    }
  }
  return cells;
}

function scaffold(
  x: number,
  y: number,
  cols: number,
  rows: number,
  key: string,
  cw = 44,
  ch = 44,
) {
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cx = x + c * cw;
      const cy = y + r * ch;
      cells.push(
        <Fragment key={`${key}-${r}-${c}`}>
          <rect x={cx} y={cy} width={cw} height={ch} />
          <line x1={cx} y1={cy} x2={cx + cw} y2={cy + ch} />
          <line x1={cx + cw} y1={cy} x2={cx} y2={cy + ch} />
        </Fragment>,
      );
    }
  }
  return cells;
}

function crane(
  mastX: number,
  baseY: number,
  topY: number,
  jibLeft: number,
  jibRight: number,
  key: string,
) {
  const jibY = topY + 28;
  const braces = [];
  for (let yy = topY + 30; yy < baseY; yy += 34) {
    braces.push(<line key={`${key}-b-${yy}`} x1={mastX} y1={yy} x2={mastX + 24} y2={yy + 17} />);
    braces.push(<line key={`${key}-b2-${yy}`} x1={mastX + 24} y1={yy} x2={mastX} y2={yy + 17} />);
  }
  const jibBraces = [];
  for (let xx = mastX + 28; xx < jibRight; xx += 36) {
    jibBraces.push(<line key={`${key}-j-${xx}`} x1={xx} y1={jibY} x2={xx + 18} y2={jibY + 16} />);
    jibBraces.push(<line key={`${key}-j2-${xx}`} x1={xx + 18} y1={jibY} x2={xx + 36} y2={jibY + 16} />);
  }
  return (
    <g key={key}>
      {/* mast */}
      <rect x={mastX} y={topY + 16} width={24} height={baseY - topY - 16} />
      {braces}
      {/* operator cab */}
      <rect x={mastX - 4} y={topY + 16} width={32} height={26} />
      {/* apex */}
      <path d={`M${mastX} ${topY + 16} L${mastX + 12} ${topY} L${mastX + 24} ${topY + 16}`} />
      {/* jib */}
      <line x1={jibLeft} y1={jibY} x2={jibRight} y2={jibY} />
      <line x1={mastX + 28} y1={jibY + 16} x2={jibRight} y2={jibY + 16} />
      <line x1={jibLeft} y1={jibY} x2={mastX - 4} y2={jibY + 16} />
      <line x1={jibRight} y1={jibY} x2={jibRight} y2={jibY + 16} />
      {jibBraces}
      {/* counterweight */}
      <rect x={jibLeft} y={jibY - 4} width={28} height={30} />
      {/* hook + load */}
      <line x1={jibRight - 70} y1={jibY + 16} x2={jibRight - 70} y2={jibY + 90} />
      <rect x={jibRight - 95} y={jibY + 90} width={50} height={44} />
      <line x1={jibRight - 95} y1={jibY + 90} x2={jibRight - 45} y2={jibY + 134} />
      <line x1={jibRight - 45} y1={jibY + 90} x2={jibRight - 95} y2={jibY + 134} />
    </g>
  );
}

export function Skyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 540"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      strokeLinecap="round"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {/* ground */}
      <line x1="0" y1="512" x2="1440" y2="512" />

      {/* left apartment block */}
      <rect x="120" y="210" width="172" height="302" />
      <rect x="150" y="188" width="42" height="22" />
      <rect x="222" y="188" width="42" height="22" />
      <line x1="120" y1="300" x2="292" y2="300" />
      <line x1="120" y1="316" x2="292" y2="316" />
      {windows(138, 240, 4, 1, "la", 40, 40, 22, 26)}

      {/* dome civic building */}
      <rect x="430" y="172" width="184" height="340" />
      <path d="M430 172 Q522 104 614 172" />
      <line x1="522" y1="104" x2="522" y2="92" />
      {windows(452, 210, 5, 6, "dome", 30, 46, 14, 24)}

      {/* tall tower */}
      <rect x="668" y="250" width="150" height="262" />
      {windows(686, 280, 4, 5, "tt", 32, 44, 16, 24)}

      {/* scaffold tower */}
      {scaffold(852, 286, 3, 5, "sc1", 46, 45)}

      {/* right building under construction */}
      <rect x="1184" y="300" width="174" height="212" />
      {scaffold(1196, 312, 3, 4, "sc2", 50, 46)}

      {/* trees */}
      <circle cx="92" cy="486" r="24" />
      <line x1="92" y1="486" x2="92" y2="512" />
      <path d="M1392 512 L1410 458 L1428 512 Z" />
      <path d="M1384 512 L1400 470 L1416 512 Z" />

      {/* cranes (drawn last, on top) */}
      {crane(300, 512, 322, 168, 470, "crane1")}
      {crane(1130, 512, 118, 960, 1360, "crane2")}
    </svg>
  );
}
