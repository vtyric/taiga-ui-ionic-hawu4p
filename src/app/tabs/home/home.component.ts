import { Component, Inject, TemplateRef } from "@angular/core";
import { NavController } from "@ionic/angular";
import {FormControl} from '@angular/forms';
import {
    TUI_DEFAULT_MATCHER,
    tuiPure,
    TuiStringHandler,
    TuiContextWithImplicit,
    ceil,
    sum,
} from '@taiga-ui/cdk';
import {TuiDialogService, TuiNotificationsService, TuiPoint} from '@taiga-ui/core';

const ITEMS: readonly string[] = [
    'Luke Skywalker',
    'Leia Organa Solo',
    'Darth Vader',
    'Han Solo',
    'Obi-Wan Kenobi',
    'Yoda',
];

@Component({
  selector: "page-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.style.scss"]
})
export class HomePage {
    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
        readonly navCtrl: NavController
    ) {}

    // Multiselect
    search = '';

    readonly control = new FormControl([ITEMS[0]]);

    @tuiPure
    filter(search: string | null): readonly string[] {
        return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
    }

    // Button with a dialog
    showDialog(template: TemplateRef<any>) {
        this.dialogService.open(template, {label: 'This is a dialog', size: 's'}).subscribe();
    }

    showNotification() {
        this.notificationsService
            .show('It is a simple notification', {
                label: 'Wow! With a heading!',
            })
            .subscribe();
    }

    // Tabs
    activeTab = 0;

    // Charts
    // LineChart
    readonly hint: TuiStringHandler<TuiContextWithImplicit<ReadonlyArray<TuiPoint>>> = ({
        $implicit,
    }) => `${$implicit[0][0]} items:\n\n${$implicit.map(([_, y]) => y).join('$\n')}$`;

    readonly values = [
        [
            [50, 50],
            [100, 75],
            [150, 50],
            [200, 150],
            [250, 155],
            [300, 190],
            [350, 90],
        ],
        [
            [50, 40],
            [100, 60],
            [150, 90],
            [200, 120],
            [250, 150],
            [300, 110],
            [350, 130],
        ],
        [
            [50, 30],
            [100, 90],
            [150, 80],
            [200, 50],
            [250, 130],
            [300, 190],
            [350, 150],
        ],
    ];

    // BarChart
    readonly value = [
        [3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637, 8779],
        [3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195, 3574],
    ];
    readonly labelsX = ['Jan 2019', 'Feb', 'Mar'];
    readonly labelsY = ['0', '10 000'];

    getHeight(max: number): number {
        return (max / ceil(max, -3)) * 100;
    }

    // RingChart
    readonly ringValue = [13769, 12367, 10172, 3018, 2592];

    private readonly sum = sum(...this.ringValue);
    private readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];

    getValue(index: number): number {
        return Number.isNaN(index) ? this.sum : this.ringValue[index];
    }

    getLabel(index: number): string {
        return Number.isNaN(index) ? 'Total' : this.labels[index];
    }
}
