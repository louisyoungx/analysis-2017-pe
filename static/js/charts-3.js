var dom = document.getElementById("container-3");
var myChart = echarts.init(dom);
var app = {};

var option;



option = {
    xAxis: {
        type: 'category',
        data: ['测控', '电科', '生医', '光电']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [56, 26, 18, 19],
        type: 'bar'
    }]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
