import { Component, OnInit } from '@angular/core';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';
import { ConfigService } from '../../../service';
import { ApiAq } from '../../../apiAQ';
import { concat } from 'rxjs/operator/concat';

declare const AmCharts: any;
declare const $: any;
@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  providers: [ConfigService],
  styleUrls: [
    './dashboard-default.component.css',
    '../../../../assets/icon/svg-animated/svg-weather.css'
  ]
})
export class DashboardDefaultComponent implements OnInit {

  totalValueGraphData1 = buildChartJS('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#3a73f1', 'transparent');
  totalValueGraphData2 = buildChartJS('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#e55571', 'transparent');
  totalValueGraphOption = buildChartOption();
  textResponse: ApiAq[];
  data: ApiAq[];
  message: any;
  randomAnswer: any;
  i: any
  value: Object[];
  value1;
  value2;
  value3;
  value4;

  constructor(private myHttp: ConfigService) {
    this.message;
    this.randomAnswer;
    this.value1;
    this.value2;
    this.value3;
    this.value4;
    this.i = 0;
    

  }

  ngOnInit() {

    //getting data
    // setInterval(() => {
    //   this.myFunction();
    // }, 200)
    this.myFunction();
    // this.myFunction((response)=> {
    //   setInterval(() => {
    //     // this.message;
    //     // console.log(this.message);
    //     // const value = Math.round(Math.random() * 100);
    //     // chart_sale.arrows[0].setValue(value * 1.18);
    //     // chart_sale.axes[0].setTopText((value + '%').toString());
    //     // chart_sale.axes[1].bands[1].setEndValue(value);
    //     console.log(response);
    //     if (response != 'undefined') {
    //     this.randomAnswer = response.results[Math.floor(Math.random() * response.results.length)];
    //     //console.log(this.message[Math.floor(Math.random() * this.message.results.length)])
    //     console.log(Math.random() * 10);
    //     console.log(this.randomAnswer.measurements[this.i] + "~~~~");
    //     // var int i;
    //     if (this.randomAnswer.measurements[this.i] != undefined) {
    
        
    //       for(this.i; this.i <= 3; this.i = this.i+ 1) {
    //         if(this.i+1 == 1) {
    //           this.value1 = this.randomAnswer.measurements[this.i].value;
    //           // console.log(this.value1)
    //         } else if(this.i+1 == 2) {
    //           this.value2 = this.randomAnswer.measurements[this.i].value;
    //         } else if(this.i+1 == 3) {
    //           this.value3 = this.randomAnswer.measurements[this.i].value;
    //         } else if(this.i+1 == 4) {
    //           this.value4 = this.randomAnswer.measurements[this.i].value;
    //         }
    //       }
    //     }
    //     this.i = 0;
    //   }
    //   }, 2000);
  
    // });

    setInterval(() => {
      // this.message;
      // console.log(this.message);
      // const value = Math.round(Math.random() * 100);
      // chart_sale.arrows[0].setValue(value * 1.18);
      // chart_sale.axes[0].setTopText((value + '%').toString());
      // chart_sale.axes[1].bands[1].setEndValue(value);
      if (this.message != undefined) {
      this.randomAnswer = this.message.results[Math.floor(Math.random() * this.message.results.length)];
      //console.log(this.message[Math.floor(Math.random() * this.message.results.length)])
      console.log(Math.random() * 10);
      console.log(this.randomAnswer.measurements[this.i] + "~~~~");
      // var int i;
      if (this.randomAnswer.measurements[this.i] != undefined) {
  
      
        for(this.i; this.i <= 3; this.i = this.i+ 1) {
          if(this.i+1 == 1) {
            this.value1 = this.randomAnswer.measurements[this.i].value;
            // console.log(this.value1)
          } else if(this.i+1 == 2) {
            this.value2 = this.randomAnswer.measurements[this.i].value;
          } else if(this.i+1 == 3) {
            this.value3 = this.randomAnswer.measurements[this.i].value;
          } else if(this.i+1 == 4) {
            this.value4 = this.randomAnswer.measurements[this.i].value;
          }
        }
      }
      this.i = 0;
    }
    }, 2000);

    const plot = $.plot('#realtimeupdate', [getRandomData()], {
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color: '#FFB64D',
      },
      lines: {
        fill: true,
        fillColor: '#FFB64D',
        borderWidth: 0,
      },
      grid: {
        borderWidth: 0,
        labelMargin: 0,
        axisMargin: 0,
        minBorderMargin: 0,
      },
      yaxis: {
        min: 0,
        max: 100,
        show: false,
      },
      xaxis: {
        show: false,
      }
    });
    setInterval(() => {
      plot.setData([getRandomData()]);
      plot.draw();
    }, 900);


