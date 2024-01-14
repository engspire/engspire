"use client";
import { getWeek } from 'date-fns';
import { HeatMapGrid } from 'react-grid-heatmap';

export default function ActivityHeatMap() {
  const weekNumber = getWeek(new Date());

  const xLabels = new Array(10).fill(0).map((_, i) => `W ${weekNumber - i}`).reverse();
  const yLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 50 + 50))
    );

  return (
    <div className='m-2 w-[275px]'>
      <h3 className="font-semibold mb-2">Engagement in the past 10 weeks</h3>
      <HeatMapGrid
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        // Render cell with tooltip
        cellRender={(x, y, value) => (
          <div title={`Pos(${x}, ${y}) = ${value}`}>{}</div>
        )}
        xLabelsStyle={(index) => ({
          color: index % 2 ? 'transparent' : '#777',
          fontSize: '.8rem'
        })}
        yLabelsStyle={() => ({
          fontSize: '.7rem',
          textTransform: 'uppercase',
          color: '#777'
        })}
        cellStyle={(_x, _y, ratio) => ({
          background: `rgb(128, 206, 209, ${ratio + 0.1})`,
          fontSize: '.8rem',
          color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`,
        })}
        cellHeight='1.5rem'
        xLabelsPos='bottom'
        onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
        yLabelsPos='right'
        square
      />
    </div>
  );
}
