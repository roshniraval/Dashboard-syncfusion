import './index.css';
import * as React from 'react';
import { SampleBase } from './sample-base';
import { DashboardLayoutComponent, PanelDirective, PanelsDirective} from '@syncfusion/ej2-react-layouts';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, indexFinder, Inject, AccumulationDataLabel, AccumulationTooltip, PieSeries, AccumulationAnnotation, } from '@syncfusion/ej2-react-charts';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

const SAMPLE_CSS = `
#category:hover {
    cursor: pointer;
}`;
//let content = '<div id= "white" style="cursor:pointer;padding:3px;width:30px; height:30px;"><img src="https://ej2.syncfusion.com/react/demos/src/chart/images/white.png" id="back" /><div>';
export default class App extends SampleBase {
    constructor() {
        super(...arguments);
        this.cellSpacing =[5,5]
        this.data = [
            { x: 'SUV', y: 25 }, { x: 'Car', y: 37 }, { x: 'Pickup', y: 15 }, { x: 'Minivan', y: 23 }
        ];
        this.suvs = [{ x: 'Toyota', y: 8 }, { x: 'Ford', y: 12 }, { x: 'GM', y: 17 }, { x: 'Renault', y: 6 }, { x: 'Fiat', y: 3 },
            { x: 'Hyundai', y: 16 }, { x: 'Honda', y: 8 }, { x: 'Maruthi', y: 10 }, { x: 'BMW', y: 20 }];
        this.cars = [{ x: 'Toyota', y: 7 }, { x: 'Chrysler', y: 12 }, { x: 'Nissan', y: 9 }, { x: 'Ford', y: 15 },
            { x: 'Tata', y: 10 },
            { x: 'Mahindra', y: 7 }, { x: 'Renault', y: 8 }, { x: 'Skoda', y: 5 }, { x: 'Volkswagen', y: 15 }, { x: 'Fiat', y: 3 }];
        this.pickups = [{ x: 'Nissan', y: 9 }, { x: 'Chrysler', y: 4 }, { x: 'Ford', y: 7 }, { x: 'Toyota', y: 20 },
            { x: 'Suzuki', y: 13 }, { x: 'Lada', y: 12 }, { x: 'Bentley', y: 6 }, { x: 'Volvo', y: 10 }, { x: 'Audi', y: 19 }];
        this.minivans = [{ x: 'Hummer', y: 11 }, { x: 'Ford', y: 5 }, { x: 'GM', y: 12 }, { x: 'Chrysler', y: 3 },
            { x: 'Jaguar', y: 9 },
            { x: 'Fiat', y: 8 }, { x: 'Honda', y: 15 }, { x: 'Hyundai', y: 4 }, { x: 'Scion', y: 11 }, { x: 'Toyota', y: 17 }];
        this.dataLabel = {
            visible: true, position: 'Inside', connectorStyle: { type: 'Curve', length: '5%' }, font: { size: '14px', color: 'white' }
        };
        this.startAngle = 0;
        //public explodeIndex: number = 2;
        this.endAngle = 360;
        this.title = 'Automobile Sales by Category';
        this.isparent = true;
        this.fields = { text: "x", id: "y" };
    }
    render() {
        return (<div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
            <div className="dashboardParent">
              <DashboardLayoutComponent id="analytic_dashboard"  cellSpacing={this.cellSpacing} columns={6}>
                <div className='control-section'>
                        <div id="link">
                       <a id="category" onClick={this.onClick.bind(this)} style={{ visibility: 'hidden', display: 'inline-block' }}>Sales by Category</a>
                        <p style={{ visibility: 'hidden', display: 'inline-block' }} id="symbol">&nbsp;&gt;&gt;&nbsp;</p>
                        <p id="text" style={{ display: 'inline-block' }}></p>
                    </div>
                    <PanelsDirective>
                    <PanelDirective sizeX={2} sizeY={2} row={1} col={0} content={
                    <AccumulationChartComponent id='pie-chart' ref={pie => this.pie = pie} title='Automobile Sales by Category' enableSmartLabels={false} legendSettings={{ visible: false }} tooltip={{ enable: false, format: "<b>${point.x}${point.y}%</b>" }} chartMouseClick={this.onChartMouseClick.bind(this)} textRender={this.onTextRender.bind(this)} load={this.load.bind(this)} loaded={this.onChartLoad.bind(this)}>
                    <Inject services={[AccumulationDataLabel, AccumulationTooltip, PieSeries, AccumulationAnnotation]}/>
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective dataSource={this.data} xName='x' yName='y' dataLabel={this.dataLabel} radius='70%' explode={false}>
                        </AccumulationSeriesDirective>
                    </AccumulationSeriesCollectionDirective>
              </AccumulationChartComponent>
                    
                    }>

                    <ListViewComponent id='list' width='350px' ref={list => this.list = list} dataSource={this.data} template={this.listTemplate} fields={this.fields}></ListViewComponent>
                    </PanelDirective>
                    </PanelsDirective>
                  <AccumulationChartComponent id='pie-chart' ref={pie => this.pie = pie} title='Automobile Sales by Category' enableSmartLabels={false} legendSettings={{ visible: false }} tooltip={{ enable: false, format: "<b>${point.x}${point.y}%</b>" }} chartMouseClick={this.onChartMouseClick.bind(this)} textRender={this.onTextRender.bind(this)} load={this.load.bind(this)} loaded={this.onChartLoad.bind(this)}>
                        <Inject services={[AccumulationDataLabel, AccumulationTooltip, PieSeries, AccumulationAnnotation]}/>
                        <AccumulationSeriesCollectionDirective>
                            <AccumulationSeriesDirective dataSource={this.data} xName='x' yName='y' dataLabel={this.dataLabel} radius='70%' explode={false}>
                            </AccumulationSeriesDirective>
                        </AccumulationSeriesCollectionDirective>
                  </AccumulationChartComponent>
                    <ListViewComponent id='list' width='350px' ref={list => this.list = list} dataSource={this.data} template={this.listTemplate} fields={this.fields}></ListViewComponent>
                </div>
              </DashboardLayoutComponent>
            </div>
         </div>);
    }
    listTemplate(data) {
      debugger;
        return (<div className='e-list-wrapper'>
                <span className="e-list-item-product">{data.x}</span>
                <span className="e-list-value">{data.y}%</span>
            </div>);
    }
    onTextRender(args) {
        args.text = args.point.x + ' ' + args.point.y + ' %';
    }
    onChartMouseClick(args) {
        let index = indexFinder(args.target);
        if (this.isparent && document.getElementById('pie-chart_Series_' + index.series + '_Point_' + index.point)) {
            this.isparent = false;
            // eslint-disable-next-line default-case
            switch (index.point) {
                case 0:
                    this.list.dataSource = this.suvs;
                    this.pie.title = 'Automobile Sales in the SUV Segment';
                    document.getElementById('text').innerHTML = 'SUV';
                    break;
                case 1:
                    this.list.dataSource = this.cars;
                    this.pie.title = 'Automobile Sales in the Car Segment';
                    document.getElementById('text').innerHTML = 'Car';
                    break;
                case 2:
                    this.list.dataSource = this.pickups;
                    this.pie.title = 'Automobile Sales in the Pickup Segment';
                    document.getElementById('text').innerHTML = 'Pickup';
                    break;
                case 3:
                    this.list.dataSource = this.minivans;
                    this.pie.title = 'Automobile Sales in the Minivan Segment';
                    document.getElementById('text').innerHTML = 'Minivan';
                    break;
            }
            document.getElementById('list').style.display = 'block';
            document.getElementById('pie-chart').style.display = 'none';
            document.getElementById('category').style.visibility = 'visible';
            document.getElementById('symbol').style.visibility = 'visible';
            document.getElementById('text').style.visibility = 'visible';
        }
        if (args.target.indexOf('back') > -1) {
            this.hide(document.getElementById(args.target));
        }
    }
    onClick(e) {
        this.hide(e.target);
    }
    hide(target) {
        this.pie.series[0].dataSource = this.data;
        this.pie.series[0].innerRadius = '0%';
        this.isparent = true;
        this.pie.series[0].explode = false;
        this.pie.annotations = [];
        this.pie.series[0].dataLabel = this.dataLabel;
        this.pie.title = this.title;
        this.pie.legendSettings.visible = false;
        this.pie.enableSmartLabels = false;
        this.pie.refresh();
        target.style.visibility = 'hidden';
        document.getElementById('category').style.visibility = 'hidden';
        document.getElementById('symbol').style.visibility = 'hidden';
        document.getElementById('text').style.visibility = 'hidden';
        document.getElementById('list').style.display = 'none';
    }
    load(args) {
       
    }
    onChartLoad(args) {
        document.getElementById('pie-chart').setAttribute('title', '');
    }
}