    AmCharts.makeChart('fees-collection', {
      'theme': 'light',
      'type': 'serial',
      'hideCredits': true,
      'startDuration': 2,
      'dataProvider': [{
        'country': 'Collection',
        'visits': 4025,
        'color': ' #4680ff'
      }, {
        'country': 'Fees',
        'visits': 3782,
        'color': '#FC6180'

      }, {
        'country': 'Expence',
        'visits': 3586,
        'color': '#FFB64D'

      }],
      'valueAxes': [{
        'position': 'left',
        'axisAlpha': 0,
        'title': ''
      }],
      'graphs': [{
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillColorsField': 'color',
        'fillAlphas': 1,
        'axisAlpha': 1,
        'lineAlpha': 0.1,
        'type': 'column',
        'columnWidth': 0.5,
        'valueField': 'visits'
      }],
      'depth3D': 0,
      'angle': 0,
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': 'country',
      'categoryAxis': {
        'gridPosition': 'start',
        'axisAlpha': 0,
        'gridAlpha': 0,
        'labelRotation': 0
      },
      'export': {
        'enabled': true
      }
    });

    let targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17';
    targetSVG += ',2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5';
    targetSVG += ',9,5.5 S12.5,7.067,12.5,9z';
    AmCharts.makeChart('world-map-vititors', {
      'type': 'map',
      'projection': 'winkel3',
      'hideCredits': true,
      'theme': 'light',
      'imagesSettings': {
        'rollOverColor': '#FC6180',
        'rollOverScale': 3,
        'selectedScale': 3,
        'selectedColor': '#FC6180',
        'color': '#FC6180'
      },

      'areasSettings': {
        'unlistedAreasColor': '#dfdfdf',
        'outlineThickness': 0.1
      },

      'dataProvider': {
        'map': 'worldLow',
        'zoomLevel': 1,
        'zoomLongitude': 30,
        'zoomLatitude': 10,
        'images': [{
          'svgPath': targetSVG,
          'zoomLevel': 3,
          'scale': 1,
          'title': 'United State',
          'latitude': 50.6353,
          'longitude': 120.2250
        }]
      },
      'zoomControl': {
        'panControlEnabled': false,
        'zoomControlEnabled': false,
        'homeButtonEnabled': false
      },
      'export': {
        'enabled': true
      }
    });

    AmCharts.makeChart('world-map-markers', {
      'type': 'map',
      'theme': 'light',
      'hideCredits': true,
      'dataProvider': {
        'map': 'worldLow',
        'zoomLevel': 1,
        'zoomLongitude': 102.6353,
        'zoomLatitude': 0,
      },

      'areasSettings': {
        'unlistedAreasColor': '#fc889f',
        'unlistedAreasAlpha': 0.9
      },
      'zoomControl': {
        'panControlEnabled': false,
        'zoomControlEnabled': false,
        'homeButtonEnabled': false
      },

      'backgroundZoomsToTop': true,
      'linesAboveImages': true,


    });

    const chart_sale = AmCharts.makeChart('sale-prediction', {
      'theme': 'light',
      'hideCredits': true,
      'type': 'gauge',
      'axes': [{
        'id': 'axis2',
        'labelsEnabled': false,
        'axisColor': '#fec5d0',
        'axisThickness': 60,
        'axisAlpha': 1,
        'tickAlpha': 0,
        'radius': '10%',
        'startAngle': -150,
        'endAngle': 360,
        'topTextFontSize': 15,
        'topTextColor': '#000',
        'topTextYOffset': 80,
        'topText': ''
      }, {
        'topTextFontSize': 1,
        'topTextYOffset': 0,
        'axisColor': '#31d6ea',
        'axisThickness': 0,
        'endValue': 100,
        'gridInside': false,
        'inside': true,
        'radius': '50%',
        'fontSize': 0,
        'valueInterval': 100,
        'tickAlpha': 0,
        'startAngle': -150,
        'endAngle': 150,
        'unit': '%',
        'bandOutlineAlpha': 0,
        'bands': [{
          'color': '#fec5d0',
          'endValue': 100,
          'innerRadius': '150%',
          'radius': '170%',
          'gradientRatio': [0],
          'startValue': 0
        }, {
          'color': '#FC6180',
          'endValue': 0,
          'innerRadius': '150%',
          'radius': '170%',
          'gradientRatio': [0],
          'startValue': 0
        }]
      }],
      'arrows': [{
        'alpha': 1,
        'color': '#FC6180',
        'innerRadius': '250%',
        'nailRadius': 30,
        'nailAlpha': 1,
        'startWidth': 20,
        'radius': '500%'
      }]
    });
    setInterval(() => {
      const value = Math.round(Math.random() * 100);
      chart_sale.arrows[0].setValue(value * 1.18);
      chart_sale.axes[0].setTopText((value + '%').toString());
      chart_sale.axes[1].bands[1].setEndValue(value);
    }, 900);

