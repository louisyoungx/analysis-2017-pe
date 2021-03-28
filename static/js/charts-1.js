var dom = document.getElementById("container-1");
var myChart = echarts.init(dom);
var app = {};
var option;

option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: '考研就业人数',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 194, name: '考研'},
                {value: 144, name: '工作'},
                {value: 171, name: '待定'}
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
