var dom = document.getElementById("container-2");
var myChart = echarts.init(dom);
var app = {};
var option;

option = {
    title: {
        subtext: '过线比例：61.34%',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '初试过线比例',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 119, name: '过线'},
                {value: 75, name: '未过'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
