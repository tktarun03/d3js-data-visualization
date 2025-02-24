const data = [10, 25, 40, 20, 60, 75];

const svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height"),
      barWidth = width / data.length;

svg.selectAll("rect")
    .data(data)
    .enter().append("rect")
    .attr("x", (d, i) => i * barWidth)
    .attr("y", d => height - d * 4)
    .attr("width", barWidth - 5)
    .attr("height", d => d * 4)
    .attr("fill", "steelblue");