    AmCharts.makeChart('statistics-chart', {
      type: 'serial',
      marginTop: 0,
      hideCredits: true,
      marginRight: 0,
      dataProvider: [{
        year: 'Jan',
        value: 2
      }, {
        year: 'Feb',
        value: 1.87
      }, {
        year: 'Mar',
        value: 0.97
      }, {
        year: 'Apr',
        value: 1.64
      }, {
        year: 'May',
        value: 0.4
      }, {
        year: 'Jun',
        value: 2.9
      }, {
        year: 'Jul',
        value: 5.2
      }, {
        year: 'Aug',
        value: 0.77
      }, {
        year: 'Sap',
        value: 3.1
      }],
      valueAxes: [{
        axisAlpha: 0,
        dashLength: 6,
        gridAlpha: 0.1,
        position: 'left'
      }],
      graphs: [{
        id: 'g1',
        bullet: 'round',
        bulletSize: 9,
        lineColor: '#4680ff',
        lineThickness: 2,
        negativeLineColor: '#4680ff',
        type: 'smoothedLine',
        valueField: 'value'
      }],
      chartCursor: {
        cursorAlpha: 0,
        valueLineEnabled: false,
        valueLineBalloonEnabled: true,
        valueLineAlpha: false,
        color: '#fff',
        cursorColor: '#FC6180',
        fullWidth: true
      },
      categoryField: 'year',
      categoryAxis: {
        gridAlpha: 0,
        axisAlpha: 0,
        fillAlpha: 1,
        fillColor: '#FAFAFA',
        minorGridAlpha: 0,
        minorGridEnabled: true
      },
      'export': {
        enabled: true
      }
    });
    AmCharts.makeChart('solid-gauge1', {
      type: 'gauge',
      hideCredits: true,
      theme: 'light',
      axes: [{
        axisAlpha: 0,
        tickAlpha: 0,
        labelsEnabled: false,
        startValue: 0,
        endValue: 100,
        startAngle: 0,
        endAngle: 360,
        bands: [{
          color: '#E5E5E5',
          startValue: -35,
          endValue: 35,
          radius: '100%',
          innerRadius: '92%'
        }, {
          color: '#93BE52',
          startValue: -35,
          endValue: 20,
          radius: '100%',
          innerRadius: '92%'
        }]
      }],
      'export': {
        enabled: true
      }
    });
    AmCharts.makeChart('email-sent', {
      type: 'serial',
      theme: 'light',
      hideCredits: true,
      dataDateFormat: 'YYYY-MM-DD',
      precision: 2,
      valueAxes: [
        {
          id: 'v1',
          title: 'Sales',
          position: 'left',
          autoGridCount: false,
          labelFunction: function (g) {
            return Math.round(g);
          }
        },
        {
          id: 'v2',
          title: '',
          gridAlpha: 0,
          fontSize: 0,
          axesAlpha: 0,
          position: 'left',
          autoGridCount: false
        }
      ],
      graphs:
        [
          {
            id: 'g3',
            valueAxis: 'v1',
            lineColor: '#4680ff',
            fillColors: '#4680ff',
            fillAlphas: 1,
            type: 'column',
            title: 'Actual Sales',
            valueField: 'sales2',
            clustered: true,
            columnWidth: 0.4,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
          },
          {
            id: 'g4',
            valueAxis: 'v1',
            lineColor: '#FC6180',
            fillColors: '#FC6180',
            fillAlphas: 1,
            type: 'column',
            title: 'Target Sales',
            valueField: 'sales1',
            clustered: true,
            columnWidth: 0.4,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
          },
          {
            id: 'g1',
            valueAxis: 'v2',
            bullet: 'round',
            bulletBorderAlpha: 0,
            bulletColor: 'transparent',
            bulletSize: 0,
            hideBulletsCount: 50,
            lineThickness: 3,
            dashLength: 10,
            lineColor: '#93BE52',
            type: 'smoothedLine',
            title: 'Market Days',
            useLineColorForBulletBorder: true,
            valueField: 'market1',
            balloonText: '[[title]]<br /><b style="font-size: 130% ">[[value]]</b>'
          },
          {
            id: 'v3',
            valueAxis: 'v1',
            lineColor: '#FFB64D',
            fillColors: '#FFB64D',
            fillAlphas: 1,
            type: 'column',
            title: 'Actual Sales',
            valueField: 'sales2',
            clustered: true,
            columnWidth: 0.4,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%>$[[value]]M</b>'
          }
        ],
      chartCursor: {
        pan: true,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        cursorAlpha: 0,
        valueLineAlpha: 0.2
      },
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        dashLength: 0,
        axisAlpha: 0,
        GridAlpha: 0,
        minorGridEnabled: true
      },
      legend: {
        useGraphSettings: true,
        position: 'top'
      },
      balloon: {
        borderThickness: 1,
        shadowAlpha: 0
      },
      'export': {
        enabled: true
      },
      dataProvider: [
        {
          date: '2013-01-16',
          market1: 91,
          market2: 75,
          sales1: 5,
          sales2: 8
        },
        {
          date: '2013-01-17',
          market1: 74,
          market2: 78,
          sales1: 4,
          sales2: 6
        },
        {
          date: '2013-01-18',
          market1: 78,
          market2: 88,
          sales1: 5,
          sales2: 2
        },
        {
          date: '2013-01-19',
          market1: 85,
          market2: 89,
          sales1: 8,
          sales2: 9
        },
        {
          date: '2013-01-20',
          market1: 82,
          market2: 89,
          sales1: 9,
          sales2: 6
        },
        {
          date: '2013-01-21',
          market1: 83,
          market2: 85,
          sales1: 3,
          sales2: 5
        },
        {
          date: '2013-01-22',
          market1: 78,
          market2: 92,
          sales1: 5,
          sales2: 7
        }
      ]
    });

    $('.sadball').createWaterBall({
      cvs_config: {
        width: 100,
        height: 100
      },
      wave_config: {
        waveWidth: 0.025,
        waveHeight: 3
      },
      data_range: [30, 70, 100],
      isLoading: true,
      nowRange: 23,
      targetRange: 23
    });

    $('.happyball').createWaterBall({
      cvs_config: {
        width: 100,
        height: 100
      },
      wave_config: {
        waveWidth: 0.025,
        waveHeight: 3
      },
      data_range: [30, 70, 100],
      isLoading: true,
      nowRange: 75,
      targetRange: 75
    });
    setTimeout(function() {
      $('.sadball').createWaterBall('updateRange', 23);
      $('.happyball').createWaterBall('updateRange', 75);
    }, 1000);
  }
  async myFunction() {
    await this.myHttp.getData()
      .subscribe(
          comments => {
            this.message = comments;
            // console.log(this.message);
            // callback(comments);
          }, //Bind to view
          err => {
              // Log errors if any
              console.log(err + "~~~~~~~~~~~~~~~~~~~~~~~~~~~~"); 
          });
  }

  getDataByCity() {
    console.log('getDataByCity()');
  }

  onTaskStatusChange(event) {
    const parentNode = (event.target.parentNode.parentNode);
    parentNode.classList.toggle('done-task');
  }

  // map started
  lat = 21.1591857;
  lng = 72.7522563;
  latA = 21.7613308;
  lngA = 71.6753074;
  zoom = 8;

  styles: any = [{
    featureType: 'all',
    stylers: [{
      saturation: -80
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      hue: '#00ffee'
    }, {
      saturation: 50
    }]
  }, {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }];
  // map ended

}

function getRandomData() {
  let data = [];
  const totalPoints = 300;
  if (data.length > 0) {
    data = data.slice(1);
  }

  while (data.length < totalPoints) {
    const prev = data.length > 0 ? data[data.length - 1] : 50;
    let y = prev + Math.random() * 10 - 5;
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    data.push(y);
  }

  const res = [];
  for (let i = 0; i < data.length; ++i) {
    res.push([i, data[i]]);
  }
  return res;
}

function buildChartJS(a, b, f, c) {
  if (f == null) {
    f = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [{
      label: '',
      borderColor: a,
      borderWidth: 2,
      hitRadius: 30,
      pointHoverRadius: 4,
      pointBorderWidth: 50,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: c,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: 'rgba(0,0,0,0.5)',
      fill: true,
      backgroundColor: f,
      data: b,
    }]
  };
}

function buildChartOption() {
  return {
    title: {
      display: false
    },
    tooltips: {
      enabled: true,
      intersect: false,
      mode: 'nearest',
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    legend: {
      display: false,
      labels: {
        usePointStyle: false
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 12
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0
      }
    }
  };
}
