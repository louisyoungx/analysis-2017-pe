var dom = document.getElementById("container-4");
var myChart = echarts.init(dom);
var app = {};

var option;



option = {
    title: {
        subtext: '点击查看',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '大学占比',
            type: 'pie',
            radius: [20, 140],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {value: 4, name: '上海大学'},
                {value: 1, name: '天津大学'},
                {value: 2, name: '广东工业大学'},
                {value: 5, name: '南京理工大学'},
                {value: 7, name: '南京航空航天大学'},
                {value: 5, name: '重庆大学'},
                {value: 1, name: '南昌大学'},
                {value: 3, name: '暨南大学'},
                {value: 4, name: '厦门大学'},
                {value: 8, name: '深圳大学'},
                {value: 1, name: '北京科技大学'},
                {value: 1, name: '哈尔滨工业大学'},
                {value: 1, name: '西南交通大学'},
                {value: 4, name: '电子科技大学'},
                {value: 1, name: '西北大学'},
                {value: 1, name: '大连理工大学'},
                {value: 2, name: '江西财经大学'},
                {value: 1, name: '合肥工业大学'},
                {value: 4, name: '东南大学'},
                {value: 1, name: '西安交通大学'},
                {value: 1, name: '华南师范大学'},
                {value: 1, name: '中国民航大学'},
                {value: 1, name: '华东政法'},
                {value: 1, name: '南京邮电大学'},
                {value: 3, name: '华南理工大学'},
                {value: 1, name: '西安理工大学'},
                {value: 1, name: '华侨大学'},
                {value: 1, name: '华东师范大学'},
                {value: 1, name: '湖南大学'},
                {value: 2, name: '长沙理工大学'},
                {value: 2, name: '中山大学'},
                {value: 2, name: '贵州大学'},
                {value: 1, name: '杭州电子科技大学'},
                {value: 1, name: '中国政法大学'},
                {value: 1, name: '国防科技大学'},
                {value: 2, name: '重庆邮电大学'},
                {value: 7, name: '上海理工大学'},
                {value: 2, name: '东北大学'},
                {value: 2, name: '北京工业大学'},
                {value: 1, name: '湖北工业大学'},
                {value: 1, name: '海南大学'},
                {value: 1, name: '浙江大学'},
                {value: 3, name: '苏州大学'},
                {value: 1, name: '福建师范大学'},
            ]
        },
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
