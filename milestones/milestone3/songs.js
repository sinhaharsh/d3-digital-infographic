const topRockSongs = [
    {artist: "Fleetwood Mac", title: "Dreams", sales_and_streams: 1882000},
    {artist: "AJR", title: "Bang!", sales_and_streams: 1627000},
    {artist: "Imagine Dragons", title: "Believer", sales_and_streams: 1571000},
    {artist: "Journey", title: "Don't Stop Believin", sales_and_streams: 1497000},
    {artist: "Eagles", title: "Hotel California", sales_and_streams: 1393000}
]


const topSongsSection = d3.select('#top-songs');
topSongsSection
    .append('h3')
        .text('Top Rock Songs');


const circlesChartWidth = 650;
const circlesChartHeight = 150;
const circlesChart = topSongsSection
    .append('svg')
        .attr('viewbox', [0, 0, circlesChartWidth, circlesChartHeight])
        .attr('width', circlesChartWidth)
        .attr('height', circlesChartHeight);

const marginMiddle = 75;
circlesChart
    .append('line')
        .attr('x1', 0)
        .attr('y1', marginMiddle)
        .attr('x2', circlesChartWidth)
        .attr('y2', marginMiddle)
        .attr('stroke', '#333')
        .attr('stroke-width', 2);

const circleRadius = 40;
const circleX = 5
const circleY = 2
const circleSpacing = 80

const circleScale = d3.scaleSqrt()
    .domain([0,1882000])
    .range([0,40]);
    // d3.max(topRockSongs, d => d.sales_and_streams)])
groups = circlesChart.selectAll('g')
    .data(topRockSongs)
    .join('g')
    // .attr("transform", d => `translate(${d.x}, ${d.y})`);

groups.append("circle")
    .attr("r", d => circleScale(d.sales_and_streams))
    .attr("cx", (d, i) => circleSpacing + (circleRadius * 3) * i)
    .attr("cy", marginMiddle)
    .style("fill", "#8da0cb");

groups.append("text")
    .attr("x", (d, i) => circleSpacing + (circleRadius * 3) * i)
    .attr("y", marginMiddle + circleRadius + 15)
    .text(d => d.title)
    .style("font-size", "12px")
    .attr('text-anchor', 'middle')


groups.append("text")
    .attr("x", (d, i) => circleSpacing + (circleRadius * 3) * i)
    .attr("y", marginMiddle - circleRadius - 5)
    .text(d => d.sales_and_streams / 1000000 + 'M')
    .style("font-size", "12px")
    .attr('text-anchor', 'middle')

        