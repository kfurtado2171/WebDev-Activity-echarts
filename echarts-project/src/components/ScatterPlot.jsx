import React, { useState,useEffect } from "react";
import ReactECharts from "echarts-for-react";

export default function ScatterPlot() {
    const [option, setOptions] = useState({});
    
    useEffect(() => {

    setOptions({
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
            }
        },
        legend: {
            data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
        },
        toolbox: {
            feature: {
            saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
            type: 'value'
            }
        ],
        series: [
            {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
            },
            emphasis: {
                focus: 'series'
            },
            data: [524, 566, 145, 144, 414, 634, 123]
            },
            {
            name: 'Line 2',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
            },
            emphasis: {
                focus: 'series'
            },
            data: [634, 245, 735, 133, 452, 234, 143]
            },
            {
            name: 'Line 3',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                // {
                //     offset: 0,
                //     color: 'rgb(55, 162, 255)'
                // },
                // {
                //     offset: 1,
                //     color: 'rgb(116, 21, 219)'
                // }
                // ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220]
            },
            {
            name: 'Line 4',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
            },
            emphasis: {
                focus: 'series'
            },
            data: [543, 254, 635, 245, 89, 423, 213]
            },
            {
            name: 'Line 5',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {
                opacity: 0.8,
            },
            emphasis: {
                focus: 'series'
            },
            data: [75, 130, 204, 179, 63, 161, 384]
            }
        ]
        })  
    },[])
    return  (
        <div className="vizContainer">
            <ReactECharts option={option} />
        </div>
      );
}