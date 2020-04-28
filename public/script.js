let = margin = ({top: 20, right: 0, bottom: 30, left: 40}),
    width = 500,
    height = 500;

let data = [
    {name: "E", value: 1},
    {name: "F", value: 1},
    {name: "G", value: 1},
    {name: "H", value: 1},
    {name: "F", value: 1},
    {name: "E", value: 1}
];

let yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove());

let xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0));

let y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top]);

let x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1);

chart.update(order);

    const svg = d3.select('body').append("svg")
        .attr("viewBox", [0, 0, width, height]);
    
    const bar = svg.append("g")
        .attr("fill", "steelblue")
      .selectAll("rect")
      .data(data)
      .join("rect")
        .style("mix-blend-mode", "multiply")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth());
    
    const gx = svg.append("g")
        .call(xAxis);
    
    const gy = svg.append("g")
        .call(yAxis);
  
        x.domain(data.sort().map(d => d.name));
  
        const t = svg.transition()
            .duration(750);
  
        bar.data(data, d => d.name)
            .order()
          .transition(t)
            .delay((d, i) => i * 20)
            .attr("x", d => x(d.name));
  
        gx.transition(t)
            .call(xAxis)
          .selectAll(".tick")
            .delay((d, i) => i * 20);

