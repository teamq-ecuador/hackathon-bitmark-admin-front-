import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

interface List {
    id: number;
    name: string;
    image: string;
    price: string;
    tracking: string;
    country: string;
    date: string;
}

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardDemoComponent {

    fileChart: any;

    fileChartOptions: any;

    chartPlugins: any;

    selectedDate: number;

    mounths: any[];

    selectedMounths: any;

    selectedWeek: any;

    week: any[];

    brands = [
        {
            name: "Apple",
            price: "$45,230",
            icon: "pi pi-apple"
        },
        {
            name: "Facebook",
            price: "$32,490",
            icon: "pi pi-facebook"
        },
        {
            name: "Google",
            price: "$25,230",
            icon: "pi pi-google"
        },
        {
            name: "Microsoft",
            price: "$19,430",
            icon: "pi pi-microsoft"
        },
        {
            name: "Github",
            price: "$13,625",
            icon: "pi pi-github"
        },
        {
            name: "Vimeo",
            price: "$9,324",
            icon: "pi pi-vimeo"
        }
    ];
    products = [
        {
            name: "Apple Watch 2",
            price: "$45,230 - 234 pieces",
            image: "assets/images/pngwing 1 (1).png"
        },
        {
            name: "Apple Watch 4",
            price: "$45,230 - 234 pieces",
            image: "assets/images/kisspng-apple-watch-series-2-apple-watch-series-3-apple-wa-applewatch-5b1dde444cea99 1.png"
        },
        {
            name: "Apple Watch 2",
            price: "$45,230 - 234 pieces",
            image: "assets/images/pngwing 1 (1).png"
        },
        {
            name: "Apple Watch 3",
            price: "$45,230 - 234 pieces",
            image: "assets/images/kisspng-apple-watch-series-2-apple-watch-series-3-apple-wa-applewatch-5b1dde444cea99 1.png"
        },
        {
            name: "Apple Watch 2",
            price: "$45,230 - 234 pieces",
            image: "assets/images/pngwing 1 (1).png"
        },

    ];
    lists: List[] = [
        {
            id: 1,
            name: "Apple Watch 2",
            image: "assets/images/kisspng-apple-watch-series-2-apple-watch-series-3-apple-wa-applewatch-5b1dde444cea99 1.png",
            price: "$325",
            tracking: "#249234",
            country: "England",
            date: "09/13/2015"
        },
        {
            id: 2,
            name: "Apple Watch 4",
            image: "assets/images/pngwing 1 (1).png",
            price: "$156",
            tracking: "#241235",
            country: "Germany",
            date: "09/02/2011"
        },
        {
            id: 3,
            name: "Apple Watch 2",
            image: "assets/images/kisspng-apple-watch-series-2-apple-watch-series-3-apple-wa-applewatch-5b1dde444cea99 1.png",
            price: "$325",
            tracking: "#423552",
            country: "Italy",
            date: "09/13/2012"
        },
        {
            id: 4,
            name: "Apple Watch 1",
            image: "assets/images/kisspng-apple-watch-series-2-apple-watch-series-3-apple-wa-applewatch-5b1dde444cea99 1.png",
            price: "$654",
            tracking: "#123563",
            country: "Holland",
            date: "09/13/2015"
        },
        {
            id: 5,
            name: "Apple Watch 3",
            image: "assets/images/pngwing 1 (1).png",
            price: "$412",
            tracking: "#943563",
            country: "Amsterdam",
            date: "09/05/2014"
        },

    ];

    cols = [
        { field: 'name', header: 'Name' },
        { field: 'date', header: 'Date' },
        { field: 'file size', header: 'File Size' },
        { field: 'status', header: 'Status' },
    ];

    barData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [
            {
                label: 'Income',
                backgroundColor: '#3157DE',
                borderColor: 'rgb(255, 99, 132)',
                barThickness: 12,
                borderRadius: Number.MAX_VALUE,
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'Expense',
                backgroundColor: '#AFC1FF',
                barThickness: 12,
                borderColor: 'rgb(54, 162, 235)',
                borderRadius: Number.MAX_VALUE,
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    barOptions = {

        plugins: {
            legend: {
                labels: {
                    fontColor: '#A0A7B5',
                    usePointStyle: true,
                    font: {
                        weight: 700,
                    },
                    padding: 30
                },
                position: 'bottom'
            },
            tooltip: {
                backgroundColor: '#1F2ED0',
                titleFont: {
                    weight: 'bold'
                },
                bodyFont: {
                    weight: 'bold'
                },
                displayColors: false,
                padding: {
                    left: 40,
                    right: 40,
                    top: 10,
                    bottom: 10
                },
                callbacks: {
                    label: function(tooltipItem) {
                        return `$ ${tooltipItem.raw}`
                    }
                }
            },
        },
        scales: {            
            x: {
                ticks: {
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    borderDash: [3, 6],
                    color: '#E4EAFF',
                    drawBorder: false,
                    drawTicks: false
                }
            }
        }
    };

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'E-Commerce Dashboard' }
        ]);

        this.mounths = [
            { name: 'January' },
            { name: 'February' },
            { name: 'March' },
            { name: 'April' },
            { name: 'May' },
            { name: 'June' },
            { name: 'July' },
            { name: 'August' },
            { name: 'September' },
            { name: 'October' },
            { name: 'November' },
            { name: 'December' }
        ];

        this.week = [
            { name: 'Week 1' },
            { name: 'Week 2' },

        ];
    }
    ngOnInit() {

        this.chartPlugins = [{
            beforeDraw: function (chart) {

                let ctx = chart.ctx;
                let width = chart.width;
                let height = chart.height;
                let fontSize = 1.50;
                let oldFill = ctx.fillStyle;

                ctx.restore();
                ctx.font = fontSize + "rem sans-serif";
                ctx.textBaseline = "middle";

                let text = 80 + "GB";
                let textX = Math.round((width - ctx.measureText(text).width) / 2);
                let textY = (height + chart.chartArea.top) / 2.25;


                ctx.fillStyle = chart.config.data.datasets[0].backgroundColor[0];
                ctx.fillText(text, textX, textY);
                ctx.fillStyle = oldFill;
                ctx.save();
            }
        }]

        this.fileChart = {

            datasets: [
                {
                    data: [300, 100],
                    backgroundColor: [
                        '#E0E3FF',
                        '#FFFFFF'
                    ],
                    hoverBackgroundColor: [
                        '#E0E3FF',
                        '#FFFFFF'
                    ],
                    borderColor: 'transparent',
                    fill: true
                }
            ]
        };

        this.fileChartOptions = {
            cutout: '80%',
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            }
        };
    }

}
