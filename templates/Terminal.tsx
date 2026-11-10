import {Circle, Node, Rect, Txt} from '@motion-canvas/2d';
import theme, { MONO } from '../theme';

export interface Terminal {
  root: Rect;
  body: Node;
  /** Add an empty line of text at row `index`; type into it with `typeText`. */
  line(index: number, fill?: string, fontSize?: number): Txt;
  /** Scene-relative position of a row, for drawing highlights behind it. */
  rowY(index: number): number;
  left: number;
  clear(): void;
}

export function createTerminal({
  x = 0,
  y = 0,
  width = 1300,
  height = 640,
  title = 'terminal',
  lineHeight = 54,
  firstLine = 100,
}: {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  title?: string;
  lineHeight?: number;
  firstLine?: number;
} = {}): Terminal {
  const body = (<Node />) as Node;
  const top = -height / 2;
  const root = (
    <Rect x={x} y={y} width={width} height={height} radius={18} fill={theme.surface2} lineWidth={2}>
      <Rect y={top + 28} width={width} height={56} radius={[18, 18, 0, 0]} fill={theme.surface0} />
      <Circle x={-width / 2 + 36} y={top + 28} size={18} fill={theme.coral} />
      <Circle x={-width / 2 + 66} y={top + 28} size={18} fill={theme.butter} />
      <Circle x={-width / 2 + 96} y={top + 28} size={18} fill={theme.mint} />
      <Txt y={top + 28} fontFamily={MONO} fontSize={22} fill={theme.text} text={title} />
      {body}
    </Rect>
  ) as Rect;

  const rowY = (i: number) => top + firstLine + i * lineHeight;
  const left = -width / 2 + 48;

  return {
    root,
    body,
    rowY,
    left,
    line(index, fill = theme.mint , fontSize = 30) {
      const t = (
        <Txt
          x={left}
          y={rowY(index)}
          offset={[-1, 0]}
          fontFamily={MONO}
          fontSize={fontSize}
          fill={fill}
          textWrap="pre"
          text=""
        />
      ) as Txt;
      body.add(t);
      return t;
    },
    clear() {
      body.removeChildren();
    },
  };
}
