import {getDownloadStats} from "./downloadsUtils";

const delays2 = 80,
  durations2 = 500;

function createDownloadsChartConfig(releases) {

  const downloadStats = getDownloadStats(releases);
  const {versions: labels, downloadCounts} = downloadStats;
  const series = Object.values(downloadCounts).map( c => c );

  const chartConfig = {
    data: {
      labels,
      series
    },
    options: {
      stackBars: true,
      axisX: {
        showGrid: false
      },
      low: 0,
      chartPadding: {
        top: 0,
        right: 5,
        bottom: 0,
        left: 0
      }
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }
      ]
    ],
    animation: {
      draw: function(data) {
        if (data.type === "bar") {
          const value = data.element.attr('ct:value');
          data.element.attr({
            style: 'stroke-width: 20px'
          });
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    }
  };

  return chartConfig;
}

export default createDownloadsChartConfig;
