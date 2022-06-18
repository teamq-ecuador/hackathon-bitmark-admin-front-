import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/api/product';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
    templateUrl: './ecommerce.dashboard.component.html'
})
export class EcommerceDashboardComponent implements OnInit, OnDestroy {

    knobValue: number = 90;

    selectedWeek: any;

    weeks: any[];

    barData: any;

    barOptions: any;

    pieData: any;

    pieOptions: any;

    products: Product[];

    subscription: Subscription;

    constructor(private productService: ProductService, private layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(config => {
            this.initCharts();
        });
    }

    ngOnInit(): void {
        this.weeks = [{
            label: 'Last Week', 
            value: 0,
            data: [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]]
        }, 
        {
            label: 'This Week', 
            value: 1,
            data: [[35, 19, 40, 61, 16, 55, 30], [48, 78, 10, 29, 76, 77, 10]]
        }];

        this.selectedWeek = this.weeks[0];
        this.initCharts();
        this.productService.getProductsSmall().then(data => this.products = data);
    }

    initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.barData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'Revenue',
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    barThickness: 12,
                    borderRadius: 12,
                    data: this.selectedWeek.data[0]
                },
                {
                    label: 'Profit',
                    backgroundColor: documentStyle.getPropertyValue('--primary-200'),
                    barThickness: 12,
                    borderRadius: 12,
                    data: this.selectedWeek.data[1]
                }
            ]
        };
    
        this.pieData = {
            labels: ['Electronics', 'Fashion', 'Household'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--teal-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--indigo-400'),
                        documentStyle.getPropertyValue('--purple-400'),
                        documentStyle.getPropertyValue('--teal-400')
                    ]
                }
            ]
        };

        this.barOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        usePointStyle: true,
                        font: {
                            weight: 700,
                        },
                        padding: 28
                    },
                    position: 'bottom'
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
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
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
    }

    onWeekChange() {
        let newBarData = {...this.barData};
        newBarData.datasets[0].data = this.selectedWeek.data[0];
        newBarData.datasets[1].data = this.selectedWeek.data[1];
        this.barData = newBarData;
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
